<template>
  <section class="section team">
    <div class="container">
      <div class="columns is-shaped is-multiline">
        <div class="column is-full text--left">
          <h2 class="title">Asyncy Team</h2>
        </div>
        <div
          v-for="(member, idx) of members"
          :key="`team-list-${idx}`"
          class="column">
          <team-card :member="member" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamCard from '@/components/About/TeamCard'

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
.team {
  .container {
    display: flex !important;
    justify-content: space-around;
    flex-direction: column;
    min-height: 100vh;
    .is-shaped {
      background-color: #F2F3F9 !important;
      background-image: url('~@/assets/img/box-bg2.svg');
      background-position: 100% 5%;
      background-repeat: no-repeat;
      border-radius: 60% / 8%;
      box-shadow: 0 20px 66px -30px rgba(119, 130, 198, .38);
      padding: 4rem;
    }
  }
  .title {
    color: #000;
  }
}
</style>
