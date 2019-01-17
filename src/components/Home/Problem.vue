<template>
  <section class="section problem">
    <div class="container">
      <div class="columns text--left is-shaped">
        <div class="column is-full">
          <h1>Applications are stories of data</h1>
          <h4 class="subtitle light">Create a Slack bot that replies with the weather forecast.</h4>
          <div class="columns is-mobile is-multiline">
            <div class="column is-full text--center">
              <svg
                width="80%"
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
            </div>
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
        </div>
      </div>
      <div class="columns is-centered text--left">
        <div class="column is-full">
          <!-- <div class="separator-dot" /> -->
          <h4 class="title-alternative">
            <span class="title-alternative">It's 2019;</span> software development is still riddled
            <br>with unnecessary complexity and poor reusability.
          </h4>
          <div class="complexity"/>
          <!-- <div class="bg--dark rounded" /> -->
          <!-- <h2 class="title-alternative quoted">
            <span class="quote up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 35.03 36">
                <path
                  d="M1297.92,8297.15l-7.69,28.65a5.711,5.711,0,0,1-11.04-2.93,6.161,6.161,0,0,1,.44-1.13l13.61-26.39a2.531,2.531,0,0,1,3.39-1.08A2.5,2.5,0,0,1,1297.92,8297.15Zm16,0-7.69,28.65a5.711,5.711,0,0,1-11.04-2.93,6.161,6.161,0,0,1,.44-1.13l13.61-26.39a2.531,2.531,0,0,1,3.39-1.08A2.5,2.5,0,0,1,1313.92,8297.15Z"
                  transform="translate(-1279 -8294)" />
              </svg>
            </span>
            <span>Code is our tool. Storytelling is our language.</span>
            <span class="quote down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 35 36">
                <path
                  d="M2682.09,8367.85l7.69-28.66a5.708,5.708,0,0,1,11.03,2.94,5.8,5.8,0,0,1-.44,1.12l-13.6,26.39A2.522,2.522,0,0,1,2682.09,8367.85Zm-15.98,0,7.68-28.66a5.708,5.708,0,0,1,11.03,2.94,5.776,5.776,0,0,1-.43,1.12l-13.6,26.39a2.517,2.517,0,0,1-3.39,1.08A2.491,2.491,0,0,1,2666.11,8367.85Z"
                  transform="translate(-2666 -8335)" />
              </svg>
            </span>
          </h2>-->
          <h4 class="title-alternative">Time to drop the complexity and amplify the story of data
            <br>by designing service-oriented, fully-asynchronous applications.
          </h4>
          <h1 class="light boxed">
            We need a language for
            <b>data storytelling.</b>
          </h1>
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

  .boxed {
    padding: 1rem 2rem;
    margin: auto;
    text-align: center;
    background-color: #f2f3f9;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.089);
    color: #464769 !important;
  }

  .complexity {
    height: 400px;
    width: 100%;
    background-size: contain;
    background-image: url("~@/assets/img/complexity.svg");
    background-repeat: no-repeat;
    background-position: center center;
  }

  h1 {
    color: #000;
  }

  .step-card {
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 0;
    flex-direction: column;
    &:first-child {
      flex: 1 1 auto;
    }
    div {
      width: 100%;
      padding: 0.5rem;
      text-align: center;
      margin: auto;
    }
    div + div {
      border-top: 1px solid #f2f3f9;
    }
  }

  .columns {
    @include breakpoint(max s) {
      flex-direction: column !important;

      .column {
        width: 100% !important;
      }
    }
  }

  .subtitle {
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
    width: auto;
    height: 8rem;
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
    margin-top: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.01rem;
    color: #464769;
  }
}
</style>
