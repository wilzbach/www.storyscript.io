<template>
  <form
    action=""
    class="input-beta"
    @submit.prevent="">
    <input
      name="email"
      placeholder="Enter your email"
      type="email"
      value="">
    <button
      type="submit"
      class="submit">Join Beta</button>
  </form>
</template>

<style lang="scss" scoped>
form.input-beta {
  background-color: darken(color(dark), 8%);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-radius: 2rem;
  input, button {
    font-size: 1.1rem;
    border: none;
    outline: none;
    background: none;
    color: color(light);
  }

  input {
    margin: 0;
    padding: 1rem 1rem 1rem 1.5rem;
    &:-webkit-autofill {
      &, &:hover, &:focus {
        -webkit-text-fill-color: color(light);
        transition: background-color 5000s ease-in-out 0s;
        background: none !important;
      }
    }
  }

  button {
    height: 3.5rem;
    background-color: state(primary);
    border-radius: 1.75rem;
    margin-right: .25rem;
    padding: 0 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:hover {
      background-color: lighten(state(primary), 5%);
    }
    &:active {
      transform: scale(1.05);
    }
  }
}
</style>
