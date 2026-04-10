---
sidebar_position: 5
title: TravelEase Infrastructure CDK
---

# TravelEase Infrastructure CDK

A production-ready serverless travel inquiry management system built with AWS CDK — featuring API Gateway, Lambda, DynamoDB, SES email notifications, and dead letter queues.

## Architecture Diagram

![TravelEase Architecture](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/generated-diagrams/travelease-architecture-final.png)

## Problem Statement

Build a serverless backend for a travel booking platform that handles customer inquiries — with input validation, spam protection, email notifications, and reliable message processing. The entire stack must be defined as infrastructure as code and deployable in minutes.

## Tools & Services

- **IaC:** AWS CDK (TypeScript)
- **API:** API Gateway with request validation, throttling, and CORS
- **Compute:** Lambda (serverless inquiry processing)
- **Database:** DynamoDB with point-in-time recovery
- **Email:** SES with DKIM authentication
- **Reliability:** SQS dead letter queue for failed messages
- **Monitoring:** CloudWatch logging and metrics

## Features

- Serverless architecture with auto-scaling
- Input validation and sanitization at API Gateway level
- Honeypot spam protection
- Rate limiting (50 req/min, burst 20)
- CORS support for web integration
- Dead letter queue for reliability
- Structured logging and monitoring

## Implementation Screenshots

### CDK Bootstrap & Deployment

![CDK Bootstrap](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/cdkbootstrap.png)

![CDK Deployment](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/traveleasecdkdeployment.png)

![CDK Deployment 2](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/traveleasecdkdeployment2.png)

### CloudFormation Stack

![CloudFormation Stack](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/cloudformation-stack.png)

![Stack Info](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/cloudformation-stack-info.png)

### API Testing & Form Submission

![API Test](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/Scretest-api-with-broader-ses-permission.png)

![Form Test](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/travelease-form-test.png)

![Successful Inquiry](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/travel%20inquiry-successful.png)

![Form Inquiry Successful](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/travelease-form-inquiry-successful.png)

### DynamoDB Storage

![DynamoDB Stored Inquiry](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/dynamodb-stored-inquiryid.png)

### Lambda & IAM

![Lambda Triggers](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/lambda-triggers.png)

![IAM Roles](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/iam-roles.png)

### Monitoring

![CloudWatch Metrics](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/travelease-cloudwatch-metrics.png)

![CloudWatch Log Groups](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/traveleaseinfracdkstack-cloudwatch-logroups.png)

![Successful Inquiry Log](https://raw.githubusercontent.com/codewithramesh-pradhan/travelease-infra-cdk/main/screenshots/travelease-successful-inquiry-log.png)

## Security Features

- **Input Validation:** JSON schema validation at API Gateway level
- **Rate Limiting:** API-level throttling (50 req/min, burst 20)
- **Honeypot Protection:** Hidden field to catch bots
- **CORS Configuration:** Controlled cross-origin access
- **IAM Least Privilege:** Minimal required permissions per resource
- **SES Conditions:** Restricted email sending permissions

## Key Metrics

| Metric | Value |
|---|---|
| **API Rate Limit** | 50 requests/min, burst 20 |
| **AWS Services Used** | 6 (API Gateway, Lambda, DynamoDB, SES, SQS, CloudWatch) |
| **Spam Protection** | Honeypot field — zero user friction |
| **Message Reliability** | SQS dead letter queue — zero message loss |
| **Deployment Time** | ~5 minutes from `cdk deploy` to live API endpoint |
| **Manual Console Steps** | 0 — fully automated IaC |

## Key Takeaways

- **API Gateway request validation** catches malformed input before it reaches Lambda — saves compute cost and improves security
- **SQS dead letter queues** are essential for any system where message loss is unacceptable
- **SES DKIM authentication** improves email deliverability and prevents spoofing
- **Honeypot fields** are a simple, effective spam prevention technique that doesn't degrade user experience
- DynamoDB on-demand pricing makes sense for variable-traffic inquiry systems

## Links

- [GitHub Repository](https://github.com/codewithramesh-pradhan/travelease-infra-cdk)
