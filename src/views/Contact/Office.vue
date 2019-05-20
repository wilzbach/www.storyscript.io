<template>
  <s-layout>
    <s-container centered-vh>
      <s-div size="8">
        <s-text
          alignment="centered"
          padding="normal"
          head="3"
        >Our Office</s-text>
        <s-text
          alignment="centered"
          p="1"
        >Out HQ is in Amsterdam, one of Europe's fastest growing tech hubs; a city whose culture offers ideal work-life balance, cultivating a sustainable and energetic habitat.</s-text>
      </s-div>
      <s-div
        padding="large"
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
