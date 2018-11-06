<template>
  <div class="play">
    <div
      class="play-btn"
      @click="show">
      <font-awesome-icon icon="play" />
    </div>
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
    text-align: center;
    height: 10rem;
    font-size: 8rem;
    color: #fff;
    z-index: 5;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.15);
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
</style>
