<template>
  <div class="last-wrap-img-block-envelope">
    <img
      class="last-wrap-img-block-envelope_open"
      src="@/assets/img/christmas/envelope_gold_three.svg"
    />
    <img
      class="last-wrap-img-block-envelope_body"
      src="@/assets/img/christmas/envelope_gold_one.svg"
    />
    <img
      class="last-wrap-img-block-envelope_close"
      src="@/assets/img/christmas/envelope_gold_two.svg"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.last-wrap-img-block-envelope {
  position: relative;
  z-index: 1;
  max-width: 145px;
  width: 100%;
  transform: rotate(-10deg);
  transition: all 0.3s ease;
  transform-origin: top left;

  img {
    width: 100%;
    height: auto;
  }
  &_close {
    position: absolute;
    transform-origin: 50% 0;
    transition: all 0.3s ease;
    top: 0;
    left: 0;
  }
  &_open {
    position: absolute;
    transform: matrix(1, 0, 0, -1, 0, 0);
    top: 0;
    left: 0;
  }
  &_body {
    z-index: 1;
    top: 0;
    left: 0;
  }
  &:hover {
    transition: all 0.3s ease;
    transform: scale(0.8) rotate(-10deg);
    .last-wrap-img-block-envelope_close {
      transform: rotateX(180deg);
      top: 4%;
      left: 0;
    }
  }
}
</style>
