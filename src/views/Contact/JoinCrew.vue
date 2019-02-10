<template>
  <section class="join-crew">
    <div class="container">
      <h2 class="is-size-2 has-text-weight-bold has-text-gray-2">Join Our Crew !</h2>
      <div class="columns">
        <div class="column is-one-fifth">
          <ul class="jobs-menu">
            <li
              v-for="category of categories"
              :key="`jobs-list-category-${category}`"
              :class="{ active: category === currentCategory }"
              @click="currentCategory = category"
              v-text="category"
            />
          </ul>
        </div>
        <div class="column is-four-fifths">
          <transition-group
            name="fade"
            tag="ul"
            class="jobs-list"
          >
            <li
              v-for="job of currentJobs"
              :key="`jobs-list-job-${job.name}`"
            >
              {{ job.name }}
              <span v-if="job.remote">remote</span>
            </li>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'JoinCrew',
  data: () => ({
    jobs: [{
      name: 'Integration Engineering Manager',
      remote: true,
      category: 'engineering'
    }, {
      name: 'Innovative DSL Engineer',
      remote: false,
      category: 'engineering'
    }, {
      name: 'UX Designer',
      remote: false,
      category: 'design'
    }, {
      name: 'Marketing Engineer',
      remote: true,
      category: 'marketing'
    }, {
      name: 'Management Engineer',
      remote: false,
      category: 'management'
    }, {
      name: 'Sales Manager Senior',
      remote: false,
      category: 'sales'
    }],
    currentCategory: 'engineering'
  }),
  computed: {
    categories: function () {
      return this.jobs.reduce((arr, c) => arr.includes(c.category) ? arr : [...arr, c.category], [])
    },
    currentJobs: function () {
      return this.jobs.reduce((arr, j) => (this.currentCategory === j.category ? [...arr, j] : arr), [])
    }
  }
}
</script>

<style lang="scss">

.join-crew {
  margin: 8rem 0;
  h2 {
    margin-bottom: 4rem;
  }
}
.jobs-menu {
  // border-left: 1px solid nth($grays, 4);

  li {
    font-size: nth($sizes, 6);
    letter-spacing: 1.5px;
    font-weight: 500;
    color: nth($grays, 2);
    text-transform: uppercase;
    line-height: nth($line-heights, 7);
    border-left: 2px solid nth($grays, 4);
    padding: 1rem 2rem;
    cursor: pointer;
    &.active {
      font-weight: 700;
      color: $dark;
      border-left-color: $primary;
    }
  }
}

.jobs-list {
  background-color: $light;
  border-radius: .5rem;
  padding: 2rem;
  li {
    &.fade-leave-to {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
    padding: .5rem 0;
    color: nth($grays, 2);
    font-size: nth($sizes, 5);
    line-height: nth($line-heights, 5);
    font-weight: 500;
    span {
      text-transform: uppercase;
      font-weight: 700;
      font-size: nth($sizes, 6);
      background-color: $white;
      border-radius: .75rem;
      padding: .5rem;
      margin-left: 1rem;
    }
  }
}
</style>
