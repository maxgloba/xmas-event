<template>
  <section class="banner">
    <div class="banner-scene banner-scene--one" id="bannerSceneOne">
      <img
        src="@/assets/img/christmas/banner-01.svg"
        class="banner-img"
        id="bannerImgOne"
      />
      <img
        src="@/assets/img/christmas/banner-02.svg"
        class="banner-img"
        id="bannerImgTwo"
      />
      <img
        src="@/assets/img/christmas/banner-03.svg"
        class="banner-img banner-img-logo"
        id="bannerImgThree"
      />
    </div>
    <div class="banner-scene banner-scene--two" id="bannerSceneTwo">
      <div class="banner-gradient">
        <svg
          width="140"
          height="1080"
          viewBox="0 0 140 1080"
          fill="none"
          type="image/svg+xml"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            id="animSVG"
            fill="url(#paint0_linear_501_21032)"
            d="M140 0C140 0 140 89.2792 140 216.041C140 248.906 140 284.704 140 320.803C140 402.209 139.834 485.143 140 539.42V540.374C139.834 594.689 140 672.5 140 759.319C140 795.387 140 831.145 140 863.959C140 990.721 140 1080 140 1080H0V0H140Z"
          >
            <animate
              id="animate"
              attributeName="d"
              to="M7.40075 0C7.40075 0 11.9008 89.2792 49.2008 216.041C58.8583 248.906 71.1289 284.704 83.5025 320.803C111.406 402.209 139.834 485.143 140 539.42V540.374C139.834 594.689 111.367 677.799 83.4449 759.319C71.0908 795.387 58.8433 831.145 49.2008 863.959C11.9008 990.721 7.40075 1080 7.40075 1080H0V0H7.40075Z"
              dur="0.3s"
              fill="freeze"
            />
            <animate
              id="animateClose"
              attributeName="d"
              to="M140 0C140 0 140 89.2792 140 216.041C140 248.906 140 284.704 140 320.803C140 402.209 139.834 485.143 140 539.42V540.374C139.834 594.689 140 672.5 140 759.319C140 795.387 140 831.145 140 863.959C140 990.721 140 1080 140 1080H0V0H140Z"
              dur="0.3s"
              fill="freeze"
            />
          </path>
          <defs>
            <linearGradient
              id="paint0_linear_501_21032"
              x1="70"
              y1="0"
              x2="70"
              y2="1080"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D71929" />
              <stop offset="1" stop-color="#A40001" />
            </linearGradient>
          </defs>
          <!-- <use xlink:href="#animSVG" /> -->
        </svg>
      </div>
      <Snowfall
        v-if="snowAnimation"
        :visible="true"
        :count="300"
        :prefix="'banner'"
      />
      <div class="container">
        <img
          src="@/assets/img/christmas/logo.png"
          alt=""
          class="banner-logo"
        />
        <h1 id="bannerTitle" class="banner-title w300 text-xls">
          <span><b>A Holiday Deal You’d</b></span>
          <span><b>Only Expect To Get From GeekOut.</b></span>
          <span
            >Watch this important message from James Van Elswyk And Nick
            Shackleford.</span
          >
        </h1>
      </div>
      <button
        class="banner-btn"
        @click.prevent="showVideo"
        @mouseover="btnOver"
        @mouseleave="btnLeave"
      >
        <img src="@/assets/img/christmas/banner-btn.png" alt="" />
        <img
          class="banner-btn-rotate"
          src="@/assets/img/christmas/watch.png"
          alt=""
        />
      </button>
      <div class="banner-sponsors">
        <div class="banner-sponsors-inner">
          <div class="banner-sponsors-item">
            <img src="@/assets/img/christmas/sp-01.png" alt="" />
            <img src="@/assets/img/christmas/sp-02.png" alt="" />
            <img src="@/assets/img/christmas/sp-03.png" alt="" />
            <img src="@/assets/img/christmas/sp-04.png" alt="" />
            <img src="@/assets/img/christmas/sp-05.png" alt="" />
            <img src="@/assets/img/christmas/sp-06.png" alt="" />
            <img src="@/assets/img/christmas/sp-07.png" alt="" />
            <img src="@/assets/img/christmas/sp-08.png" alt="" />
            <img src="@/assets/img/christmas/sp-09.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="banner-scene banner-scene--three" id="bannerSceneThree">
      <div id="vimeoPlayer">
        <span class="closeBtn" @click="closeVideo"></span>
      </div>
    </div>
  </section>
</template>
<script>
import Player from '@vimeo/player'
export default {
  name: 'Marquee',
  player: null,
  widthSize: null,
  data() {
    return {
      snowAnimation: false,
    }
  },
  mounted() {
    this.animateMarquee()
    this.sceneOneAnimation()
    setTimeout(() => {
      this.fullScreen()
    }, 5000)
  },
  methods: {
    btnOver() {
      document.getElementById('animate').beginElement()
    },
    btnLeave() {
      document.getElementById('animateClose').beginElement()
    },
    sceneOneAnimation() {
      const bannerImgOne = document.getElementById('bannerImgOne')
      const bannerImgTwo = document.getElementById('bannerImgTwo')
      const bannerImgThree = document.getElementById('bannerImgThree')
      const bannerSceneOne = document.getElementById('bannerSceneOne')
      const bannerSceneTwo = document.getElementById('bannerSceneTwo')
      bannerSceneOne.style.opacity = 1
      bannerImgOne.style.opacity = 1
      setTimeout(() => {
        bannerImgOne.style.opacity = 0
        bannerImgTwo.style.opacity = 1
        setTimeout(() => {
          bannerImgOne.style.opacity = 1
          bannerImgTwo.style.opacity = 0
          setTimeout(() => {
            bannerImgOne.style.opacity = 0
            bannerImgTwo.style.opacity = 1
            setTimeout(() => {
              bannerImgOne.style.opacity = 1
              bannerImgTwo.style.opacity = 0
              setTimeout(() => {
                bannerImgOne.style.opacity = 0
                bannerImgTwo.style.opacity = 1
                setTimeout(() => {
                  bannerImgTwo.style.opacity = 0
                  bannerImgThree.style.opacity = 1
                  setTimeout(() => {
                    bannerImgThree.style.opacity = 0
                    bannerSceneOne.classList.add('hide')
                    bannerSceneTwo.classList.add('active')
                    this.snowAnimation = true
                    setTimeout(() => {
                      bannerSceneTwo.classList.add('show')
                      this.install()
                    }, 2500)
                  }, 1000)
                }, 250)
              }, 750)
            }, 250)
          }, 750)
        }, 250)
      }, 750)
    },
    animateMarquee() {
      const marquee = document.querySelector('.banner')
      const sponsors = document.querySelector('.banner-sponsors')
      const marqueeItem = document.querySelector('.banner-sponsors-item')
      const marqueeInner = document.querySelector('.banner-sponsors-inner')
      const marqueeCount = marquee.offsetWidth / marqueeItem.offsetWidth

      for (let i = 0; i <= marqueeCount; i++) {
        const marqueeItemClone = marqueeItem.cloneNode(true)
        marqueeInner.appendChild(marqueeItemClone)
      }

      const marqueeInnerClone = marqueeInner.cloneNode(true)
      sponsors.appendChild(marqueeInnerClone)

      let start = performance.now()
      let progress
      let translateX

      requestAnimationFrame(function step(now) {
        progress = (now - start) / 50000

        if (progress > 1) {
          progress %= 1
          start = now
        }

        translateX = marqueeInner.offsetWidth * progress

        marqueeInner.style.transform = `translate3d(-${translateX}px, 0 , 0)`
        marqueeInnerClone.style.transform = `translate3d(-${translateX}px, 0 , 0)`
        requestAnimationFrame(step)
      })
    },
    install() {
      const option = {
        id: 658536522,
        autoplay: true,
        responsive: true,
        muted: true,
        controls: false,
        loop: true,
      }

      this.player = new Player('vimeoPlayer', option).on('ended', function () {
        const bannerSceneTwo = document.getElementById('bannerSceneTwo')
        const bannerSceneThree = document.getElementById('bannerSceneThree')
        bannerSceneTwo.classList.remove('hide')
        bannerSceneTwo.classList.add('active')
        bannerSceneThree.classList.remove('show')
        const close = document.querySelector('.closeBtn')
        if (innerWidth <= 576) {
          this.player.exitFullscreen()
        }
        bannerSceneTwo.style.zIndex = 2
        close.style.zIndex = 0

        setTimeout(() => {
          this.player.setMuted(true)
        }, 1000)
      })
    },
    showVideo() {
      const bannerSceneTwo = document.getElementById('bannerSceneTwo')
      const bannerSceneThree = document.getElementById('bannerSceneThree')
      const close = document.querySelector('.closeBtn')
      const frame = document.querySelector('iframe')
      bannerSceneTwo.classList.remove('active')
      bannerSceneTwo.classList.add('hide')
      bannerSceneThree.classList.add('show')
      close.style.zIndex = 1
      this.player = new Player(frame)
      if (innerWidth <= 576) {
        this.player.requestFullscreen()
      }

      this.player.unload()
      setTimeout(() => {
        this.player.play()
      }, 200)
      this.player.setMuted(false)
      setTimeout(() => {
        bannerSceneTwo.style.zIndex = 0
      }, 2000)
    },
    closeVideo() {
      const bannerSceneTwo = document.getElementById('bannerSceneTwo')
      const bannerSceneThree = document.getElementById('bannerSceneThree')
      const close = document.querySelector('.closeBtn')
      bannerSceneTwo.classList.remove('hide')
      bannerSceneTwo.classList.add('active')
      bannerSceneThree.classList.remove('show')
      if (innerWidth <= 576) {
        this.player.exitFullscreen()
      }
      bannerSceneTwo.style.zIndex = 2
      close.style.zIndex = 0
      this.player.pause()
      setTimeout(() => {}, 2000)
      setTimeout(() => {
        this.player.setMuted(true)
      }, 1000)
    },
    fullScreen() {
      document.addEventListener('fullscreenchange', (e) => {
        if (document.fullscreenElement) {
          console.log('Fullscreen')
        } else {
          const bannerSceneTwo = document.getElementById('bannerSceneTwo')
          const bannerSceneThree = document.getElementById('bannerSceneThree')
          const close = document.querySelector('.closeBtn')
          bannerSceneTwo.classList.remove('hide')
          bannerSceneTwo.classList.add('active')
          bannerSceneThree.classList.remove('show')
          this.player.exitFullscreen()
          bannerSceneTwo.style.zIndex = 2
          close.style.zIndex = 0
          this.player.pause()
          setTimeout(() => {}, 2000)
          setTimeout(() => {
            this.player.setMuted(true)
          }, 1000)
        }
      })
    },
  },
}
</script>
<style scoped lang="scss">
.banner {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  @include _xl {
    height: 650px;
  }
  @include _lg {
    height: 500px;
  }
  @include _md {
    height: 400px;
  }
  @include _sm {
    height: 70vh;
  }
  &-scene {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &--one {
      z-index: 3;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: url('@/assets/img/christmas/banner-bg.png') repeat 0 0;
        opacity: 0.5;
        z-index: 1;
        transition: opacity 1s ease-out;
      }
      &.hide {
        z-index: 0;
        &:before {
          opacity: 0;
        }
      }
      .banner-img-logo {
        @include _sm {
          max-width: 200px;
        }
      }
    }
    &--two {
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      overflow: hidden;

      .banner-gradient {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, #d71929 0%, #a40001 100%);
        z-index: 1;
        transition: 1s ease-in-out;
        svg {
          position: absolute;
          top: 0;
          left: 99.8%;
          width: auto;
          height: 100%;
        }
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 130px;
        z-index: 1;
        background: url('@/assets/img/christmas/banner-snow.png')
          no-repeat 0 0/100% 100%;
        transform: translate(0, 100%);
        transition: 0.5s ease-in-out 0.5s;
        @include _lg {
          height: 100px;
        }
        @include _md {
          height: 70px;
        }
        @include _sm {
          height: 70px;
          bottom: 0px;
          width: 160%;
        }
        @include _xs {
          height: 35px;
          bottom: 0px;
        }
      }
      .container {
        position: relative;
        height: 100%;
        z-index: 3;
      }
      &.active {
        &:after {
          transform: translate(0, 0);
        }
        .banner-logo {
          left: 0;
          opacity: 1;
        }
        .banner-title {
          span {
            transform: translate(0, 0);
            opacity: 1;
          }
        }
        .banner-sponsors {
          transform: translate(0, 0);
          opacity: 1;
        }
      }
      &.show {
        .banner-gradient {
          left: -900px;
          transform-origin: 100% 50%;
          @include _xxl {
            left: -700px;
          }
          @include _xl {
            left: -550px;
          }
          @include _lg {
            left: -400px;
          }
          @include _md {
            left: -300px;
          }
          @include _sm {
            left: 0px;
            top: -180px;
          }
        }
        .banner-btn {
          transform: translate(calc(50% - 780px), -50%);
          @include _xxl {
            transform: translate(calc(50% - 580px), -50%);
          }
          @include _xl {
            transform: translate(calc(50% - 470px), -50%);
          }
          @include _lg {
            transform: translate(calc(50% - 340px), -50%);
          }
          @include _md {
            transform: translate(calc(50% - 250px), -50%);
          }
          @include _sm {
            right: 50%;
            top: 55%;
            transform: translate(50%, 0);
          }
          @include _xs {
            right: 50%;
            top: 57%;
            transform: translate(50%, 0);
          }
          &-rotate {
            opacity: 1;
          }
          &:hover {
            .banner-scene--two {
              left: -200px !important;
            }
          }
        }
      }
      &.hide {
        .banner-gradient {
          transition: 1s ease 1s;
          margin-left: -2000px;

          @include _sm {
            margin-top: -2000px;
            margin-left: 0;
          }
        }
        .banner-btn {
          transition: 1s ease 1s;
          right: 2000px;
          @include _sm {
            top: -2000px;
            right: 0;
          }
          // right: 100%;
          // transform: translate(-100%, -50%) !important;
          // @include _sm {
          //   transform: translate(300%, 0) !important;
          // }
        }
        .banner-sponsors {
          transition: 1s ease-in-out;
        }
      }
    }
    &--three {
      z-index: 1;
      &.show {
        #vimeoPlayer {
          @include _sm {
            // transform: rotate(90deg) scale(2) translateX(-90%) translateY(46%);
            left: 50%;
            top: 0%;
            transform: translate(-50%, 0%);
          }

          span {
            opacity: 1;
          }
        }
      }
      #vimeoPlayer {
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;

        @include _sm {
          top: 108%;
        }
        @include _xs {
          top: 115%;
        }
        span {
          z-index: 1;
          position: absolute;
          width: 50px;
          height: 50px;
          display: block;
          right: 35px;
          top: 35px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          cursor: pointer !important;
          &::before {
            content: '\2716';
            display: block;
            color: black;
            position: absolute;
            right: 50%;
            font-size: 25px;
            top: 50%;
            transform: translate(50%, -50%);
          }
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
  &-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0;
    // transition: opacity 1s ease-out;
  }
  &-logo {
    display: block;
    position: absolute;
    top: 110px;
    left: -100%;
    opacity: 0;
    transition: 1s ease-in-out;
    @include _lg {
      top: 30px;
    }
    @include _md {
      max-width: 100px;
    }
  }
  &-title {
    line-height: 125%;
    text-transform: uppercase;
    color: #ffffff;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -75%);
    max-width: 650px;
    @include _xxl {
      max-width: 600px;
    }
    @include _xl {
      max-width: 500px;
    }
    @include _lg {
      top: 40%;
      max-width: 300px;
      font-size: 20px;
    }
    @include _md {
    }
    @include _sm {
      top: 35%;
    }
    @include _xs {
      top: 30%;
    }
    span {
      display: block;
      transform: translate(-100%, 0);
      opacity: 0;
      &:nth-child(1) {
        transition: 1s ease-in-out;
      }
      &:nth-child(2) {
        transition: 1s ease-in-out 0.2s;
      }
      &:nth-child(3) {
        transition: 1s ease-in-out 0.4s;
      }
      &:nth-child(4) {
        transition: 1s ease-in-out 0.6s;
      }
    }
  }
  &-sponsors {
    padding: 0 30px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 106px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    // transform: translate(100%, 0);
    opacity: 0;
    transition: 1s ease-in-out 1s;
    &-inner {
      display: flex;
      @include _lg {
        margin-top: 40px;
      }
      @include _md {
        margin-top: 70px;
      }
      @include _xs {
        margin-top: 85px;
      }
    }
    &-item {
      display: flex;
      align-items: center;
      img {
        margin-right: 83px;
        @include _md {
          max-width: 100px;
        }
        @include _md {
          max-width: 80px;
        }
        @include _xs {
          max-width: 50px;
        }
      }
    }
  }
  &-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
    z-index: 4;
    background: none;
    border: none;
    border-radius: 50%;
    padding: 0;
    transition: 1s ease-in-out;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      max-width: 150px;
      @include _lg {
        max-width: 120px;
      }
      @include _md {
        max-width: 80px;
      }
      @include _sm {
        max-width: 100px;
      }
      @include _xs {
        max-width: 80px;
      }
    }
    &-rotate {
      position: absolute;
      top: 0;
      left: 0;
      animation: 4s linear 0s normal none infinite running rot;
      opacity: 0;
    }
  }
}
@keyframes rot {
  0% {
    transform: scale(1.5) rotate(0deg);
  }
  100% {
    transform: scale(1.5) rotate(360deg);
  }
}
</style>
