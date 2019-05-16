<template>
  <div :class="['template', 'columns', 'is-vcentered', {'is-reversed': idx % 2 === 1}]">
    <div class="column is-5 text--left">
      <s-text head="3">
        We believe in amplifying <br>the <b>{{ name }}.</b>
      </s-text>
      <s-text
        p="2"
        padding="normal"
        v-text="content"
      />
      <s-button
        v-if="blog"
        :url="blogUrl"
        :title="blog"
        link
        small
        arrow
      >

        {{ blog }}
      </s-button>
    </div>
    <div :class="['column', 'is-7', {'has-text-right': idx % 2 === 0 }]">
      <img
        :alt="name"
        :src="picture[0]"
        :srcset="`${picture[1]} 2x, ${picture[2]} 3x`"
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
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.template {
  margin: 10rem 0;

  .content {
    margin: 2rem 0 4rem;
  }

  .blog {
    span + a {
      margin-left: 0.5rem;
    }

    a {
      svg {
        height: 0.4rem;
        margin: 0.2rem 0;
      }
    }
  }
}
</style>
