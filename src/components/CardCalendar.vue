<template>
  <a
    :href="link"
    :title="title"
    class="card-calendar">
    <figure class="image">
      <img
        :src="picture"
        :alt="`picture of ${title}`">
      <figcaption>
        <div class="date-container">
          <span>{{ date | moment('D') }}</span>
          <span>{{ date | moment('MMM') }}</span>
        </div>
        <div class="text-container">
          <h4 class="is-size-4 has-text-white has-text-weight-semibold">{{ title }}</h4>
        </div>
      </figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  name: 'CardCalendar',
  props: {
    title: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    link: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss">
.card-calendar {
  margin: 0 auto;
  display: block;
  position: relative;
  width: 350px;
  height: 400px;
  background-color: $white;
  border-radius: 1rem;

  figure {
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 24px 36px -16px rgba($black, 0);
    height: 100%;

    &.image img {
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      box-shadow: 0 24px 36px -16px rgba($black, .4);
      figcaption {
        .text-container {
          background-color: $primary;
        }
      }
    }

    figcaption {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      .date-container {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border-radius: 5rem;
        width: 5rem;
        height: 5rem;
        background-color: $white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        span {
          display: block;
          text-align: center;
          line-height: 1.5;
          &:first-child {
            color: $primary;
            font-weight: 700;
            font-size: nth($sizes, 5);
            letter-spacing: 3px;
          }
          &:last-child {
            color: nth($grays, 2);
            font-weight: 700;
            font-size: nth($sizes, 6);
            letter-spacing: 3.75px;
            text-transform: uppercase;
          }
        }
      }

      .text-container {
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          background-image: linear-gradient(0deg, $black 0%, rgba($black, 0) 100%);
          bottom: -0.75rem;
          left: -0.75rem;
          right: -0.75rem;
          top: -2.25rem;
        }
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: .75rem;
        border-radius: .75rem;
        background-color: transparent;
        transition: all 0.1s ease-in;
        padding: 1.5rem 1rem 2rem;
      }

    }
  }
}
</style>
