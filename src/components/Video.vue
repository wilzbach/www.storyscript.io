<template>
  <div class="play">
    <!-- <div class="orbit one">
      <a-planet variant="cyan" />
    </div>
    <div class="orbit two">
      <a-planet variant="purple" />
    </div> -->
    <div
      :class="[{ play: $player.visible }, 'play-btn']"
      @click="show" />
  </div>
</template>

<script>
export default {
  name: 'Video',
  methods: {
    show: function () {
      this.$player.show()
    }
  }
}
</script>

<style lang="scss" scoped>
.play {
  background-color: transparent;
  @include breakpoint(max s) { margin: -1rem auto 0 }
  width: 250px;
  height: 250px;
  @include breakpoint(max m) { width: 200px; height: 200px }
  position: relative;
  @include breakpoint(max m) { position: relative; }
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: auto;
  margin-top: 50px;
  .play-btn {
    display: block;
    width: 10rem;
    height: 10rem;
    background-image: url('~@/assets/img/rainbow-play.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 100% auto;
    z-index: 5;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.15);
    }
    &.play {
      transform: scale(43);
    }
  }
  &::before {
    content: '';
    display: block;
    z-index: -1;
    position: absolute;
    width: 80vw;
    height: 500px;
    background-image: url('~@/assets/img/placeholder_video.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    @include breakpoint(max s) { display: none;}
  }
}

.orbit {
  @include breakpoint(max s) { display: none }
  height: 500px;
  width: 200px;
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -100px;
  border-radius: 100%;
  &.one {
    border: solid .125rem rgba(lighten(color(cyan), 10%), .25);
    transform: rotate(-75deg);
    & > * {
      top: calc(40% - 30px);
      left: -30px;
    }
  }
  &.two {
    border: solid .125rem rgba(lighten(color(purple), 10%), .25);
    transform: rotate(65deg);
    & > * {
      top: calc(0% - 15px);
      left: 20%;
    }
  }
  & > * {
    position: absolute;
    height: 60px;
    width: 60px;
  }
}
</style>
