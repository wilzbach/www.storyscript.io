<template>
  <s-layout
    background="light"
    padding="max"
  >
    <s-container centered-v>
      <s-div
        size="3 is-offset-1"
        class="has-text-centered"
      >
        <div class="logo-icon">
          <s-logo icon />
        </div>
      </s-div>
      <s-div size="7">
        <s-text
          :padding="['none', 'normal']"
          head="3"
        >Our mission is;</s-text>
        <s-text p="2">
          To shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size.<br><br>
          Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Storyscript Platform manages the cloud infrastructure without reducing applications flexibility, paving the way for swift application development, where developers write the logic in Storyscript which choreographs services written in any language or library.
        </s-text>
      </s-div>
    </s-container>
  </s-layout>
</template>

<style lang="scss" scoped>
.logo-icon {
  border-radius: 3.125rem;
  background-color: $white;
  box-shadow: 0 15px 61px 0 rgba(40, 34, 122, 0.13);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
  @include mobile {
    display: none;
  }
  svg {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3rem;
    top: 0;
    bottom: 0;
  }
}
</style>
