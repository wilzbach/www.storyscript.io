<template>
  <div class="about">
    <div class="head text--center">
      <scene
        variant="about"/>
      <div class="columns is-mobile is-centered">
        <div class="column is-three-quarters">
          <h1>About Us</h1>
          <h4>Shaping the power of microservices to make it truly approachable for individual developers or teams of any size.</h4>
        </div>
      </div>
    </div>
    <div
      v-waves
      class="section">
      <div class="container">
        <div class="text--left">
          <h2>Our Story</h2>
          <p>Our mission is to shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size. Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Asyncy Platform manages the cloud infrastructure without reducing applications flexibility, paving the way for swift application development, where developers write the logic in Storyscript which choreographs services written in any language or library.</p>
          <h2>Our Team</h2>
          <div class="columns is-mobile is-multiline is-centered text--center">
            <div
              v-for="(u, i) of team"
              :key="`team-${i}`"
              class="column is-one-third user">
              <img
                :src="u.img"
                :alt="`${u.name} profile picture`">
              <h3 v-text="u.name" />
              <h5 v-text="u.role" />
            </div>
          </div>
          <h2>Office</h2>
          <p>Out HQ is in Amsterdam, one of Europe's fastest growing tech hubs; a city whose culture offers ideal work-life balance, cultivating a sustainable and energetic habitat.</p>
          <p><b>Asyncy</b><br>Entrepodok 25<br>1018 AD Amsterdam</p>
          <a-link
            href="//goo.gl/maps/mrBreqYtjj62"
            target="_blank"
            state="primary">Get Directions</a-link>
        </div>
      </div>
      <a-footer dark />
    </div>
  </div>
</template>

<script>
import Avatar1 from '@/assets/img/avatars/1.svg'
import Avatar2 from '@/assets/img/avatars/2.svg'
import Avatar3 from '@/assets/img/avatars/3.svg'

export default {
  name: 'About',
  data: () => ({
    team: [{
      img: Avatar1,
      name: 'Steve',
      role: 'Founder'
    }, {
      img: Avatar2,
      name: 'Jude',
      role: 'Platform Architect'
    }, {
      img: Avatar3,
      name: 'Whitney',
      role: 'Business Operations'
    }, {
      img: Avatar3,
      name: 'Jean',
      role: 'Frontend Developer'
    }, {
      img: Avatar1,
      name: 'Bas',
      role: 'Frontend Developer'
    }, {
      img: Avatar2,
      name: 'Melanie',
      role: 'Marketing Director'
    }]
  })
}
</script>

<style lang="scss" scoped>
.about {
  display: block;
  position: relative;
  z-index: 3;

  .user {
    img {
      width: 200px;
      height: 200px;
    }
    h3 { margin: 0; }
    h5 {
      padding-top: 0 !important;
    }
  }

  .head {
    max-width: 100%;
    min-height: 60vh;
    position: relative;
    top: 0;
    z-index: 2;
    margin-bottom: -100px;

    .scene {
      max-width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
    }
    .columns {
      position: absolute;
      margin: 0 auto;
      text-align: center;
      width: 100%;
      top: 0;
      bottom: 0;
    }
  }

  .section {
    margin-top: 200px !important;
  }

  .footer {
    background-color: color(dark) !important;
  }

  p { margin-bottom: 2rem; }
}
</style>
