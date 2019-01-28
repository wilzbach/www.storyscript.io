<template>
  <section class="join-beta is-stars">
    <div class="container">
      <p class="is-size-6 has-text-white has-text-centered is-vcentered">
        <a-icon
          icon="rocket"
          height="18px" />
        <a
          href="#"
          target="_blank"
          class="has-text-info has-text-weight-bold"
          title="Join our crew">Join our crew</a>
        <span> or learn about our </span>
        <a
          href="#"
          target="_blank"
          class="has-text-info has-text-weight-bold"
          title="Asyncy Champion Initiative"
        >Asyncy Champion Initiative</a>
        <span>.</span>
      </p>
      <div class="columns story is-multiline">
        <div class="column is-half has-text-white">
          <h4 class="is-size-4">
            Time to write
            <b>your story.</b>
          </h4>
        </div>
        <div class="column is-half">
          <a-form-beta />
        </div>
      </div>
      <div
        v-if="footer"
        class="footer-container">
        <div class="columns">
          <div class="column is-one-quarter">
            <ul>
              <li class="list-head is-size-7 has-text-gray-3 has-text-uppercase has-text-weight-bold">
                Product
              </li>
              <li>
                <a
                  href="//docs.asyncy.com"
                  title="Documentation"
                  class="has-text-white">Documentation</a>
              </li>
              <li>
                <a
                  href="//docs.asyncy.com"
                  title="Documentation"
                  class="has-text-white">Documentation</a>
              </li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <ul>
              <li class="list-head is-size-7 has-text-gray-3 has-text-uppercase has-text-weight-bold">
                Resources
              </li>
              <li>
                <a
                  href="/events"
                  title="Events"
                  class="has-text-white">Events</a>
              </li>
              <li>
                <a
                  href="/blog"
                  title="Blog"
                  class="has-text-white">Blog</a>
              </li>
              <li>
                <a
                  href="/status"
                  title="Status"
                  class="has-text-white">Status</a>
              </li>
              <li>
                <a
                  href="/shop"
                  title="Shop"
                  class="has-text-white">Shop</a>
              </li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <ul>
              <li class="list-head is-size-7 has-text-gray-3 has-text-uppercase has-text-weight-bold">
                Company
              </li>
              <li>
                <a
                  href="/about"
                  title="About"
                  class="has-text-white">About</a>
              </li>
              <li>
                <a
                  href="//angel.co/asyncy"
                  title="Jobs"
                  class="has-text-white">Jobs</a>
              </li>
              <li>
                <a
                  href="/contact"
                  title="Contact"
                  class="has-text-white">Contact</a>
              </li>
              <li>
                <a
                  href="//angel.co/asyncy"
                  title="We are hiring!"
                  class="has-text-info">We are hiring!</a>
              </li>
            </ul>
          </div>
          <div class="column is-one-quarter">
            <ul>
              <li>
                <a-logo
                  icon
                  class="fill--white"
                />
              </li>
              <li class="is-size-7 has-text-uppercase has-text-weight-bold has-text-white">
                &copy; 2019 Asyncy Inc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Join',
  props: {
    footer: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.join-beta {
  margin-top: -10rem !important;
  padding-top: 15rem !important;
  z-index: 0 !important;

  .story {
    padding: 10rem 0;
  }

  .form-beta {
    margin-right: 0;
  }

  .footer-container {
    padding-bottom: 5rem;

    ul {
      li + li {
        margin-top: 1.5rem;
      }
      li.list-head + li {
        margin-top: 2rem;
      }
    }
  }
}
</style>
