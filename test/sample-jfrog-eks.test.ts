import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as SampleJfrogEks from '../lib/sample-jfrog-eks-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SampleJfrogEks.SampleJfrogEksStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
