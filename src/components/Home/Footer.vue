<template>
  <section class="section footer-container">
    <div class="footer">
      <div class="columns">
        <div class="column">
          <h4>Product</h4>
          <a
            href="//docs.asyncy.com"
            title="Documentation"
            target="_blank">
            Documentation
          </a>
          <a
            href="//docs.asyncy.com/faq"
            title="FAQ"
            target="_blank">
            FAQ
          </a>
          <a
            href="//asyncy.click/feedback"
            title="Give Feedback"
            target="_blank">
            Give Feedback
          </a>
        </div>
        <div class="column">
          <h4>Company</h4>
          <router-link to="/about">About</router-link>
          <a
            href="//angel.co/asyncy/jobs"
            title="Jobs"
            target="_blank">
            Jobs
          </a>
          <router-link to="/contact">Contact</router-link>
          <a
            href="//angel.co/asyncy/jobs"
            title="We are hiring !"
            class="text--light-green"
            target="_blank">
            We are hiring!
          </a>
        </div>
        <div class="column">
          <a-logo
            icon
            variant="light" />
          <p>&copy; 2019 ASYNCY, INC.</p>
          <div class="social">
            <a
              href="//asyncy.click/slack"
              title="Slack"
              target="_blank">
              <font-awesome-icon :icon="['fab', 'slack']" />
            </a>
            <a
              href="//github.com/asyncy"
              target="_blank"
              title="Github">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              href="//twitter.com/asyncy"
              title="Twitter"
              target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
          </div>
        </div>
      </div>
      <h5 class="signature text--light text--center">
        <span>Passionately built with</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 376.23 209.36"
          width="24"
          height="12">
          <defs>
            <clipPath id="clip-path">
              <path
                class="cls-1"
                d="M188.11,19.26a67.07,67.07,0,0,0-93.59,1.22h0a67.09,67.09,0,0,0-1.25,93.57l0,0,1.28,1.28L188.11,209l93.6-93.59,1.28-1.28,0,0a67.07,67.07,0,0,0-1.25-93.56h0A67.09,67.09,0,0,0,188.11,19.26Z" />
            </clipPath>
          </defs>
          <g class="cls-2">
            <polygon
              class="cls-3"
              points="376.23 209.36 0 209.36 0 0 376.23 0 376.23 209.36"/>
            <polyline
              class="cls-4"
              points="376.23 174.47 0 174.47 0 139.58 376.23 139.58"/>
            <polyline
              class="cls-5"
              points="376.23 139.58 0 139.58 0 104.68 376.23 104.68"/>
            <polyline
              class="cls-6"
              points="376.23 104.68 0 104.68 0 69.79 376.23 69.79"/>
            <polyline
              class="cls-7"
              points="376.23 69.79 0 69.79 0 34.89 376.23 34.89"/>
            <polyline
              class="cls-8"
              points="376.23 34.89 0 34.89 0 0 376.23 0"/>
          </g>
        </svg>
        <span>in Amsterdam</span>
      </h5>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#a67eff;}.cls-4{fill:#52dbff;}.cls-5{fill:#00dcab;}.cls-6{fill:#fd0;}.cls-7{fill:#ff8522;}.cls-8{fill:#fa496e;}

.footer-container {
  background-color: #0A0A0A !important;
  padding: 3rem 2rem;

  .text--light-green {
    color: #03D9C4;
  }

  h4 {
    color: #7B7B8F;
  }

  h4, h5 {
    text-transform: uppercase;
    letter-spacing: .075rem;
  }

  .footer {
    z-index: 3;
    display: block;
    position: relative;
    color: color(light);

    .columns {
      max-width: 1000px;
      margin: 0 auto;
      .column {
        @include breakpoint (max s) { padding: .7rem 4rem }
        padding: .7rem;

        a {
          color: color(light);
          display: block;
          white-space: nowrap;
          & + a {
            margin-top: 1rem;
          }
        }

        svg {
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          height: 24px;
          width: 50px;
        }

        p {
          color: color(light);
        }

        .social {
          display: flex;
          flex-direction: row;
          flex: .1 1 auto;
          justify-content: start;
          padding-top: 1rem;
          @include breakpoint(s) { justify-content: start }

          a {
            margin-top: 0;
            font-size: 2rem;

            & + a {
              margin-left: 2rem;
            }
          }
        }
      }
    }

    .signature {
      padding: 2rem 0;
      span {

      }
      svg {
        color: color(red);
      }
    }
  }
}
</style>
