<template>
  <section class="section problem">
    <div class="container">
      <a-card class="a-card">
        <div class="head">
          <h2 class="is-size-2 has-text-dark">Applications are <b>stories of data.</b></h2>
          <h5 class="is-size-5 has-text-gray-2">Create a Slack bot that replies with the weather forecast.</h5>
        </div>
        <svg
          class="dots-separator"
          width="100%"
          height="12px"
          viewBox="0 0 886 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd">
            <g
              transform="translate(1, 1)"
              fill-rule="nonzero">
              <path
                d="M2.5,5.09347003 L879.688787,5.09347003"
                stroke="#C6C7DC"
                stroke-linecap="round"
                stroke-dasharray="4 6"
              />
              <circle
                stroke="#5805FC"
                stroke-width="2"
                fill="#5805FC"
                cx="879"
                cy="5"
                r="5"/>
              <circle
                stroke="#5805FC"
                stroke-width="2"
                fill="#F2F3F9"
                cx="5"
                cy="5"
                r="5"/>
              <circle
                stroke="#5805FC"
                stroke-width="2"
                fill="#AFA3C8"
                cx="295"
                cy="5"
                r="5"/>
              <circle
                stroke="#5805FC"
                stroke-width="2"
                fill="#8367BB"
                cx="585"
                cy="5"
                r="5"/>
            </g>
          </g>
        </svg>
        <div class="columns">
          <div class="column is-one-quarter">
            <div class="step-card">
              <div class="picture slack-bot"/>
              <div class="what">create a slack bot</div>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div class="step-card">
              <div class="picture neural-network"/>
              <div class="what">neural network</div>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div class="step-card">
              <div class="picture accuweather"/>
              <div class="what">accuweather</div>
            </div>
          </div>
          <div class="column is-one-quarter">
            <div class="step-card">
              <div class="picture send-reply"/>
              <div class="what">send reply</div>
            </div>
          </div>
        </div>
      </a-card>
      <div class="columns is-centered text--left separated">
        <div class="column is-full">
          <h5 class="is-size-5 has-text-gray-2">
            It's 2019; software development is still
            <br>riddled with <b>unnecessary complexity</b> and <b>poor reusability.</b>
          </h5>
          <div class="complexity"/>
          <h5 class="is-size-5 has-text-gray-2">
            Time to <b>drop the complexity</b> and <b>amplify the story of data</b>
            <br>by designing service-oriented, fully-asynchronous applications.
          </h5>
          <div class="boxed">
            <h3 class="is-size-3 has-text-dark">
              We need a language for <b>data storytelling.</b>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.problem {
  // background-color: #F2F3F9 !important;
  padding: 3rem 0 !important;

  .container {
    .is-shaped {
      background-color: #f2f3f9 !important;
      background-image: url("~@/assets/img/box-bg.svg");
      background-position: top right;
      background-repeat: no-repeat;
      border-radius: 60% / 8%;
      box-shadow: 0 20px 66px -30px rgba(119, 130, 198, 0.38);
      padding: 4rem;
    }
    // &:before {
    //   z-index: -1;
    //   content: '';
    //   position: absolute;
    //   top: 9%;
    //   bottom: 9%;
    //   right: -4.5%;
    //   left: -4.5%;
    //   background: inherit;
    //   border-radius: 5% / 45%;
    // }
  }

  .separated { margin-top: 9.25rem }

  .boxed {
    margin: 5rem auto;
    text-align: center;
    color: #464769 !important;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #F2F3F9;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.089);

    h3 {
      border: 1px solid #935DFF;
      padding: 2rem 0 !important;
      border-radius: .5rem;
    }
  }

  .complexity {
    margin: 5rem 0;
    height: 500px;
    width: 100%;
    background-size: contain;
    background-image: url("~@/assets/img/complexity.svg");
    background-repeat: no-repeat;
    background-position: center center;
  }

  h1 {
    color: #000;
    padding-bottom: 8px !important;
  }

  .step-cards-container {
    max-width: 1150px;
    margin: auto;
  }

  .step-card {
    background-color: #fff;
    border-radius: 0.5rem;
    display: flex;
    height: 250px;
    width: 100%;
    max-width: 250px;
    padding: 0;
    flex-direction: column;
    margin: auto;

    div {
      flex-grow: 0;
      width: 100%;
      padding: 0.5rem;
      text-align: center;
      margin: auto;
    }
    div + div {
      border-top: 1px solid #f2f3f9;
    }
  }

  .a-card {
    .head {
      margin: 5rem 0;
    }
  }

  .columns {
    // @include breakpoint(max s) {
    //   flex-direction: column !important;

    //   .column {
    //     width: 100% !important;
    //   }
    // }
  }

  .subtitle {
    padding-top: 0 !important;
    color: #464769;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  .quote {
    &.up {
      margin-right: 0.5rem;
      margin-top: -1rem;
    }

    &.down {
      margin-left: 0.5rem;
      margin-top: 1rem;
    }

    svg {
      fill: gray(400);
      fill-rule: evenodd;
    }
  }

  .rounded {
    height: 25rem;
    width: 100%;
    border-radius: 0.5rem;
  }

  .separator-dot {
    width: 0.75rem;
    height: 0.75rem;
    background-color: gray(400);
    border-radius: 0.75rem;
    margin: 6rem auto 0;
  }

  .title-alternative {
    color: #464769;
    padding: 3rem !important;

    .title-alternative {
      display: inline-block;
      padding: 0 !important;
      font-size: 2rem !important;
    }

    &.quoted {
      margin-top: 2rem;
      display: flex;
      justify-content: center;

      .quote {
        &.up {
          margin-right: 0.5rem;
          margin-top: -2rem;
        }

        &.down {
          margin-left: 0.5rem;
          margin-top: 1rem;
        }
      }
    }
  }

  .picture {
    flex: 1 1 100%;
    width: 8rem;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    &.slack-bot {
      background-image: url("~@/assets/img/slack-bot.svg");
      background-position-x: 57%;
    }
    &.neural-network {
      background-image: url("~@/assets/img/neural-network.svg");
    }
    &.accuweather {
      background-image: url("~@/assets/img/accuweather.svg");
    }
    &.send-reply {
      background-image: url("~@/assets/img/send-reply.svg");
    }
  }

  .what {
    flex: 0 0 auto;
    margin-top: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.01rem;
    color: #464769;
  }
}
</style>
