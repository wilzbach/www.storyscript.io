<template>
  <s-layout>
    <s-container centered-v-h>
      <s-div
        size="10"
        padding="normal"
      >
        <h3 class="is-size-3 has-text-gray-2 has-text-weight-bold">Our Office</h3>
        <p class="is-size-6 has-text-gray-3">Our HQ is in Amsterdam, one of Europe's fastest growing tech hubs; a city whose culture<br>offers ideal work-life balance, cultivating a sustainable and energetic habitat.</p>
      </s-div>
      <s-div
        :padding="['none', 'large']"
        size="10"
      >
        <div class="map-container">
          <img
            src="@/assets/img/bg/map.png"
            width="100%"
            height="350px"
            alt="office map"
          >
        </div>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Office'
}
</script>

<style lang="scss">
.map-container {
  background-color: $white;
  padding: 1.5rem;
  margin-left: 0;
  width: 100%;
  @include desktop {
    width: calc(100% + 3rem);
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
  box-shadow: 0 5px 15px 0 rgba($black, 0.089);
  border-radius: 1rem;
  img {
    @include mobile {
      height: 500px;
      object-fit: cover;
    }
    display: block;
    border-radius: 0.5rem;
    margin: 0;
    padding: 0;
    object-fit: contain;
  }
}
</style>
