<template>
  <section class="team">
    <a-card>
      <template slot="head">
        <h2 class="is-size-2 has-text-dark has-text-weight-bold">Asyncy Team</h2>
      </template>
      <div class="columns is-multiline is-team-container">
        <div
          v-for="(member, idx) of members"
          :key="`team-list-${idx}`"
          class="column is-one-quarter">
          <team-card :member="member" />
        </div>
      </div>
    </a-card>
  </section>
</template>

<script>
import TeamCard from '@/components/TeamCard'

export default {
  name: 'Team',
  components: { TeamCard },
  data: () => ({
    members: [{
      name: 'Steve Peak',
      picture: '//avatars1.githubusercontent.com/u/2041757?s=460&v=4',
      position: 'CEO',
      social: { type: 'twitter', url: '//twitter.com/iopeak' }
    }, {
      name: 'Jude Pereira',
      picture: '//avatars2.githubusercontent.com/u/747087?s=460&v=4',
      position: 'Platform Architect',
      social: { type: 'github-circle', url: '//github.com/judepereira' }
    }, {
      name: 'Jean Barriere',
      picture: '//avatars2.githubusercontent.com/u/11390722?s=460&v=4',
      position: 'Frontend Developer',
      social: { type: 'github-circle', url: '//github.com/jeanbarriere' }
    }, {
      name: 'Ayda Oz',
      picture: '//ca.slack-edge.com/T882T2C72-UEF6K2R2R-a7ae5fbf1e10-460',
      position: 'Designer UI/UX',
      social: { type: 'twitter', url: '//twitter.com/aydaoz' }
    }]
  })
}
</script>

<style lang="scss" scoped>
.team {
  .is-team-container {
    margin-top: 3rem;
  }
}
</style>
