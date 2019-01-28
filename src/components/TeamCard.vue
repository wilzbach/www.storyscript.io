<template>
  <div class="team-card">
    <div class="card">
      <div
        :style="`background-image: url(${picture})`"
        class="picture" />
    </div>
    <div class="infos">
      <div class="social">
        <a
          :href="socialUrl"
          :title="socialType"
          target="_blank">
          <font-awesome-icon :icon="['fab', socialType]" />
        </a>
      </div>
      <span class="title">{{ name }}</span>
      <span class="subtitle">{{ position }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: { member: { type: Object, required: true } },
  computed: {
    picture: function () { return this.member.picture || '' },
    socialUrl: function () { return this.member.social.url },
    socialType: function () { return this.member.social.type },
    name: function () { return this.member.name },
    position: function () { return this.member.position }
  }
}
</script>

<style lang="scss" scoped>
.team-card {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 224px;

  .card {
    width: 100%;
    padding: .5rem;
    padding: 8px;
    box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.089);
    border-radius: .5rem;
    .picture {
      border-radius: .3rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      width: 208px;
      height: 208px;
    }
  }

  .infos {
    width: 100%;
    text-align: left;
    margin-top: 1rem;
  }

  .title {
    display: block;
    color: #000;
    font-weight: bold;
  }

  .subtitle {
    color: #464769;
  }

  .social {
    float: right;
    a {
      span {
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>
