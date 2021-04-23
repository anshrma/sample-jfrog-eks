import { InstanceClass, InstanceSize, InstanceType } from '@aws-cdk/aws-ec2';
import { EndpointAccess, KubernetesVersion } from '@aws-cdk/aws-eks';
import * as rds from '@aws-cdk/aws-rds';
import cdk = require('@aws-cdk/core');
import * as jfrog from 'jfrog-cdk-constructs';


export class SampleJfrogEksStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new jfrog.JFrogEks(this,'JFrogEks',{
    createBottleRocketNodes:{
      instanceclass:InstanceClass.T3,
      instancesize:InstanceSize.LARGE,
      numberofnodes:4

    },
      eksNonBottleRocketNodes:{
        instanceclass:InstanceClass.T3,
        instancesize:InstanceSize.LARGE,
        numberofnodes:0,
      },
      eksProps: {
        clusterName: 'jfrog-platform',
        version: KubernetesVersion.V1_19,
  
        defaultCapacityInstance: InstanceType.of(
          InstanceClass.T3,
          InstanceSize.MEDIUM,
        ),
        defaultCapacity: 0,
        endpointAccess: EndpointAccess.PUBLIC_AND_PRIVATE,
  
      },
      rdsProps: {
        postgresversion: rds.PostgresEngineVersion.VER_12_5,
        databasename: 'artdb',
        username: 'artuser',
      },

    })
    // The code that defines your stack goes here
  }
}
