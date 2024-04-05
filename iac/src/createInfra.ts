import {App} from 'aws-cdk-lib';
// import {InfraStack} from './stacks/infra-stack';
import {env} from "./environment";
import {companyName} from "./constants";
import {VpcStack} from "./stacks/vpc-stack";
import {PostgresStack} from "./stacks/postgres-stack";

export const createInfra = () => {
  const app = new App();

  const { vpc } = new VpcStack(app, companyName);

  const { dbSecretArn } = new PostgresStack(app, `${companyName}-postgres-${env.stage}`, { vpc });

  // new InfraStack(app, `${companyName}-infra-${env.stage}`);
}
