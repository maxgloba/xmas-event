<template>
  <vue-tiny-slider v-bind="tinySliderOptions" class="slides-christmas">
    <div class="slides-christmas-item" v-for="slide in sliderObj">
      <div class="slides-christmas-wrap">
        <div class="slides-christmas-img">
          <img :src="slide.img" />
        </div>
        <div class="slides-christmas-text text-lg">
          <p v-html="slide.text"></p>
        </div>
      </div>
    </div>
  </vue-tiny-slider>
</template>

<script>
export default {
  props: ['sliderObj'],
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        items: 1,
        controls: true,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayButtonOutput: false
      }
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/tiny-slider';
.slides-christmas {
    &-wrap {
    cursor: move;
    user-select: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 1070px;
    max-width: 100%;
    margin: 0 auto;
  }
  &-img {
    display: block;
    flex: 1 143px;
    max-width: 143px;
    img {
      display: block;
      margin: 0 auto;
    }
  }
  &-text {
    padding: 0 15px;
    flex: 1 100%;
    max-width: 100%;
    text-align: center;
    margin-top: 20px;
    @media (min-width: 768px) {
      text-align: left;
      flex: 1 55%;
      max-width: 55%;
      margin-left: 50px;
    }
    @media (min-width: 992px) {
      margin-left: 75px;
    }
    @media (min-width: 1200px) {
      margin-left: 100px;
    }
  }
}
</style>
<style lang="scss">
.slider {

  .tns-controls {
    position: relative;
    z-index: 2;

    button {
      position: absolute;
      top: 40px;
      border: none;
      font-size: 0;
      width: 40px;
      height: 40px;
      padding: 0;
      background: url('@/assets/img/christmas/arrow.png') no-repeat center
        center;
      z-index: 2;

      &[data-controls='prev'] {
        left: 0;
        transform: rotate(180deg) translate(0, 0);
      }

      &[data-controls='next'] {
        right: 0;
      }
    }
  }
  .tns-liveregion{
    visibility: hidden;
  }
}
</style>