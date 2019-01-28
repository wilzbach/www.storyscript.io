<template>
  <div class="about">
    <about-jumbo />
    <about-mission />
    <about-why />
    <about-team />
    <!-- <about-office /> -->
    <about-join footer />
    <about-footer />
  </div>
</template>

<script>
import AboutJumbo from './Jumbo'
import AboutMission from './Mission'
import AboutWhy from './Why'
import AboutTeam from './Team'
// import AboutOffice from './Office'
import AboutJoin from '@/components/Join'
import AboutFooter from '@/components/Footer'

export default {
  name: 'About',
  components: {
    AboutJumbo,
    AboutMission,
    AboutWhy,
    AboutTeam,
    // AboutOffice,
    AboutJoin,
    AboutFooter
  }
}
</script>
