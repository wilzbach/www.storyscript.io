<template>
  <div class="solution">
    <div class="container">
      <div class="columns is-vcentered is-multiline">
        <div class="column dots-container">
          <a-icon
            :props="{ idx }"
            icon="dots"
          />
        </div>
        <div class="column is-full">
          <h2 class="is-size-2 has-text-white has-text-weight-bold">
            {{ idx > 0 ? 'Asyncy ' : '' }}
            <vue-typer
              :repeat="0"
              :text="name"
              class="dark"
            />
          </h2>
          <a-icon icon="separator" />
          <p
            class="is-size-7 has-line-height-6 has-text-gray-4"
            v-html="content" />
        </div>
        <solution-svg
          :step="idx"
          class="picture"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SolutionSvg from './SolutionSvg'

export default {
  name: 'SolutionTemplate',
  components: { SolutionSvg },
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
    }
  }
}
</script>

<style lang="scss" scoped>
.solution {
  background-color: $dark;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .container {
    @include touch {
      padding: 2rem 3rem;
    }
  }

  .dots-container {
    @include touch {
      display: none;
    }
    position: absolute;
    top: 3rem;
    left: -3rem;
    @include touch { left: 0 }
    width: 3rem;
    flex: 0 0 auto;
    margin: auto 0;
    text-align: center;
  }

  .picture {
    margin: 4rem 0 0;
  }
}
</style>
