<template>
  <section class="section open-source">
    <div class="container">
      <div class="columns">
        <div class="column is-full text--left">
          <h2 class="title light">Asyncy is <b>open-source.</b></h2>
          <p>A vendor-neutral application development ecosystem to run on <br>
          <b>any cloud</b>, <b>on-premise</b> or the <b>Asyncy Cloud.</b></p>
          <div class="logo-container">
            <div class="columns">
              <div class="column is-one-quarter logo linux-foundation" />
              <div class="column is-one-quarter logo cnc-foundation" />
              <div class="column auto">
                <h3 class="light">A proud member of <br><b>CNCF and Linux Foundation.</b></h3>
              </div>
            </div>
          </div>
          <p>
            <span>Review source and contribute on </span>
            <a
              href="//github.com/asyncy"
              target="_blank"
              title="Github Asyncy">Github</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.open-source {
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

    .columns {
      border: 1px solid #935DFF;
      border-radius: .5rem;
    }

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
