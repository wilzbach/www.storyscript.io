<template>
  <section class="office">
    <div class="container">
      <h3 class="is-size-3 has-text-gray-2 has-text-weight-bold">Our Office</h3>
      <p class="is-size-6 has-text-gray-3">Our HQ is in Amsterdam, one of Europe's fastest growing tech hubs; a city whose culture<br>offers ideal work-life balance, cultivating a sustainable and energetic habitat.</p>
    </div>
    <div class="map-container">
      <div class="container">
        <img
          src="@/assets/img/bg/map.png"
          width="100%"
          height="350px"
          alt="office map"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Office'
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/mixins";

.office {
  h3 {
    margin: 5rem 0 2rem;
  }

  .map-container {
    position: relative;
    width: min-content;
    @include touch { width: auto; }
    max-width: 100%;
    margin: 3rem auto;
    text-align: center;
    background-color: $white;
    padding: .5rem;
    @include desktop {
      padding: 1.5rem;
      box-shadow: 0 5px 15px 0 rgba($black, 0.089);
    }
    border-radius: 1rem;
    height: auto;
    img {
      @include mobile {
        height: 500px;
        object-fit: cover;
      }
      display: block;
      border-radius: .5rem;
      margin: 0;
      padding: 0;
      object-fit: contain;
    }
  }
}
</style>
