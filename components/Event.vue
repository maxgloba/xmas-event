<template>
  <div class="event">
    <div class="event-list_block text-lg">
      <ul>
        <li v-for="list in eventObj.list" :key="list.text">
          <b>{{ list.speaker }}</b>
          {{ list.text }}
        </li>
      </ul>
    </div>
    <div
      class="event-img_block"
      @mouseover="hoverActive = true"
      @mouseleave="hoverCancel"
    >
      <Snowfall v-if="hoverActive" />
      <img
        :src="require(`@/assets/img/christmas/${eventObj.img}.jpg`)"
        :alt="eventObj.img"
      />

      <p class="event-img_block-text text-xxl w800 inverse">
        {{ eventObj.title_one }} <br />
        {{ eventObj.title_two }} <br />
        {{ eventObj.pre_price }} <span class="w400">{{ eventObj.price }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['eventObj'],
  data() {
    return {
      hoverActive: false,
    }
  },
  methods: {
    hoverCancel() {
      this.hoverActive = false
      // const myReq = requestAnimationFrame()
      // cancelAnimationFrame(myReq)
    },
  },
}
</script>

<style scoped lang="scss">
.event {
  display: flex;
  justify-content: space-between;
  @include _lg {
    flex-flow: column-reverse !important;
    align-items: center;
  }
  &-img_block {
    max-width: 600px;
    // display: none;
    position: relative;
    backdrop-filter: blur(100px);
    background: transparent;
    transition: all 0.3s ease;
    img {
      opacity: 1;
      height: 100%;
      width: 100%;
    }
    &-text {
      position: absolute;
      top: 40px;
      left: 40px;
    }
    &:hover {
      transition: all 0.3s ease;
      background: radial-gradient(
          155% 100% at 50% 0%,
          #d71929 12.31%,
          #a40001 100%
        ),
        linear-gradient(0deg, #000000, #000000);
      img {
        opacity: 0;
        transition: all 0.3s ease;
      }
    }
  }
  &-list_block {
    margin: 30px;
    max-width: 40%;
    padding: 0;
    ul {
      li {
        margin-bottom: 10px;
      }
    }
    @include _lg {
      max-width: 100%;
      padding: 0;
    }
  }
}
</style>
