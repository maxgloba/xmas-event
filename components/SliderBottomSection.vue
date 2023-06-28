<template>
  <section class="slider">
    <div class="container">
      <div class="slider-wrap">
        <h2 class="slider-wrap-title text-xls w800">Money Back guarantee</h2>
        <div class="slider-wrap-content">
          <Slider :sliderObj="sliderTopObj" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sliderTopObj: [
        {
          img: require('@/assets/img/christmas/slider-02-001.png'),
          text: 'All the presentations, slides, the notes, tactical trainings and the insane bonuses, it’s fair to say that this offer is worth well over the $2,500 we’re charging for it. But this has to make sense from a business standpoint too, so we get that.',
        },
        {
          img: require('@/assets/img/christmas/slider-02-001.png'),
          text: 'How about this? Take 90 days and scour everything you see here, implement it, and if at the end of 90 days it isn’t crystal clear that you could implement a few of these strategies and see a nice $2,500 bump in revenue…',
        },
        {
          img: require('@/assets/img/christmas/slider-02-001.png'),
          text: 'Then we haven’t earned your business. All you need to do is reach out by email to email@email.com to get a full refund. Plus you can keep the recordings and the bonuses as a show of good will. ',
        },
        {
          img: require('@/assets/img/christmas/slider-02-001.png'),
          text: 'That’s how serious we are that in the right hands, that this GeekOut deal of lifetime can change the way you do business.',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.slider {
  &-wrap {
    &-title {
      text-transform: uppercase;
      margin-bottom: 87px;
      text-align: center;
      @include _lg {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
