<template>
  <s-jumbo
    :size="current.size"
    :into="current.into"
    :small="current.small"
    :title="current.title"
    :class="{'is-home': current.name === 'home'}"
    :background="current.name !== 'home'"
  >
    <s-navbar
      slot="header"
      :items="menu"
      @logo="$router.push({ name: 'home' })"
    />
    <template v-if="current.name === 'home'">
      <template slot="title">Application Storytelling™<br> that amplifies development.</template>
      <s-container
        centered-h
        padding="normal"
      >
        <s-div size="8">
          <s-text
            :padding="['none', '2x']"
            p="1"
            alignment="centered"
          >Storyscript is top-level programming that orchestrates data flow between reusable, polyglot microservices and serverless functions with zero-devops deployments. Glue code for the cloud.</s-text>
        </s-div>
      </s-container>
      <s-container centered-h>
        <s-div size="3">
          <s-button full>Get Started</s-button>
        </s-div>
      </s-container>
    </template>
    <template v-else-if="current.name === 'loading'">
      <template slot="title">
        <i class="mdi mdi-spin mdi-loading" />
      </template>
    </template>
  </s-jumbo>
</template>

<script>
export default {
  name: 'StoryJumbo',
  data: () => ({
    jumbos: [{
      name: 'home',
      size: 'fullheight',
      title: '',
      small: ''
    }, {
      name: 'about',
      size: 'medium',
      title: 'Our Story',
      small: 'About Us'
    }, {
      name: 'contact',
      size: 'medium',
      title: 'Let\'s Talk',
      small: 'Contact'
    }, {
      name: 'events',
      size: 'medium',
      title: 'Upcoming Events',
      small: 'Meet up'
    }],
    visible: false
  }),
  computed: {
    menu: function () {
      return [
        { name: 'Blog', link: '//storyscript.io/blog' },
        { name: 'Docs', link: '//docs.storyscript.io' },
        { name: 'About', route: { name: 'about' }, active: this.$route.name === 'about' },
        { name: 'Hub', link: '//hub.storyscript.io' },
        { name: 'Contribute', link: '//github.com/storyscript', button: { state: 'secondary', size: 'small', borderless: true, iconRight: 'github-face' } }
      ]
    },
    current: function () {
      return (
        !this.visible
          ? { name: 'loading', size: 'fullheight' }
          : this.jumbos.filter(j => j.name === this.$route.name)[0] ||
            {
              name: 'not-found',
              size: 'fullheight',
              title: '404',
              small: 'Lost in space ?',
              into: 'chevron'
            }
      )
    }
  },
  watch: {
    '$route': function () {
      this.visible = true
    }
  },
  mounted: function () {
    if (this.$route.name) {
      this.visible = true
    }
  }
}
</script>

<style lang="scss">
.jumbo {
  &,
  & > * {
    transition: all 0.3s ease-in-out;
  }
}

.is-home {
  position: relative;
  &:before {
    content: "";
    z-index: 0;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: auto 85%;
    background-position: center bottom;
    background-repeat: no-repeat;
    // background-image: url("~@/assets/img/bg/home.png");
    // @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    //   only screen and (min--moz-device-pixel-ratio: 1.5),
    //   only screen and (-o-min-device-pixel-ratio: 1.5),
    //   only screen and (min-device-pixel-ratio: 1.5),
    //   only screen and (min-resolution: 192dpi),
    //   only screen and (min-resolution: 2dppx) {
    //   background-image: url("~@/assets/img/bg/home@2x.png");
    // }
    // @media only screen and (-webkit-min-device-pixel-ratio: 3),
    //   only screen and (min--moz-device-pixel-ratio: 3),
    //   only screen and (-o-min-device-pixel-ratio: 3),
    //   only screen and (min-device-pixel-ratio: 3),
    //   only screen and (min-resolution: 384dpi),
    //   only screen and (min-resolution: 3dppx) {
    //   background-image: url("~@/assets/img/bg/home@3x.png");
    // }
  }
}
</style>
