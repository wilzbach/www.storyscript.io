<template>
  <div
    :style="{
      marginTop: '70px',
      marginBottom: '70px',
    }"
  >
    <div
      :style="{
        width: '100%',
        textAlign: 'center',
      }"
    >
      <h1 :style="{
        color: 'white',
      }">
        {{title}}
      </h1>
      <div :style="{
        boxSizing: 'border-box',
        height: '2px',
        width: '50px',
        border: '2px solid white',
        margin: '25px auto 20px auto',
      }" />
      <div :style="{
        maxWidth: '750px',
        color: 'white',
        fontSize: '1em',
        lineHeight: '1.7em',
        margin: '0 auto',
      }">
        <p class="subtitle">{{subtitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
}
</script>
