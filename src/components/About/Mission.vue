<template>
  <section class="mission">
    <a-card>
      <div class="columns">
        <div class="column is-one-third">
          <div class="round logo-icon">
            <a-logo
              icon
              variant="light" />
          </div>
        </div>
        <div class="column is-two-thirds text--left">
          <h2 class="title">OUR MISSION IS;</h2>
          <p>to shape the power of microservices using Storyscript, a high-level programming language that can be used to choreograph microservices, making it truly approachable for individual developers or teams of any size.<br><br>Developers are now able to focus on core application logic, eliminating the complexity involved in producing an application. The FOSS (Free and Open Source) Asyncy Platform manages the cloud infrastructure without reducing applications flexibility, paving the way for swift application development, where developers write the logic in Storyscript which choreographs services written in any language or library.</p>
        </div>
      </div>
    </a-card>
  </section>
</template>

<style lang="scss" scoped>
.mission {
  .round {
    border-radius: 50px;
  }

  .logo-icon {
    background-color: $dark;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.089);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    svg {
      width: 150px;
      height: 150px;
    }
  }

  .title {
    color: #464769;
    b {
      color: $black;
    }
  }

  p {
    color: gray(700);
    letter-spacing: .025rem;
    b {
      color: $black;
    }
  }

  a {
    font-weight: bold;
    color: $primary;
  }

  .logo-container {
    margin: 2rem 0 4rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #F2F3F9;
    align-items: center;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.089);

    h3 {
      color: #464769;
      padding: 0 !important;
    }
  }
}
</style>
