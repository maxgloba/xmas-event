<template>
  <li class="ch-video-gallery__item">
    <div
      class="ch-video-gallery__poster"
      :class="testimonialVideoObj.class"
      :data-video-src="testimonialVideoObj.src"
      @click="openVideo"
      @mouseover="hoverActive"
      @mouseleave="hoverCancel"
    >
      <img
        :src="
          require(`@/assets/img/testimonials/${testimonialVideoObj.img}.png`)
        "
        :alt="testimonialVideoObj.img"
      />
      <div class="play"><div class="play-block"></div></div>
    </div>
  </li>
</template>

<script>
import BigPicture from 'bigpicture'
export default {
  props: ['testimonialVideoObj'],
  data() {
    return {}
  },
  methods: {
    openVideo(e) {
      BigPicture({
        el: e.currentTarget,
        vimeoSrc: e.currentTarget.getAttribute('data-video-src'),
      })
    },
    hoverActive(e) {
      const item = e.currentTarget.closest('.ch-video-gallery__item')
      item.style.backgroundColor = 'transparent'
    },
    hoverCancel(e) {
      const item = e.currentTarget.closest('.ch-video-gallery__item')
      item.style.backgroundColor = '#e3e3e3'
      console.log(item)
    },
  },
}
</script>

<style scoped lang="scss">
.ch-video-gallery {
  &__item {
    padding: 50px 100px;
    // margin-bottom: 40px;
    width: 33.333333%;
    font-size: 0;
    background: #e3e3e3;
    border: 5px solid #ffffff;
    transition: all 0.3s ease;
    @include _lg {
      padding: 20px 60px;
      margin-bottom: 20px;
      width: 50%;
    }
    @include _sm {
      width: 100%;
      padding: 20px 60px;
    }
  }
  &__poster {
    cursor: pointer;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        0deg,
        rgba(228, 31, 48, 0.8),
        rgba(228, 31, 48, 0.8)
      );
      background-blend-mode: screen, multiply;
      border-radius: 50%;
      transition: all 0.3s ease;
      opacity: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      &-block {
        transition: all 0.3s ease;
        position: relative;
        width: 86px;
        height: 86px;
        border-radius: 50%;
        background: conic-gradient(
            from 180.22deg at 50% 49.74%,
            #fdf3aa 0deg,
            #fdf3aa 0.73deg,
            #c6a350 37.58deg,
            #fbf5ac 61.87deg,
            #b7974c 111.86deg,
            #fbf5ac 175.2deg,
            #b7974c 226.75deg,
            #f1eaa4 270.1deg,
            #b7974c 310.69deg,
            #fdf3aa 360deg
          ),
          conic-gradient(
            from 180.22deg at 50% 49.74%,
            #fdf3aa 0deg,
            #fdf3aa 0.73deg,
            #c6a350 37.58deg,
            #fbf5ac 61.87deg,
            #fbf5ac 71.62deg,
            #9e8346 116.2deg,
            #947a3c 200.38deg,
            #f1eaa4 270.1deg,
            #b7974c 310.69deg,
            #fdf3aa 360deg
          ),
          radial-gradient(
            100% 100% at 100% 0%,
            #ffffff 0%,
            #daba6c 20%,
            #daba6c 40%,
            #daba6c 60%,
            #daba6c 80%,
            #daba6c 100%
          );
        &:before {
          pointer-events: none;
          content: '';
          position: absolute;
          position: absolute;
          width: 25px;
          height: 30px;
          background: url('@/assets/img/christmas/play.svg') center
            no-repeat;
          background-size: contain;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    &:hover {
      &::before {
        transition: all 0.3s ease;
        opacity: 1;
      }
      .ch-video-gallery__item {
        background: transparent !important;
        transition: all 0.3s ease;
      }
      .play {
        &-block {
          width: 147px;
          height: 147px;
          transition: all 0.3s ease;
        }
      }
    }
  }
}
</style>
