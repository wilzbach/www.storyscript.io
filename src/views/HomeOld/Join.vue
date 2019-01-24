<template>
  <div class="section">
    <div class="container what">
      <h3 class="light">
        <a-logo /> is an auto-devops choreography platform,<br>empowering developers to rapidly build applications,<br>composed of 3 powerful tools:
      </h3>
      <div class="columns is-centered">
        <div class="column is-one-third">
          <img
            src="@/assets/img/Hub.svg"
            alt="Hub">
          <h4>Hub</h4>
          <p>A marketplace for microservice and function discovery</p>
        </div>
        <div class="column is-one-third">
          <img
            src="@/assets/img/Dashboard_old.svg"
            alt="Dashboard">
          <h4>Dashboard</h4>
          <p>Application and KPIs management (with data analytics and insights by default)</p>
        </div>
        <div class="column is-one-third">
          <img
            src="@/assets/img/Platform.svg"
            alt="Platform">
          <h4>Asyncy Platform</h4>
          <p>An execution environment which runs Storyscript as a Kubernetes plugin.</p>
        </div>
      </div>
    </div>
    <!--
    <div class="container">
      <h2>Scale</h2>
      <img
        src="@/assets/img/Scale.svg"
        alt="scale schema">
    </div>
    -->
    <!-- <div class="container"> -->
    <!-- <h2>Ready to join the revolution ?</h2> -->
    <!-- <p>Request beta access to receive a notification when the CLI is available.</p> -->
    <!-- <form-beta variant="neutral" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'Join'
}
</script>

<style lang="scss">
.what {
  h3 {
    color: gray(500);
    svg {
      height: 1.7rem !important;
      margin-bottom: -0.3rem;
    }
  }

  p {
    @include breakpoint(m) {
      padding: 0 5rem;
    }
  }

  padding: 0 2rem;
}
</style>
