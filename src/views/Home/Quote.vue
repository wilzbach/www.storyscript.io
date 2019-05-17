<template>
  <s-layout
    margin="7x5"
    class="has-background-lines"
  >
    <s-container centered-vh>
      <svg
        class="dots-quote"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="39"
        height="23"
        viewBox="0 0 39 23"
      >
        <defs>
          <path
            id="b"
            d="M6.2.404l3.363 1.942c.433.25.7.712.7 1.212v3.884c0 .5-.267.962-.7 1.212L6.2 10.596a1.4 1.4 0 0 1-1.4 0L1.437 8.654a1.4 1.4 0 0 1-.7-1.212V3.558c0-.5.267-.962.7-1.212L4.8.404a1.4 1.4 0 0 1 1.4 0z"
          />
          <filter
            id="a"
            width="304.8%"
            height="314.2%"
            x="-102.4%"
            y="-79.8%"
            filterUnits="objectBoundingBox"
          >
            <feOffset
              dy="3"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="3.5"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.149504573 0 0 0 0 0.170452736 0 0 0 0 1 0 0 0 0.134861233 0"
            />
          </filter>
          <path
            id="d"
            d="M22.2.404l3.363 1.942c.433.25.7.712.7 1.212v3.884c0 .5-.267.962-.7 1.212L22.2 10.596a1.4 1.4 0 0 1-1.4 0l-3.363-1.942a1.4 1.4 0 0 1-.7-1.212V3.558c0-.5.267-.962.7-1.212L20.8.404a1.4 1.4 0 0 1 1.4 0z"
          />
          <filter
            id="c"
            width="304.8%"
            height="314.2%"
            x="-102.4%"
            y="-79.8%"
            filterUnits="objectBoundingBox"
          >
            <feOffset
              dy="3"
              in="SourceAlpha"
              result="shadowOffsetOuter1"
            />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="3.5"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0.149504573 0 0 0 0 0.170452736 0 0 0 0 1 0 0 0 0.134861233 0"
            />
          </filter>
        </defs>
        <g
          fill="none"
          fill-rule="nonzero"
        >
          <g transform="translate(6 3)">
            <use
              fill="#000"
              filter="url(#a)"
              xlink:href="#b"
            />
            <use
              fill="#AFCFF2"
              xlink:href="#b"
            />
          </g>
          <g transform="translate(6 3)">
            <use
              fill="#000"
              filter="url(#c)"
              xlink:href="#d"
            />
            <use
              fill="#AFCFF2"
              xlink:href="#d"
            />
          </g>
        </g>
      </svg>

      <s-div
        size="half"
        class="has-text-centered"
      >
        <s-text
          p="0"
          padding="normal"
          color="dark-blue"
          class="is-quote"
        >We really believe in the Storyscript's vision of the future of programming.</s-text>
        <figure class="quote-avatar">
          <img
            src="~@/assets/img/annap.jpg"
            alt=""
          >
        </figure>
        <s-text
          p="1"
          bold
          color="dark-blue"
          padding="small"
        >Anna Patterson</s-text>
        <s-text
          p="2"
          color="dark-blue"
        >Founder Partner at <a
          href="//gradient.com"
          title="gradient.com"
          class="has-text-dark-blue has-text-weight-semibold"
        >Gradient Ventures</a><br>Previous VP Engineering at <a
          href="//ai.google"
          title="ai.google"
          class="has-text-dark-blue has-text-weight-semibold"
        >Google</a></s-text>
      </s-div>
    </s-container>
  </s-layout>
</template>

<script>
export default {
  name: 'Quote'
}
</script>

<style lang="scss">
.quote-avatar {
  width: 3rem;
  height: 3rem;
  border: 1.5px solid #6b92ff;
  box-shadow: 0 22px 36px -8px rgba(0, 0, 0, 0.11);
  border-radius: 50%;
  display: inline-block;
  img {
    border-radius: 50%;
    max-width: 100%;
  }
}

.dots-quote {
  display: block;
  position: absolute;
  top: -1rem;
}
.is-quote {
  position: relative;
  &:before,
  &:after {
    position: absolute;
    content: "“";
    font-size: 4rem;
    color: nth($grays, 4);
  }
  &:before {
    left: -1.5rem;
  }

  &:after {
    right: -1.5rem;
    bottom: 0;
  }
}
</style>
