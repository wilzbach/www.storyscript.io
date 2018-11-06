<template>
  <div class="benefit">
    <div class="columns center">
      <div class="column is-one-fifth icon">
        <span :class="`i-${icon}`" />
      </div>
      <div class="column is-four-fifths">
        <h3 class="title text--dark text--left">{{ title }}</h3>
        <p class="text--left">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefit',
  props: {
    icon: {
      type: String,
      default: '',
      description: 'The benefit icon'
    },
    title: {
      type: String,
      default: '',
      description: 'The benefit title'
    },
    content: {
      type: String,
      default: '',
      description: 'The benefit content'
    }
  }
}
</script>

<style lang="scss" scoped>
.benefit {
  display: block;
  position: relative;
  .columns {
    .column {
      & > * {
        white-space: normal;
      }
      &.icon {
        align-self: center;
        span {
          display: inline-flex;
          position: relative;
          width: 5.5rem;
          height: 5.5rem;
          padding: 0;
          background-size: 100% 100%;
          @for $i from 1 through 6 {
            &.i-#{$i} {
              background-image: url('~@/assets/img/benefits/#{$i}.svg');
            }
          }
        }
      }
    }
  }
}
</style>
