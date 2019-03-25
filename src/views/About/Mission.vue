<template>
  <a-layout
    foreground="light"
    outside
    rounded
    padding="large"
  >
    <a-container vhcentered>
      <a-div
        size="4"
        class="has-text-centered"
      >
        <div class="logo-icon">
          <a-logo
            icon
            variant="light"
          />
        </div>
      </a-div>
      <a-div size="7">
        <h5 class="is-size-5 has-text-weight-bold has-text-gray-2 has-padding-bottom-1x">OUR MISSION IS;</h5>
        <p class="is-size-6 has-text-gray-2">
          To shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size.<br><br>Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Asyncy Platform manages the cloud infrastructure without reducing applications flexibility, paving the way for swift application development, where developers write the logic in Storyscript which choreographs services written in any language or library.
        </p>
      </a-div>
    </a-container>
  </a-layout>
</template>

<style lang="scss" scoped>
.logo-icon {
  border-radius: 67.5px;
  background-color: $dark;
  box-shadow: 0 15px 61px 0 rgba(0, 0, 0, 0.29);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  svg {
    position: relative;
    width: 150px;
    height: 150px;
    top: 0;
    bottom: 0;
  }
}
</style>
