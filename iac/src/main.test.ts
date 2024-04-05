import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { InfraStack } from './stacks/infra-stack';

test('Empty Stack', () => {
  const app = new App();
  // WHEN
  const stack = new InfraStack(app, 'iacTestStack');
  // THEN
  Template.fromStack(stack as Stack).templateMatches({
    Resources: {},
  });
});
