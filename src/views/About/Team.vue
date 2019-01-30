<template>
  <section class="team">
    <a-card>
      <template slot="head">
        <h2 class="is-size-2 has-text-dark has-text-weight-bold">Asyncy Team</h2>
      </template>
      <div class="columns is-multiline">
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
      name: 'Jean Barriere',
      picture: '//avatars2.githubusercontent.com/u/11390722?v=4',
      position: 'Frontend Developer',
      social: { type: 'instagram', url: '//instagram.com/jeanbarriere' }
    }, {
      name: 'Jean Barriere',
      picture: '//avatars2.githubusercontent.com/u/11390722?v=4',
      position: 'Frontend Developer',
      social: { type: 'facebook', url: '//instagram.com/jeanbarriere' }
    }, {
      name: 'Jean Barriere',
      picture: '//avatars2.githubusercontent.com/u/11390722?v=4',
      position: 'Frontend Developer',
      social: { type: 'twitter', url: '//instagram.com/jeanbarriere' }
    }, {
      name: 'Jean Barriere',
      picture: '//avatars2.githubusercontent.com/u/11390722?v=4',
      position: 'Frontend Developer',
      social: { type: 'github', url: '//instagram.com/jeanbarriere' }
    }, {
      name: 'Jean Barriere',
      picture: '//avatars2.githubusercontent.com/u/11390722?v=4',
      position: 'Frontend Developer',
      social: { type: 'linkedin', url: '//instagram.com/jeanbarriere' }
    }]
  })
}
</script>

<style lang="scss" scoped>
.team {}
</style>
