<template>
  <section class="message">
    <div class="container">
      <div class="message-wrap">
        <h2 class="message-wrap-title text-xls w800">
          Only 100 Lucky People
          <br />
          Get This Crazy Offer
        </h2>
        <div class="message-wrap-content text-lg">
          <div class="message-wrap-content-message">
            <img src="@/assets/img/christmas/message_1.png" alt="" />
            <p class="w300"><b>Q: </b>Why do you have to limit this deal?</p>
          </div>
          <div class="message-wrap-content-message inverse">
            <img src="@/assets/img/christmas/message_2.png" alt="" />
            <p class="w300">
              <b>A: </b>We have to cap it at 100 people because of the awesome
              bonuses from our sponsors.
            </p>
          </div>
        </div>
      </div>
    </div>
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
.message {
  background: #e3e3e3;
  &-wrap {
    &-title {
      text-transform: uppercase;
      margin-bottom: 87px;
      text-align: center;
      @include _lg {
        margin-bottom: 25px;
      }
    }
    &-content {
      display: flex;
      @include _md {
        flex-direction: column;
        align-items: center;
      }
      &-message {
        position: relative;
        width: 100%;
        height: auto;
        @include _md {
          img {
            transform: scale(-1, 1);
          }
        }
        img {
          width: 100%;
          height: auto;
          @include _sm {
            min-height: 80px;
          }
        }
        P {
          position: absolute;
          top: 15px;
          left: 15px;
          @include _lg {
            top: 10px;
            left: 10px;
          }
          @include _sm {
            top: 5px;
            left: 5px;
          }
        }
      }
      &-message:nth-child(2n) {
        margin-left: -75px;
        margin-top: 30px;
        @include _md {
          flex-direction: column;
          align-items: center;
          margin: 10px 0;
          img {
            transform: scale(-1, 1);
          }
        }
      }
    }
  }
}
</style>
