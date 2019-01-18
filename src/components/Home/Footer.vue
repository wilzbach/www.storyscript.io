<template>
  <section class="section footer-container">
    <div class="background">
      <stars-particles />
      <div class="gradient-stars" />
    </div>
    <div class="footer">
      <div class="columns">
        <div class="column">
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
        <div class="column">
          <div class="columns is-centered">
            <div class="social">
              <h5 class="signature text--light text--center">&copy; 2019 ASYNCY, INC.</h5>
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
      </div>
    </div>
  </section>
</template>

<script>
import StarsParticles from '@/components/Stars'

export default {
  name: 'Footer',
  components: { StarsParticles }
}
</script>

<style lang="scss" scoped>
.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:#a67eff;}.cls-4{fill:#52dbff;}.cls-5{fill:#00dcab;}.cls-6{fill:#fd0;}.cls-7{fill:#ff8522;}.cls-8{fill:#fa496e;}

.footer-container {
  background-color: #0A0A0A !important;
  border-top: 1px solid #2D2E3D;
  padding: 3rem 2rem 0;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    background-color: #000;
    z-index: -1;
    .gradient-stars {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      position: absolute;
      align-items: center;
      // background: linear-gradient(60deg, rgba(0, 0, 0, .5), rgba(darken(state(primary), 10%), .25)) repeat-x
    }
  }

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
      max-width: 1440px;
      margin: 0 auto;
      .column {
        @include breakpoint (max s) { padding: .7rem 4rem }
        padding: .7rem;

        a {
          color: color(light);
          display: block;
          white-space: nowrap;
        }

        svg {
          height: 24px;
          width: auto;
        }

        p {
          margin: 0 !important;
          color: color(light);
          display: inline-block;
          word-break: keep-all !important;
        }

        .signature {
          svg {
            height: 12px;
            width: 24px;
            margin-bottom: 0;
            margin-top: 0;
            color: color(red);
          }
        }

        .social {
          display: inline-flex;
          flex-direction: row;
          text-align: center;
          align-items: center;

          a {
            margin-top: 0;
            margin-left: 2rem;
          }
        }
      }
    }
  }
}
</style>
