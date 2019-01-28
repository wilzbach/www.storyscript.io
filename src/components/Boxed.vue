<template>
  <div class="boxed-container">
    <div class="boxed-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Boxed'
}
</script>

<style lang="scss" scoped>
.boxed-container {
  margin: 5rem auto;
  color: nth($grays, 2);
  padding: 1rem;
  border-radius: 1rem;
  background-color: $light;
  box-shadow: 0 5px 15px rgba(0, 0, 0, .089);
  .boxed-content {
    border: 1px solid #935DFF;
    border-radius: .5rem;
    padding: 2rem 1rem;
  }
}
</style>
