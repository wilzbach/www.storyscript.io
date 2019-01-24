<template>
  <div class="section">
    <div class="container column benefits">
      <div>
        <div class="columns is-multiline">
          <div class="column is-half">
            <benefit
              title="Horizontal scaling from 0 → ∞ → 0"
              icon="1"
              content="No cold-restarts, your services are always hot-and-ready but scale to 0 to reduce costs and scale to N." />
          </div>
          <div class="column is-half">
            <benefit
              title="Zero to Hero"
              icon="2"
              content="Rapidly prototype applications in a production-grade platform." />
          </div>
          <div class="column is-half">
            <benefit
              title="Microscaling"
              icon="3"
              content="Services scale independently ad automatically to reduce bottlenecks and improve throughtput." />
          </div>
          <div class="column is-half">
            <benefit
              title="Smarter libraries"
              icon="4"
              content="Discover and build services built on open standards that are smarter than your average library." />
          </div>
          <div class="column is-half">
            <benefit
              title="AB testing"
              icon="5"
              content="Built-in AB testing of Stories and services to ensure your application performs flawlessly." />
          </div>
          <div class="column is-half">
            <benefit
              title="Goal-oriented programming"
              icon="6"
              content="Remove unnecessary complexity from application goals and you are left transparent business logic." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benefits',
  data: () => ({
    email: ''
  })
}
</script>
