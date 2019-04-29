<template>
  <div class="about">
    <about-mission />
    <about-why />
    <about-team />
    <s-join
      internal
      footer
    />
  </div>
</template>

<script>
import AboutMission from './Mission'
import AboutWhy from './Why'
import AboutTeam from './Team'

export default {
  name: 'About',
  components: {
    AboutMission,
    AboutWhy,
    AboutTeam
  }
}
</script>
