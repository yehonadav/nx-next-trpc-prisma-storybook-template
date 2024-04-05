generated using [@ago-dev/nx-aws-cdk-v2](https://www.npmjs.com/package/@ago-dev/nx-aws-cdk-v2)  
`nx generate @ago-dev/nx-aws-cdk-v2:application iac`  

## Targets
Generated applications expose several functions to the CLI that allow users to deploy, destroy and bootstrap.

```bash
nx deploy myApp
nx destroy myApp
nx bootstrap myApp --profile=my-project
#see how to use aws environments https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html#bootstrapping-howto-cli
nx bootstrap myApp aws://123/us-east-1
```

## pre requisites

* install aws cli
* setup .aws creds with proper access
* be familiar with [cdk v2](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html)

## bootstrap

when you first run cdk on aws, bootstrap is required.
Bootstrapping is the process of preparing an environment for deployment.  
Bootstrapping is a one-time action  
that you must perform for every environment that you deploy resources into.  

```bash
cd ../
nx bootstrap iac --all --require-approval never --profile my-project
```

## deploy

```bash
cd ../
nx deploy iac --all --require-approval never --profile my-project
```  

## destroy

```bash
cd ../
nx destroy iac --all --require-approval never --profile my-project
```  
