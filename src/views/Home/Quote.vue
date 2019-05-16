<template>
  <s-layout
    margin="7x5"
    class="has-background-lines"
  >
    <s-container centered-vh>
      <s-div
        size="half"
        class="has-text-centered"
      >
        <s-text
          p="0"
          padding="normal"
          color="dark-blue"
          class="is-quote"
        >We really believe in the Storyscript's vision of the future of programming.</s-text>
        <figure class="quote-avatar">
          <img
            src="~@/assets/img/annap.jpg"
            alt=""
          >
        </figure>
        <s-text
          p="1"
          bold
          color="dark-blue"
          padding="small"
        >Anna Patterson</s-text>
        <s-text
          p="2"
          color="dark-blue"
        >Previous VP Engineering <b>@Google</b> & Founder<br>Partner at <b>Gradient Ventures</b></s-text>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Quote'
}
</script>

<style lang="scss">
.quote-avatar {
  width: 3rem;
  height: 3rem;
  border: 1.5px solid #6b92ff;
  box-shadow: 0 22px 36px -8px rgba(0, 0, 0, 0.11);
  border-radius: 50%;
  display: inline-block;
  img {
    border-radius: 50%;
    max-width: 100%;
  }
}

.is-quote {
  position: relative;
  &:before,
  &:after {
    position: absolute;
    content: "“";
    font-size: 4rem;
    color: nth($grays, 4);
  }
  &:before {
    left: -1.5rem;
  }

  &:after {
    right: -1.5rem;
    bottom: 0;
  }
}
</style>
