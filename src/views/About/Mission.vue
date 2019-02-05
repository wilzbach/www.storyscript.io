<template>
  <section class="mission">
    <a-card>
      <div
        slot="head"
        class="columns is-centered"
      >
        <div class="column has-text-centered is-one-quarter">
          <div class="logo-icon">
            <a-logo
              icon
              variant="light" />
          </div>
        </div>
        <div class="column is-two-thirds">
          <h5 class="is-size-5 has-text-weight-bold has-text-gray-2">OUR MISSION IS;</h5>
          <p class="is-size-6 has-text-gray-2">
            To shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size.<br><br>Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Asyncy Platform manages the cloud infrastructure without reducing applications flexibility, paving the way for swift application development, where developers write the logic in Storyscript which choreographs services written in any language or library.
          </p>
        </div>
      </div>
    </a-card>
  </section>
</template>

<style lang="scss" scoped>
.mission {
  margin-top: -7.5rem;
  z-index: 1000;

  .logo-icon {
    border-radius: 50px;
    margin: auto;
    text-align: center;
    background-color: $dark;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.089);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    svg {
      position: relative;
      width: 150px;
      height: 150px;
      top: 0;
      bottom: 0;
    }
  }
}
</style>
