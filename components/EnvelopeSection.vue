<template>
  <section class="envelopes">
    <div class="container">
      <h2 class="envelopes-wrap-title text-xls w800">
        Order Today And Get The Tax Write Off This Year,<br />
        Plus $5,000+ Worth Of Bonuses From<br />
        Our High-Level Sponsors
      </h2>
      <img class="cloud-top" src="@/assets/img/christmas/cloud.png" />
      <div class="envelopes-wrap" id="envelope-bonus">
        <Carousel />
      </div>
    </div>
    <img class="cloud-bottom" src="@/assets/img/christmas/cloud.png" />
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.envelopes {
  position: relative;
  @include _sm {
    padding-bottom: 0;
  }
  .cloud {
    &-bottom {
      position: absolute;
      bottom: -1px;
      left: 0;
      z-index: 10;
      width: 100%;
      @include _md {
        bottom: 20px;
      }
      @include _sm {
        display: none;
        bottom: 155px;
      }
      // @include _xs {
      //   // bottom: 300px;
      //   display: none;
      // }
    }
    &-top {
      position: absolute;
      top: auto;
      left: 0;
      width: 100%;
      transform: rotate(180deg);
      z-index: 20;
      margin-top: -2px;
    }
  }
  &-wrap {
    height: auto;
    overflow: hidden;
    &-title {
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 10px;
      @include _lg {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
