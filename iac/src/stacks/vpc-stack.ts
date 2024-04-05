import { Construct } from 'constructs';
import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { SubnetType } from 'aws-cdk-lib/aws-ec2';
import {companyName, domain, hostedZoneId} from "../constants";

export class VpcStack extends Stack {
  public vpc: ec2.Vpc;
  public publicHostedZone: route53.IHostedZone;
  public zone: route53.PrivateHostedZone;
  public privateZoneName: string;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create VPC
    this.vpc = new ec2.Vpc(this, `${companyName}-vpc`, { maxAzs: 2, vpcName: `${id}-vpc` });

    // Create PrivateHostedZone
    this.privateZoneName = `${this.stackName}.local`;
    this.zone = new route53.PrivateHostedZone(this, 'PrivateHostedZone', {
      zoneName: this.privateZoneName,
      vpc: this.vpc,
    });

    // Create PublicHostedZone
    this.publicHostedZone = route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId,
      zoneName: domain,
    });

    // CDK Stack Output
    new CfnOutput(this, 'SubnetIds', {
      value: this.vpc.selectSubnets({ subnetType: SubnetType.PUBLIC }).subnetIds.toString(),
    });

    this.vpc.privateSubnets.forEach(({ subnetId }) => {
      this.exportValue(subnetId);
    });
  }
}
