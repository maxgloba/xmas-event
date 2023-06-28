<template>
  <div class="ticket">
    <div class="ticket-img">
      <img src="@/assets/img/christmas/ticket-cloud.png" />
      <p class="text-lg" v-html="ticketObj.ticket_text"></p>
    </div>
    <div class="ticket-text text-lg">
      <p class="w700" v-html="ticketObj.title"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ticketObj'],
}
</script>

<style scoped lang="scss">
.ticket {
  @include _xl {
    margin: 15px 0;
  }
  &-img {
    width: 100%;
    transition: all 0.3s ease;
    position: relative;
    p {
      width: 100%;
      color: black;
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -75%);
    }
    ::v-deep b {
      color: #e41f30;
    }
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
    p{
      text-transform: uppercase;
    }
  }
}
</style>
