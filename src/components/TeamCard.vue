<template>
  <div class="team-card">
    <div class="team-card-picture-container">
      <div
        :style="`background-image: url(${picture})`"
        class="picture"
      />
    </div>
    <s-level>
      <template slot="left">
        <s-text
          p="2"
          color="dark"
        >{{ name }}</s-text>
        <s-text
          small
          color="dark-blue"
        >{{ position }}</s-text>
      </template>
      <template slot="right">
        <a
          v-for="social of socials"
          :key="`list-social-${_uid}-${social.type}`"
          :href="social.url"
          :title="social.type.split('-')[0]"
          :class="social.type"
          target="_blank"
        >
          <i :class="['mdi', `mdi-${social.type}`]" />
        </a>
      </template>
    </s-level>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: { member: { type: Object, required: true } },
  computed: {
    picture: function () { return this.member.picture || '' },
    socials: function () { return this.member.socials },
    name: function () { return this.member.name },
    position: function () { return this.member.position }
  }
}
</script>

<style lang="scss">
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
      border-radius: 0.5rem;
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
    :not(.level-right) {
      .level-item {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    .level-item {
      a {
        font-size: 1.2rem;
        &.twitter {
          color: #3f99ff;
        }
        &.github-circle {
          color: $dark;
        }
        span {
          width: 18px;
          height: 18px;
        }
        a + a {
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
