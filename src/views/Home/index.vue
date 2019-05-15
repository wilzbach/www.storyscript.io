<template>
  <div class="home">
    <home-get-started />
    <home-flow />
    <home-zero-devops />
    <home-cloud-native />
    <home-use-cases />
    <home-build />
    <home-run />
    <home-open-source />
    <home-benefits />
    <!-- <home-tweet /> -->
    <s-join
      is-paddingless
      full
    />
  </div>
</template>

<script>
import HomeGetStarted from './GetStarted'
import HomeFlow from './Flow'
import HomeZeroDevops from './ZeroDevops'
import HomeCloudNative from './CloudNative'
import HomeUseCases from './UseCases'
import HomeBuild from './Build'
import HomeRun from './Run'
import HomeOpenSource from './OpenSource'
import HomeBenefits from './Benefits'
import HomeTweet from './Tweet'

export default {
  name: 'Home',
  components: {
    HomeGetStarted,
    HomeFlow,
    HomeZeroDevops,
    HomeCloudNative,
    HomeUseCases,
    HomeBuild,
    HomeRun,
    HomeOpenSource,
    HomeBenefits,
    HomeTweet
  }
}
</script>
