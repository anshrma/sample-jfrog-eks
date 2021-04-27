import { InstanceClass, InstanceSize, InstanceType } from '@aws-cdk/aws-ec2';
import { EndpointAccess, KubernetesVersion, MachineImageType } from '@aws-cdk/aws-eks';
import * as rds from '@aws-cdk/aws-rds';
import cdk = require('@aws-cdk/core');
import * as jfrog from 'jfrog-cdk-constructs';


export class BottleRocket extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new jfrog.JFrogEks(this,'JFrogEks',{
      eksClusterProps:{
        clusterName: 'jfrog-platform',
        version: KubernetesVersion.V1_19,
        endpointAccess: EndpointAccess.PUBLIC_AND_PRIVATE,
        defaultCapacity: 0
      },
      eksNodesProps:{
        instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.LARGE),
        machineImageType: MachineImageType.BOTTLEROCKET,
        minCapacity: 4
      },
      rdsProps:{
        postgresversion: rds.PostgresEngineVersion.VER_12_5,
        databasename: 'artdb',
        username: 'artuser',
      }
    })
    // The code that defines your stack goes here
  }
}
