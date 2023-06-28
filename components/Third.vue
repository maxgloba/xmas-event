<template>
  <section class="third">
    <Snowfall :visible="true" :count="60" :prefix="'third'"/>
    <div class="container">
      <div class="third-wrap inverse">
        <h2 class="third-wrap-title text-xls w800">
          This Is The Perfect Offer <br />
          For 3 Types Of Ecom Players
        </h2>
        <div class="third-wrap-content">
          <Offer :offerObj="offerOne" />
          <Offer :offerObj="offerTwo" />
          <Offer :offerObj="offerThree" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      offerOne: {
        img: 'offer_one',
        title: 'Agency Owners',
        text_one: 'In Search  Of Consistent Wins',
        text_two: 'For Their Clients',
      },
      offerTwo: {
        img: 'offer_two',
        title: 'Lone Wolf Marketers',
        text_one: 'Ready To Level',
        text_two: 'Up Their Skills',
      },
      offerThree: {
        img: 'offer_three',
        title: 'Ecom Business Owners',
        text_one: 'Looking to Build Winning ',
        text_two: 'TeamsOf A-Players',
      },
    }
  },
}
</script>

<style scoped lang="scss">
.third {
  position: relative;
  background-image: radial-gradient(
      100% 100% at 50% 0%,
      #d71929 12.31%,
      #a40001 100%
    );
  background-size: cover;
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
  }
}
</style>
