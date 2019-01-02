<template>
  <section class="section problem">
    <div class="container">
      <div class="columns">
        <div class="column is-full">
          <h1>Applications are stories of data</h1>
          <h3 class="subtitle light">
            <span class="quote up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 35.03 36">
                <path
                  d="M1297.92,8297.15l-7.69,28.65a5.711,5.711,0,0,1-11.04-2.93,6.161,6.161,0,0,1,.44-1.13l13.61-26.39a2.531,2.531,0,0,1,3.39-1.08A2.5,2.5,0,0,1,1297.92,8297.15Zm16,0-7.69,28.65a5.711,5.711,0,0,1-11.04-2.93,6.161,6.161,0,0,1,.44-1.13l13.61-26.39a2.531,2.531,0,0,1,3.39-1.08A2.5,2.5,0,0,1,1313.92,8297.15Z"
                  transform="translate(-1279 -8294)" />
              </svg>
            </span>
            <span>Create a Slack bot that replies with the weather forecast.</span>
            <span class="quote down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 35 36">
                <path
                  d="M2682.09,8367.85l7.69-28.66a5.708,5.708,0,0,1,11.03,2.94,5.8,5.8,0,0,1-.44,1.12l-13.6,26.39A2.522,2.522,0,0,1,2682.09,8367.85Zm-15.98,0,7.68-28.66a5.708,5.708,0,0,1,11.03,2.94,5.776,5.776,0,0,1-.43,1.12l-13.6,26.39a2.517,2.517,0,0,1-3.39,1.08A2.491,2.491,0,0,1,2666.11,8367.85Z"
                  transform="translate(-2666 -8335)" />
              </svg>
            </span>
          </h3>
          <div class="columns is-mobile is-multiline">
            <div class="column is-one-quarter picture slack-bot" />
            <div class="column is-one-quarter picture neural-network" />
            <div class="column is-one-quarter picture accuweather" />
            <div class="column is-one-quarter picture send-reply" />
            <div class="column is-one-quarter">
              <div class="what">create a slack bot</div>
            </div>
            <div class="column is-one-quarter">
              <div class="what">neural network</div>
            </div>
            <div class="column is-one-quarter">
              <div class="what">accuweather</div>
            </div>
            <div class="column is-one-quarter">
              <div class="what">send reply</div>
            </div>
          </div>
          <div class="separator-dot" />
          <h2 class="title-alternative">Yet, simple applications are far too complex.</h2>
          <div class="bg--dark rounded" />
          <h2 class="title-alternative quoted">
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
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.problem {
  background-color: #F2F3F9 !important;

  h1 {
    color: #000;
  }

  .subtitle {
    color: gray(600);
    position: relative;
    display: flex;
    justify-content: center;
  }

  .quote {
    &.up {
      margin-right: .5rem;
      margin-top: -1rem;
    }

    &.down {
      margin-left: .5rem;
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
    border-radius: .5rem;
  }

  .separator-dot {
    width: .75rem;
    height: .75rem;
    background-color: gray(400);
    border-radius: .75rem;
    margin: 6rem auto 0;
  }

  .title-alternative {
    color: #464769;

    &.quoted {
      margin-top: 2rem;
      display: flex;
      justify-content: center;

      .quote {
        &.up {
          margin-right: .5rem;
          margin-top: -2rem;
        }

        &.down {
          margin-left: .5rem;
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
    &.slack-bot { background-image: url('~@/assets/img/slack-bot.svg') }
    &.neural-network { background-image: url('~@/assets/img/neural-network.svg') }
    &.accuweather { background-image: url('~@/assets/img/accuweather.svg') }
    &.send-reply { background-image: url('~@/assets/img/send-reply.svg') }
  }

  .what {
    margin-top: 2.5rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: .01rem;
    color: #464769;
  }
}
</style>
