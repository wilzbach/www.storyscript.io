<template>
  <section>
    <s-card
      marged="large"
      class="meet-card"
    >
      <s-div size="full">
        <s-container
          multiline
          full
          marged="medium"
        >
          <s-div size="5">
            <h2 class="is-size-2 has-text-gray-2 has-text-weight-semibold">Meet Storyscript</h2>
            <h5 class="is-size-5 has-text-gray-2">Your story to a distributed, cloud native application on Kubernetes.</h5>
            <div class="box-card">
              <h3>Blog: What is Storyscript ?</h3>
              <s-button
                link
                arrow
              >Read on Medium</s-button>
              <small>by Steve Peak</small>
            </div>
          </s-div>
          <s-div size="7">
            <s-container multiline>
              <s-div size="one-third">
                <div class="box">
                  <p>Asynchronous programming</p>
                </div>
              </s-div>
              <s-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </s-div>
              <s-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </s-div>
              <s-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </s-div>
              <s-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </s-div>
              <s-div size="one-third">
                <div class="box">
                  <p>Bash for k8s</p>
                </div>
              </s-div>
            </s-container>
          </s-div>
        </s-container>
      </s-div>
    </s-card>
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
