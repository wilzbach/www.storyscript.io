<template>
  <section class="section join-beta">
    <div class="background">
      <!-- <stars-particles/> -->
      <div class="gradient-stars"/>
    </div>
    <div class="container">
      <div class="columns is-mobile">
        <div class="column is-full">
          <!-- <h4 class="content">
            <img src="@/assets/img/icon-rocket.svg">
            <a
              href="#"
              target="_blank"
              title="Join our crew">Join our crew</a>
            <span>or learn about our</span>
            <a
              href="#"
              target="_blank"
              title="Asyncy Champion Initiative"
            >Asyncy Champion Initiative</a>
            <span>.</span>
          </h4>-->
        </div>
      </div>
      <div class="columns story">
        <div class="column is-half">
          <h3 class="title light">
            Time to write
            <b>your story.</b>
          </h3>
        </div>
        <div class="column is-half auto">
          <form-beta/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormBeta from '@/components/Home/FormBeta'

export default {
  name: 'JoinBeta',
  components: { FormBeta }
}
</script>

<style lang="scss" scoped>
.join-beta {
  margin-top: -15rem !important;
  padding-top: 15rem !important;
  z-index: 0 !important;

  .title {
    color: #fff;
  }

  .auto {
    margin: auto;
  }

  .container {
    padding: 1rem 2rem 10rem !important;
    .story {
      margin-top: 5rem;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 !important;

    img {
      width: 28px;
      height: 28px;
      margin-right: 0.5rem;
    }
    span {
      color: #fff;
      margin: 0 0.25rem;
      font-weight: 200 !important;
    }
    a {
      color: #fff;
      font-weight: bold !important;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background-color: #000;
    z-index: -1;
    .gradient-stars {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      position: absolute;
      align-items: center;
      // background: linear-gradient(
      //     60deg,
      //     rgba(0, 0, 0, 0.5),
      //     rgba(darken(state(primary), 10%), 0.25)
      //   )
      //   repeat-x;
    }
  }
}
</style>
