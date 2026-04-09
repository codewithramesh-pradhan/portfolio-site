---
sidebar_position: 1
title: Common AWS Issues
---

# Common AWS Issues & Resolutions

Real troubleshooting scenarios I've encountered and resolved. Each entry documents the symptom, investigation process, root cause, and fix.

---

## EC2 Instance Not Reachable via SSH

**Symptom:** `ssh: connect to host <ip> port 22: Connection timed out`

**Investigation:**
1. Verified the instance was in `running` state in the console
2. Checked the security group — port 22 was open to `0.0.0.0/0` ✅
3. Checked the NACL on the subnet — outbound ephemeral ports were blocked ❌

**Root Cause:** The subnet's Network ACL had a restrictive outbound rule that blocked ephemeral ports (1024–65535). NACLs are stateless, so even though inbound SSH was allowed, the response traffic was being dropped.

**Fix:**
```bash
# Added outbound rule to allow ephemeral ports
aws ec2 create-network-acl-entry \
  --network-acl-id acl-xxxxx \
  --rule-number 100 \
  --protocol tcp \
  --port-range From=1024,To=65535 \
  --cidr-block 0.0.0.0/0 \
  --rule-action allow \
  --egress
```

**Lesson:** Always check NACLs when security groups look correct. NACLs are stateless — you need explicit rules for both directions.

---

## S3 Bucket Policy Denying Access Despite Correct IAM Permissions

**Symptom:** `AccessDenied` when calling `PutObject` on an S3 bucket, even though the IAM user had `s3:PutObject` permission.

**Investigation:**
1. Confirmed IAM policy allowed `s3:PutObject` on the bucket ARN ✅
2. Checked for explicit deny in IAM policies — none found ✅
3. Reviewed the bucket policy — found an explicit `Deny` for requests without `aws:SecureTransport` ❌

**Root Cause:** The bucket policy included a condition that denied all requests not using HTTPS. The CLI was configured to use HTTP for that endpoint.

**Fix:**
Ensured all S3 requests use HTTPS (default in modern AWS CLI). Verified with:
```bash
aws s3api put-object --bucket my-bucket --key test.txt --body test.txt --debug 2>&1 | grep "https"
```

**Lesson:** Bucket policies can override IAM permissions with explicit denies. Always check both IAM and resource-based policies when debugging access issues.

---

## CloudFormation Stack Stuck in DELETE_FAILED

**Symptom:** Stack deletion hangs on an S3 bucket resource with `DELETE_FAILED` status.

**Root Cause:** CloudFormation cannot delete a non-empty S3 bucket by default.

**Fix:**
```bash
# Empty the bucket first
aws s3 rm s3://my-bucket --recursive

# Retry stack deletion
aws cloudformation delete-stack --stack-name my-stack
```

**Lesson:** For S3 buckets managed by CloudFormation, either use a custom resource Lambda to empty the bucket on delete, or set `DeletionPolicy: Retain` and handle cleanup separately.

---

## RDS Instance Not Accessible from EC2

**Symptom:** Application on EC2 cannot connect to RDS — `Connection timed out`.

**Investigation:**
1. Verified RDS was in `available` state ✅
2. Checked RDS security group — inbound rule allowed port 3306 from `0.0.0.0/0` (too broad, but should work) ✅
3. Checked EC2 and RDS were in the same VPC ✅
4. Checked subnet route tables — RDS was in a subnet with no route to the EC2 subnet ❌

**Root Cause:** RDS was deployed in a subnet that didn't have routing to the EC2 instance's subnet. Both were in the same VPC but in isolated subnets.

**Fix:** Updated the RDS subnet group to use subnets that share route tables with the EC2 subnets. Tightened the security group to allow MySQL traffic only from the EC2 security group.

**Lesson:** Same VPC doesn't automatically mean connectivity. Subnet routing and security group references matter.
