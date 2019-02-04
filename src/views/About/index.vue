<template>
  <div class="about">
    <about-mission />
    <about-why />
    <about-team />
    <about-join footer />
  </div>
</template>

<script>
import AboutMission from './Mission'
import AboutWhy from './Why'
import AboutTeam from './Team'
import AboutJoin from '@/components/Join'

export default {
  name: 'About',
  components: {
    AboutMission,
    AboutWhy,
    AboutTeam,
    AboutJoin
  }
}
</script>
