<template>
  <div class="offer">
    <div class="offer-img">
      <img
        :src="require(`@/assets/img/christmas/${offerObj.img}.jpg`)"
        :alt="offerObj.img"
      />
    </div>
    <div class="offer-text text-lg">
      <p class="w300">
        <span class="w700">{{ offerObj.title }}</span
        ><br />{{ offerObj.text_one }}<br />{{ offerObj.text_two }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['offerObj'],
}
</script>

<style scoped lang="scss">
.offer {
  @include _xl {
    margin: 15px 0;
  }
  &-img {
    width: 100%;
    transition: all 0.3s ease;
    img {
      width: 100%;
    }
    &:hover {
      transition: all 0.3s ease;
      transform: rotate(-3deg);
    }
  }
  &-text {
    text-align: center;
    margin: 10px 0;
  }
}
</style>
