# Welcome to the sample CDK TypeScript project to install JFrog Platform on EKS!

This repository hosts code samples that you can use to get started for creating JFrog Platform on EKS using jfrog-cdk-constructs AWS CDK Construct. 

Please let us know if you need more samples by opening an issue here and we would priortize it.

## Sample use cases

|Use Case | Sample Code to refer  |
--- | --- |
|Use BottleRocket Operating System for powering your worker nodes | /lib/bottlerocket.ts|

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## RDS Credentials

 * Go to AWS Secrets Manager and retrieve the RDS credentials

 **Note or pass these credentials in helm-values/artifactory-ha-values.yaml**

 ## Certificate Manager

 Request a Public or Private Certificate from AWS ACM, detailed mentioned at https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-private.html or https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html .

 **Note or pass the certificate ARN in helm-values/artifactory-ha-values.yaml, which will be used on the Load balancer to secure the communication.** 

 ## Deploy JFrog Suite

 ```
helm repo add center https://repo.chartcenter.io

helm repo update

helm upgrade --install jfrog-platform \
--create-namespace \
--namespace jfrog-platform center/jfrog/jfrog-platform \
-f helm-values/artifactory-ha.yaml
 ```

 **Note the artifactory URL to be used and open it in browser to enter your license keys**
