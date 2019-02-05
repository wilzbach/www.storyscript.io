<template>
  <div class="team-card">
    <div class="team-card-picture-container">
      <div
        :style="`background-image: url(${picture})`"
        class="picture" />
    </div>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="is-size-6 has-text-weight-semibold has-text-dark">{{ name }}</p>
          <p class="is-size-7 has-text-gray-2">{{ position }}</p>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a
            :href="socialUrl"
            :title="socialType.split('-')[0]"
            :class="socialType"
            target="_blank">
            <i :class="['mdi', `mdi-${socialType}`]" />
          </a>
        </div>
      </div>
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
  display: block;
  position: relative;
  min-width: 250px;

  .team-card-picture-container {
    background-color: $white;
    width: fit-content;
    padding: 1rem;
    box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.089);
    border-radius: 1rem;
    .picture {
      margin: 0;
      padding: 0;
      border-radius: .5rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      width: 220px;
      height: 220px;
    }
  }

  .level {
    margin-top: 1.5rem;
    padding: 0 1rem;
    .level-item {
      flex-direction: column;
      align-items: flex-start;
      a {
        font-size: 1.2rem;
        &.twitter  {
          color: #3F99FF;
        }
        &.github-circle {
          color: $dark;
        }
        span {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
