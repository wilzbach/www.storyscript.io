<template>
  <section class="section tweet">
    <div class="container">
      <div class="columns">
        <div class="column is-full text--left">
          <h2 class="title light">Dream bigger, <b>Go further with Asyncy!</b></h2>
          <h4 class="subtitle light">
            <span>Some tweets from our users. Follow us on twitter; </span>
            <a
              href="twitter.com/asyncy"
              title="Asyncy Twitter"
              target="_blank">@asyncy</a>
          </h4>
        </div>
      </div>
      <div class="columns is-multiline is-mobile">
        <div class="column is-full bottom-based">
          <div class="columns is-mobile">
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, architecto. Sapiente, necessitatibus quia. Sequi</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere dolorum</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full top-based">
          <div class="columns is-mobile">
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere dolorum</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere dolorum</p>
              </div>
            </div>
            <div class="column is-one-quarter">
              <div class="tweet-sample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis facere dolorum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.tweet {
  background-color: #E7E7EA !important;
  display: flex !important;
  align-items: center;

  .container {
    display: flex !important;
    justify-content: space-around;
    flex-direction: column;
    min-height: 100vh;
  }
  .title {
    color: #464769;
    b {
      color: #000;
    }
  }

  .subtitle {
    span {
      color: gray(700);
    }
    a {
      color: state(primary);
    }
  }

  .bottom-based {
    .column {
      margin-top: auto;
    }
  }

  .columns + .columns {
    margin-top: 4rem;
  }

  .tweet-sample {
    width: 100%;
    border-radius: .5rem;
    background-color: #fff;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.3);
    padding: 1rem 2rem;
    text-align: left;
  }
}
</style>
