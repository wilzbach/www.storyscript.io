<template>
  <section>
    <a-card
      marged="large"
      class="meet-card"
    >
      <a-div size="full">
        <a-container
          multiline
          full
          marged="medium"
        >
          <a-div size="5">
            <h2 class="is-size-2 has-text-gray-2 has-text-weight-semibold">Meet Asyncy</h2>
            <h5 class="is-size-5 has-text-gray-2">Your story to a distributed, cloud native application on Kubernetes.</h5>
            <div class="box-card">
              <h3>Blog: What is Asyncy ?</h3>
              <a-button
                link
                arrow
              >Read on Medium</a-button>
              <small>by Steve Peak</small>
            </div>
          </a-div>
          <a-div size="7">
            <a-container multiline>
              <a-div size="one-third">
                <div class="box">
                  <p>Asynchronous programming</p>
                </div>
              </a-div>
              <a-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </a-div>
              <a-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </a-div>
              <a-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </a-div>
              <a-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </a-div>
              <a-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </a-div>
            </a-container>
          </a-div>
        </a-container>
      </a-div>
    </a-card>
  </section>
</template>

<script>
export default {
  name: 'Meet'
}
</script>

<style lang="scss">
.meet-card {
  .container {
    margin-top: -5rem;
  }
}
</style>
