<template>
  <section class="slider">
    <div class="container">
      <div class="slider-wrap">
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
          img: require('@/assets/img/christmas/slider-01-001.png'),
          text: 'Now you might be thinking, “These are recordings from your events, why do you have to limit the number of people who get this deal?”',
        },
        {
          img: require('@/assets/img/christmas/slider-01-002.png'),
          text: 'That’s a fair question. <br><br> The reason why it’s limited to the first 100 people isn’t because of the training but because of the bonuses that are included with this offer.',
        },
        {
          img: require('@/assets/img/christmas/slider-01-003.png'),
          text: 'We’re convinced that no other marketing event like GeekOut exists anywhere else. <br><br> That’s because of 3 reasons:',
        },
        {
          img: require('@/assets/img/christmas/slider-01-004.png'),
          text: '<b>&#183; The wealth of information that gets shared.</b>',
        },
        {
          img: require('@/assets/img/christmas/slider-01-005.png'),
          text: '<b>&#183; The attendees who show up ready to learn and go deep.</b>',
        },
        {
          img: require('@/assets/img/christmas/slider-01-006.png'),
          text: '<b>&#183; Our incredible sponsors and the experience they bring to the table.</b>',
        },
        {
          img: require('@/assets/img/christmas/slider-01-007.png'),
          text: 'These are subject matter experts who hold nothing back with our group. <br><br> And this offer is no different. Scroll to the bonuses section and you’ll see exactly what I mean. The bonuses alone are worth $2000.',
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
