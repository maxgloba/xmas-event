<template>
  <div class="table">
    <div class="table-content">
      <div
        v-for="table in tableObj"
        :key="table.text"
        class="table-content-block"
      >
        <div class="table-content-head w700 uppercase">{{ table.title }}</div>
        <div class="table-content-body w300">
          {{ table.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableObj: [
        {
          title: 'Bonus #1 Via Customer',
          text: '3 FREE Video Ads With A Signed Contract',
        },
        {
          title: 'Bonus #2 Viscap Creatives',
          text: 'Get 30,000 Credits On Our Software Free',
        },
        {
          title: 'Bonus #3 Chronos Agency',
          text: 'FREE Audit + Complimentary SMS Setup When You Sign Up For Their Email Plans',
        },
        {
          title: 'Bonus #4 Checkout Champ',
          text: '14 Day Free Trial',
        },
        {
          title: 'Bonus #5 Insense',
          text: 'Up To 400$ On Your Balance',
        },
        {
          title: 'Bonus #6 Gorgias',
          text: '2 Months Free When You Sign Up',
        },
        {
          title: 'Bonus #7 Juni',
          text: 'Get 2% cashback for new partners for all of December.',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.table {
  &-content {
    font-size: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;

    &-block {
      @include _md {
        margin: 10px 0;
      }
      > * {
        border: 2px solid #ffffff;
        padding: 10px;
        width: 100%;
        max-width: 170px;
        @include _sm {
          max-width: 100%;
        }
      }
      @include _sm {
        width: 100%;
      }
    }
    &-head {
      min-height: 100px;
    }
    &-body {
      min-height: 200px;
      @include _sm {
        min-height: 130px;
      }
    }
  }
}
</style>
