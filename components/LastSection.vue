<template>
  <section class="last">
    <Snowfall :visible="true" :count="100" :prefix="'last'" />
    <div class="container">
      <div class="last-wrap inverse">
        <h2 class="last-wrap-title text-xls w800">
          All The 2021 GeekOut Live Presentations…<br />
          For Almost 40% Less Than The Price of ONE Event
        </h2>
        <p class="last-wrap-subtitle text-lg w300">
          We’re talking about 60+ elite level trainings delivered in a practical
          way to help you get results now. The ultimate ecommerce event of the
          year includes presentations on Winning Creatives, Facebook, TikTok,
          Email, SMS, Native, YouTube, Google, and a whole lot more!
        </p>
        <p class="last-wrap-subtitle text-lg w700">
          Plus these incredible bonuses:
        </p>
        <TableCupon />
        <!-- <div class="last-wrap-img-block">
          <img
            class="last-wrap-img-block-click"
            src="@/assets/img/christmas/click-here.png"
          />
          <a href="#" @click.prevent="scrollTo"><EnvelopeGold /></a>
        </div> -->
        <div class="last-wrap-content">
          <p class="last-wrap-subtitle text-lg w700 uppercase">
            And Get $2,500 OFF Any GeekOut 2022 Event!
            <br />
            <span class="w300"
              >This deal is limited to the first 100 people so hit the buy
              button below and let’s get this party started.</span
            >
          </p>
        </div>
        <div class="last-wrap-btn">
          <Button :btnObj="btnEvent" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      btnEvent: {
        text_one: 'Buy',
        text_two: 'Now',
        link: 'https://learning.geekoutevents.io/offers/RUfTty6w/checkout',
        all: false,
      },
    }
  },
  methods: {
    scrollTo() {
      const href = document.getElementById('envelope-bonus')
      href.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style scoped lang="scss">
.last {
  background-image: radial-gradient(
    100% 100% at 50% 0%,
    #d71929 12.31%,
    #a40001 100%
  );
  background-position: top;
  background-repeat: repeat, no-repeat;
  background-size: auto, cover;
  background-blend-mode: screen;
  position: relative;
  &-wrap {
    &-title {
      text-transform: uppercase;
      margin-bottom: 87px;
      text-align: center;
    }
    &-subtitle {
      text-align: center;
      margin: 0 auto;
      margin-bottom: 80px;
    }
    &-img-block {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 33px;
      &-click {
        width: 100%;
        max-width: 240px;
        transition: all 0.3s ease;
        &:hover {
          transition: all 0.3s ease;
          transform: rotate(+3deg);
        }
        @include _sm {
          max-width: 180px;
        }
      }
    }
    &-content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      @include _xl {
        flex-direction: column;
        align-items: center;
      }
      img {
        width: 100%;
      }
      ul {
        margin-right: 60px;
        max-width: 40%;
        li {
          margin-bottom: 40px;
        }
      }
    }
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
