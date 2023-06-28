<template>
  <section class="including">
    <div class="container">
      <div class="including-wrap">
        <h2 class="including-wrap-title text-xls w800">
          To Attend All These Events <br />
          Would Have Cost You 25k-35k
        </h2>
        <p class="including-wrap-subtitle text-lg w300">
          But you don’t have to spend that much to get access to all the elite
          level presentations.
          <br />
          <br />
          We’re talking about:
        </p>
        <div class="including-wrap-content">
          <Include :includes="includeArr" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      includeArr: [
        {
          text: 'Long Form Ad Copy',
        },
        {
          text: 'Scaling Platforms',
        },
        {
          text: 'Scaling Facebook',
        },
        {
          text: 'Amazon Selling and Tactics',
        },
        {
          text: 'Selling or Buying Businesses',
        },
        {
          text: 'Media Buying Tactics',
        },
        {
          text: 'S.O.P.S',
        },
        {
          text: 'Hiring',
        },
        {
          text: 'Ad Creatives, Videos and Images',
        },
        {
          text: 'Fulfillment and Logistics',
        },
        {
          text: 'Scaling Snapchat',
        },
        {
          text: 'Scaling Pinterest',
        },
        {
          text: 'Scaling Native',
        },
        {
          text: 'Creative Research and Brand identity',
        },
        {
          text: 'Team workflows',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.including {
  &-wrap {
    &-title {
      text-transform: uppercase;
      margin-bottom: 87px;
      text-align: center;
      @include _lg {
        margin-bottom: 25px;
      }
    }
    &-subtitle {
      text-align: center;
      margin: 0 auto;
      margin-bottom: 80px;
      @include _lg {
        margin-bottom: 25px;
      }
    }
    &-content {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      margin-bottom: 80px;
      .event:nth-child(odd) {
        flex-flow: row-reverse;
      }
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
