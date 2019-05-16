<template>
  <s-layout padding="large">
    <s-container :padding="['large', 'normal']">
      <s-div
        :padding="['none', 'large']"
        size="full"
      >
        <s-text
          head="2"
          alignment="centered"
        >Storyscript Team</s-text>
      </s-div>
      <s-div
        v-for="(member, idx) of members"
        :key="`team-list-${idx}`"
        :padding="['none', 'normal']"
        class="is-narrow"
      >
        <team-card :member="member" />
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
import TeamCard from '@/components/TeamCard'

export default {
  name: 'Team',
  components: { TeamCard },
  data: () => ({
    members: [{
      name: 'Steve Peak',
      picture: '//avatars.githubusercontent.com/u/2041757?s=460&v=4',
      position: 'CEO',
      socials: [{ type: 'twitter', url: '//twitter.com/iopeak' }, { type: 'github-face', url: '//github.com/stevepeak' }]
    }, {
      name: 'Jude Pereira',
      picture: '//avatars.githubusercontent.com/u/747087?s=460&v=4',
      position: 'Platform Architect',
      socials: [{ type: 'twitter', url: '//twitter.com/judebpereira' }, { type: 'github-face', url: '//github.com/judepereira' }]
    }, {
      name: 'Jean Barriere',
      picture: '//avatars.githubusercontent.com/u/11390722?s=460&v=4',
      position: 'Frontend Developer',
      socials: [{ type: 'twitter', url: '//twitter.com/j_barriere' }, { type: 'github-face', url: '//github.com/jeanbarriere' }]
    }, {
      name: 'Ayda Oz',
      picture: '//ca.slack-edge.com/T882T2C72-UEF6K2R2R-a7ae5fbf1e10-460',
      position: 'Designer UI/UX',
      socials: [{ type: 'twitter', url: '//twitter.com/aydaoz' }]
    }, {
      name: 'Sebastian Wilzbach',
      picture: '//avatars.githubusercontent.com/u/4370550?s=400&v=4',
      position: 'Storyscript Developer',
      socials: [{ type: 'twitter', url: '//twitter.com/swilzbach' }, { type: 'github-face', url: '//github.com/wilzbach' }]
    }, {
      name: 'Aurélien Arino',
      picture: '//avatars.githubusercontent.com/u/10957531?s=400&v=4',
      position: 'OMG Developer',
      socials: [{ type: 'github-face', url: '//github.com/Arinono' }]
    }, {
      name: 'Kenneth Reitz',
      picture: '//avatars.githubusercontent.com/u/47496974?s=400&v=4',
      position: 'Director of DevEx',
      socials: [{ type: 'twitter', url: '//twitter.com/kennethreitz' }, { type: 'github-face', url: '//github.com/kennethreitz' }]
    }]
  })
}
</script>
