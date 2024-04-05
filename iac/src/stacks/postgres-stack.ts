import { Construct } from 'constructs';
import { Stack } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import { StorageType } from 'aws-cdk-lib/aws-rds';
import { env } from '../environment';
import {companyName} from "../constants";

interface PostgresStackProps {
  vpc: ec2.Vpc;
}

export class PostgresStack extends Stack {
  public dbSecretArn: string;

  constructor(scope: Construct, id: string, { vpc }: PostgresStackProps) {
    super(scope, id);

    // Create RDS SubnetGroup
    const publicSubnetGroup = new rds.SubnetGroup(this, 'PostgresPublicSubnetGroup', {
      vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
      subnetGroupName: `${id}-public-subnet-group`,
      description: `rds postgres ${env.stage} public subnet group`,
    });

    // Create Postgres DB
    const instanceType = ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MICRO);

    const credentials = rds.Credentials.fromGeneratedSecret(companyName, {
      secretName: `${env.stage}/postgres`,
    });

    const db = new rds.DatabaseInstance(this, 'PostgresDB', {
      vpc,
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_16_2,
      }),
      subnetGroup: publicSubnetGroup,
      publiclyAccessible: true,
      autoMinorVersionUpgrade: false,
      storageType: StorageType.GP2,
      allocatedStorage: 20,
      maxAllocatedStorage: 100,
      credentials,
      instanceType,
      databaseName: companyName,
      multiAz: false,
      instanceIdentifier: `${companyName}-postgres-${env.stage}`,
    });
    db.connections.allowDefaultPortFromAnyIpv4();
    this.dbSecretArn = db.secret!.secretFullArn!;
  }
}
