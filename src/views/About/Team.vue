<template>
  <section class="team">
    <a-card>
      <div slot="head">
        <h2 class="is-size-2 has-text-dark has-text-weight-bold">Asyncy Team</h2>
      </div>
      <div class="columns is-multiline is-team-container is-variable is-4">
        <div
          v-for="(member, idx) of members"
          :key="`team-list-${idx}`"
          class="column is-narrow">
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
    }, {
      name: 'Thomas Pedbereznak',
      picture: '//avatars1.githubusercontent.com/u/11602092?s=400&v=4',
      position: 'OMG Developer',
      social: { type: 'github-circle', url: '//github.com/tomped' }
    }, {
      name: 'Jacopo Cascioli',
      picture: '//d1qb2nb5cznatu.cloudfront.net/users/6973103-large?1506875842',
      position: 'Storyscript Developer',
      social: { type: 'github-circle', url: 'github.com/vesuvium' }
    }, {
      name: 'Sebastian Wilzbach',
      picture: '//avatars1.githubusercontent.com/u/4370550?s=400&v=4',
      position: 'Storyscript Developer',
      social: { type: 'github-circle', url: '//github.com/wilzbach' }
    }]
  })
}
</script>

<style lang="scss">
section.team {
  margin-top: 10rem;
  .is-team-container {
    margin-top: 3rem;
  }
}
</style>
