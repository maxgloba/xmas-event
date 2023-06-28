<template>
  <section class="video" id="videoSection">
    <div class="container">
      <div class="video-wrap">
        <h2 class="video-wrap-title text-xls w800">
          Hear What People Who Attended GeekOut Had To Say<br />
          About Their Experience
        </h2>
        <div class="video-wrap-content">
          <ul class="video-gallery">
            <TestimonialsVideo
              v-for="video in testimonialVideoArr"
              :key="video.src"
              :testimonialVideoObj="{ img: video.img, src: video.src }"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonialVideoArr: [
        {
          img: 'ch_1',
          src: '656507491',
        },
        {
          img: 'ch_2',
          src: '656507665',
        },
        {
          img: 'ch_3',
          src: '656508013',
        },
        {
          img: 'ch_4',
          src: '656509047',
        },
        {
          img: 'ch_5',
          src: '641834790',
        },
        {
          img: 'ch_6',
          src: '641834830',
        },
        {
          img: 'ch_7',
          src: '641834882',
        },
        {
          img: 'ch_8',
          src: '641834923',
        },
        {
          img: 'ch_9',
          src: '641834949',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.video {
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
      flex-direction: column;
      margin-bottom: 80px;
      @include _xl {
        flex-direction: column;
        align-items: center;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
