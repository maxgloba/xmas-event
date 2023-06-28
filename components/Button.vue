<template>
  <div v-if="btnObj.all" class="btn-wrap">
    <a :href="btnObj.link" class="cta-btn cta-all text-xxxls w800">
      {{ btnObj.text_one }} <br />
      {{ btnObj.text_two }} <br />
      {{ btnObj.text_three }}
    </a>
    <div class="btn-shadow"></div>
  </div>
  <div v-else class="btn-wrap">
    <a :href="btnObj.link" class="cta-btn cta-notall text-xxxls w800">
      {{ btnObj.text_one }} <br />
      {{ btnObj.text_two }}
    </a>
    <div class="btn-shadow"></div>
  </div>
</template>

<script>
export default {
  props: ['btnObj'],
}
</script>

<style scoped lang="scss">
.btn-wrap {
  transform: perspective(400px);
  width: 100%;
  max-width: 315px;
  position: relative;
}
.btn-shadow {
  background: linear-gradient(
    90deg,
    rgba(226, 202, 120, 0) 0%,
    #b7974c 50.45%,
    rgba(226, 202, 120, 0) 100%
  );
  position: absolute;
  top: 22%;
  opacity: 0.7;
  width: 100%;
  height: 94%;
  border-radius: 50%;
  transform: rotateX(42deg);
  z-index: -1;
}
.cta-btn {
  z-index: 3;
  display: block;
  transform: rotateX(42deg);
  width: 100%;
  height: auto;
  padding: 15% 0;
  color: #fff;
  // font-size: 40px;
  line-height: 0.92;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-stretch: ultra-expanded;
  // text-shadow: -2px 4px 10px #d8d2a8;
  text-shadow: 2px 2px 8px rgba(141, 107, 24, 0.6), -2px -2px 8px #fdf6c7;
  background: conic-gradient(
    from 180deg at 49.81% 52.99%,
    #fdf3aa 0deg,
    #fdf3aa 0.73deg,
    #c6a350 37.58deg,
    #fbf5ac 61.87deg,
    #b7974c 111.86deg,
    #fbf5ac 175.2deg,
    #b7974c 226.75deg,
    #f1eaa4 270.1deg,
    #b7974c 310.69deg,
    #fdf3aa 360deg
  );
  border-radius: 50%;
  transition: all 0.5s ease;
  &:hover {
    transition: all 0.5s ease;
    transform: rotateX(42deg) translate3d(0px, 20px, -20px);
  }
}
.cta-all {
  &:hover {
    transform: rotateX(42deg) translate3d(0px, 20px, -7px);
  }
  &:active {
    transform: rotateX(42deg) translate3d(0px, 20px, -57px);
    @include _sm {
      transform: rotateX(42deg) translate3d(0px, 20px, -37px);
    }
  }
}
.cta-notall {
  padding: 28% 0;
  &:hover {
    transform: rotateX(42deg) translate3d(0px, 20px, -7px);
  }
  &:active {
    transform: rotateX(42deg) translate3d(0px, 20px, -57px);
    @include _sm {
      transform: rotateX(42deg) translate3d(0px, 20px, -47px);
    }
  }
}
</style>
