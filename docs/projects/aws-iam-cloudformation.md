---
sidebar_position: 6
title: AWS IAM CloudFormation
---

# AWS IAM CloudFormation — Enterprise Security Implementation

An enterprise-grade IAM solution implementing role-based access control (RBAC) with comprehensive security controls, CI/CD pipeline, audit logging, and compliance features — all through Infrastructure as Code.

## Architecture Diagram

![AWS IAM DevSecOps Architecture](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/aws-iam-devops-architecture.png)

## Problem Statement

Manually creating IAM users, roles, and policies through the console leads to inconsistency, over-permissioned identities, and no audit trail. This project defines all IAM resources as CloudFormation templates — version-controlled, reviewable, and reproducible — with automated CI/CD validation.

## Tools & Services

- **IaC:** CloudFormation (YAML) — 8,915+ lines of production code
- **Services:** IAM (Users, Groups, Roles, Policies, Permission Boundaries)
- **Security:** MFA enforcement, password policy, least-privilege access
- **Audit:** CloudTrail with multi-region coverage, S3 log storage
- **CI/CD:** GitHub Actions with Checkov security scanning
- **Compliance:** SOC 2, ISO 27001, CIS benchmark alignment

## IAM Groups & Users

| Group | Users | Permissions | Use Case |
|---|---|---|---|
| **Developers** | 4 users | EC2, S3 Full Access | Development & Testing |
| **Operations** | 2 users | Infrastructure Management | Production Operations |
| **Finance** | 1 user | Billing & Cost Management | Financial Oversight |
| **Analysts** | 3 users | Read-Only Access | Reporting & Analytics |

## Implementation Screenshots

### CloudFormation Stack Deployment

![CloudFormation Stack](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/cloudformation_Stacks_outputspng.png)

### IAM Groups Overview

![IAM User Groups](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/user_groups.png)

### Developers Group

![Developers Users](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/developers-users.png)

![Developers Permissions](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/developers-granting-permissions.png)

### Operations Group

![Operations Users](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/operations-users.png)

![Operations Permissions](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/operations-granting-permissions.png)

### Finance Group

![Finance User](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/finance-user.png)

![Finance Permissions](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/finance-granting-permissions.png)

### Analysts Group

![Analysts Users](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/analyst-users.png)

![Analysts Permissions](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/analysts-granting-permissions.png)

### Security Configuration

![Password Policy](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/password-policy.png)

### Audit & Compliance

![CloudTrail Audit Trail](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/cloudtrail_audit_trail.png)

![S3 Audit Bucket](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/S3_Iam-setup-stack-cloudtrail_object.png)

### CI/CD Pipeline

![GitHub Actions Workflow](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/github-action-validate.png)

![GitHub Actions Job Details](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/github-action-validate-job.png)

![CI/CD Overview](https://raw.githubusercontent.com/codewithramesh-pradhan/aws-iam-cloudformation/main/screenshots/github-cicd.png)

## Security Controls

- **MFA Enforcement:** Mandatory for all users — denies non-MFA actions
- **Password Policy:** 14-char minimum, complexity required, 90-day rotation, 12-password reuse prevention
- **Audit Logging:** Multi-region CloudTrail with log file validation
- **Least Privilege:** Minimal required permissions per role
- **Encrypted Storage:** S3 audit bucket with public access blocked

## Compliance Frameworks

- ✅ SOC 2 Type II — Identity and access controls
- ✅ ISO 27001 — Information security management
- ✅ CIS AWS Foundations — Security configuration benchmarks
- ✅ AWS Well-Architected — Security pillar alignment

## Key Takeaways

- **Group-based access** is more maintainable than per-user policies — users inherit permissions from their group
- **Permission boundaries** prevent privilege escalation even if a developer creates a new role
- **Explicit deny** statements override any allow — ideal for guardrails like MFA enforcement
- **Checkov scanning** in CI catches security misconfigurations before they reach production
- Codifying IAM in CloudFormation creates an auditable Git history of every permission change
- **CloudTrail + S3** provides a tamper-evident audit log for compliance requirements

## Links

- [GitHub Repository](https://github.com/codewithramesh-pradhan/aws-iam-cloudformation)
