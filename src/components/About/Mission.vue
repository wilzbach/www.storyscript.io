<template>
  <section class="section mission">
    <div class="container">
      <div class="columns is-shaped">
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mission {
  .container {
    .is-shaped {
      margin-top: -10rem;
      background-color: #F2F3F9 !important;
      background-image: url('~@/assets/img/box-bg.svg');
      background-position: top right;
      background-repeat: no-repeat;
      border-radius: 60% / 8%;
      box-shadow: 0 20px 66px -30px rgba(119, 130, 198, .38);
      padding: 4rem;
    }
  }
  .round {
    border-radius: 50px;
  }

  .logo-icon {
    background-color: #0A0A0A;
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
      color: #000;
    }
  }

  p {
    color: gray(700);
    letter-spacing: .025rem;
    b {
      color: #000;
    }
  }

  a {
    font-weight: bold;
    color: state(primary);
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

    .auto {
      justify-content: center;
      flex: 1 1 100%;
      display: flex;

    }

    .logo {
      height: 48px;
      margin: 2rem 0;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      &.linux-foundation { background-image: url('~@/assets/img/linux-foundation.png') }
      &.cnc-foundation { background-image: url('~@/assets/img/cnc-foundation.png') }

    }
  }
}
</style>
