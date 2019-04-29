<template>
  <section class="section calendar">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-full rounded-message">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <s-icon icon="calendar" />
                <p class="is-size-6 has-text-white">Keep up-to-date with our community events through our<br>shared Google Calendar</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <s-button
                  state="white"
                  class="has-text-primary"
                  url="//asyncy.click/calendar"
                  arrow
                >Our Calendar</s-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Calendar'
}
</script>

<style lang="scss">
.calendar {
  margin: 9.5rem 0 5rem;

  .rounded-message {
    background-color: $primary;
    border-radius: 3rem;
    padding: 1rem 1.5rem 1rem 3rem;

    .level-left {
      svg {
        height: 3.5rem;
        width: 3.5rem;
        margin-right: 2rem;
      }
    }
  }
}
</style>
