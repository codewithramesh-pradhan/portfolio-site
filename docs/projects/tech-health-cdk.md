---
sidebar_position: 4
title: Tech Health CDK
---

# Tech Health CDK

A production-ready, HIPAA-compliant healthcare API infrastructure built with AWS CDK — featuring Cognito authentication, WAF protection, comprehensive monitoring, and encryption at rest.

## Architecture Diagram

![Tech Health Architecture](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/generated-diagrams/tech-health-architecture.png)

### Data Flow

![Data Flow Diagram](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/generated-diagrams/tech-health-data-flow.png)

### Security Architecture

![Security Architecture](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/generated-diagrams/tech-health-security.png)

## Problem Statement

Build a cloud-native, HIPAA-compliant healthcare API that handles patient data securely — with authentication, encryption, audit logging, and web application firewall protection — all defined and deployed through AWS CDK.

## Tools & Services

- **IaC:** AWS CDK (TypeScript)
- **Compute:** Lambda functions for API logic
- **Database:** DynamoDB with encryption at rest and point-in-time recovery
- **Auth:** Cognito user pools with MFA
- **Security:** WAF with managed rule sets, KMS encryption, CloudTrail audit logging
- **Monitoring:** CloudWatch alarms, dashboards, and log groups
- **Notifications:** SNS for alerting
- **CDN:** CloudFront for web application delivery

### API Endpoints

- `GET /patients` — List patients
- `POST /patients` — Create new patient
- `GET /patients/{id}` — Get patient information
- `PUT /patients/{id}` — Update patient information
- `DELETE /patients/{id}` — Delete patient

## Implementation Screenshots

### CDK Deployment & CloudFormation Stack

![CDK Deploy](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/cdk-deploy.png)

![CloudFormation Stack](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/cloudformation-techhealthcdkstack.png)

![Stack Resources](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/tech-health-stack-resources.png)

### Lambda Functions

![Lambda Functions](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/lambda-functions.png)

### DynamoDB

![DynamoDB Table](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/dynamodb-table.png)

![Patient Record](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/dynamodb-patient-record.png)

![Point-in-Time Recovery](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/database-point-in-time-reovery.png)

### Security — WAF, IAM, CloudFront

![WAF Protection Rules](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/WAF-protection-rules.png)

![IAM Roles](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/iam-roles-latest.png)

![CloudFront Distribution](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/cloudfront-webapplication.png)

### Monitoring — CloudWatch & CloudTrail

![CloudWatch Dashboard](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/cloudwatch.png)

![CloudWatch Logs](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/cloudwatch-logs.png)

![CloudWatch Alarms](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/tech-health-alarms.png)

![CloudTrail Events](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/cloudtrails-events.png)

### API & S3

![API Endpoint](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/API-endpoint-url.png)

![S3 Web Hosting](https://raw.githubusercontent.com/codewithramesh-pradhan/tech-health-cdk/master/screenshots/S3-tech-health-web.png)

## HIPAA Compliance Controls

| Safeguard | Implementation |
|---|---|
| **Access Control** | Cognito with MFA |
| **Audit Controls** | CloudTrail logging |
| **Integrity** | Data validation and checksums |
| **Transmission Security** | TLS encryption via CloudFront |
| **Encryption at Rest** | KMS encryption on DynamoDB and S3 |

## Key Metrics

| Metric | Value |
|---|---|
| **AWS Services Used** | 7 (Lambda, DynamoDB, Cognito, WAF, KMS, CloudFront, SNS) |
| **HIPAA Safeguards Covered** | 5 of 5 (Access, Audit, Integrity, Transmission, Encryption) |
| **Deployment Time** | ~8 minutes from `cdk deploy` to fully operational stack |
| **Manual Console Steps** | 0 — fully automated IaC |
| **CloudFormation Resources** | 40+ resources provisioned per deployment |
| **Monitoring** | CloudWatch alarms, dashboards, and CloudTrail audit logging |

## Key Takeaways

- **CDK constructs** make it straightforward to enforce security defaults across all resources
- **WAF managed rule sets** provide baseline protection without writing custom rules
- **Point-in-time recovery** on DynamoDB is essential for healthcare data — accidental deletes happen
- **KMS key rotation** should be enabled from day one, not bolted on later
- Health tech infrastructure demands extra attention to encryption, access logging, and audit trails
- `cdk synth` output should be reviewed regularly to understand what CloudFormation is actually generated

## Links

- [GitHub Repository](https://github.com/codewithramesh-pradhan/tech-health-cdk)
- [Full Project Documentation](https://github.com/codewithramesh-pradhan/tech-health-cdk/blob/master/PROJECT_DOCUMENTATION.md)
