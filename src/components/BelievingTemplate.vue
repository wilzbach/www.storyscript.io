<template>
  <div :class="['template', 'columns', 'is-vcentered', {'is-reversed': idx % 2 === 1}]">
    <div class="column is-half text--left">
      <h3 class="is-size-3 has-text-gray-2">
        We believe in amplifying <br>the
        <b>
          <vue-typer
            :repeat="0"
            :text="`${name}.`"
          />
        </b>
      </h3>
      <p
        class="is-size-6 content has-text-gray-3"
        v-text="content"
      />
      <p
        v-if="blog"
        class="blog is-size-6 has-text-uppercase has-text-weight-bold is-size-7"
      >
        <span class="has-text-gray-2 has-letter-spacing-large">
          Read Our Blog:
        </span>
        <a
          :href="blogUrl"
          :title="blog"
          class="is-primary"
          target="_blank">
          <span class="has-letter-spacing-large">
            {{ blog }}
            <a-icon icon="arrow" />
          </span>
        </a>
      </p>
    </div>
    <div class="column is-half">
      <img
        :alt="name"
        :src="picture"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'BelievingTemplate',
  props: {
    idx: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    blog: {
      type: String,
      required: false,
      default: undefined
    },
    blogUrl: {
      type: String,
      required: false,
      default: undefined
    },
    picture: {
      type: Blob,
      required: true
    }
  }
}
</script>

<style lang="scss">
.is-reversed {
  flex-direction: row-reverse;
}

.template {
  min-height: 100vh;
  .content {
    margin: 2rem 0 4rem;
  }

  .blog {
    span + a {
      margin-left: .5rem;
    }

    a {
      svg {
        height: .4rem;
        margin: .2rem 0;
      }
    }
  }
}
</style>
