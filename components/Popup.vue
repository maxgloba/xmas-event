<template>
  <div class="popup" v-if="popup">
    <button class="popup-close--bg" @click="popupClose"></button>

    <div class="popup-wrap">
      <Snowfall :visible="true" :count="200" :prefix="'popup'"/>
      <div class="popup-row">
        <button class="popup-close" @click="popupClose">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.55575 2L12 12M11.4442 2L2 12"
              stroke="black"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div class="popup-form">
          <div class="popup-form-content">
            <img src="@/assets/img/christmas/popup/1.png" />
          </div>
        </div>
      </div>
      <div class="popup-form-text">
        <h3 class="text-_xl" v-html="buyer['50']">{{ buyer['50'] }}</h3>
      </div>
      <div class="popup-img">
        <svg
          width="1200"
          height="310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22.7152V509.84H1200V17.7888C1181.27 19.363 1163.7 25.0117 1148.25 33.8428C1146 33.6553 1143.75 33.499 1141.5 33.3427C1139.25 33.1864 1137 33.0301 1134.75 32.8426C1122.38 23.0903 1106.75 17.2139 1089.88 17.2139C1069 17.2139 1050.25 25.966 1037 40.0943C1032.5 44.8454 1025.12 44.9704 1020.5 40.3443C996 15.7136 962.125 0.334961 924.5 0.334961C882.125 0.334961 844.375 19.8395 819.5 50.3467C816.75 53.7225 812.375 55.0978 808.125 54.0976C802.125 52.7222 795.75 51.9721 789.25 51.9721C775.5 51.9721 762.5 55.2228 751.125 61.0992C747.625 62.8496 743.5 62.8496 740.125 60.8491C733.5 56.9732 725.875 54.7227 717.625 54.7227C716.625 54.7227 715.625 54.7227 714.75 54.8477C712 54.9728 709.25 54.2226 707.125 52.4722C679 30.5921 640.875 17.2139 598.875 17.2139C560.625 17.2139 525.5 28.3415 498.375 46.9709C494.75 49.4715 490.125 49.3464 486.375 47.0959C482.625 44.8454 478.375 43.5951 473.625 43.5951C467.375 43.5951 461.625 45.9707 457.25 49.8466C454.125 52.7222 449.625 53.7225 445.625 52.2221C442.032 50.9432 438.478 49.6418 434.937 48.3453C411.132 39.6287 387.923 31.1306 357.438 31.1306C342.063 31.1306 327.413 34.0861 312 40.8445C308.875 41.3446 305.75 40.5944 303.25 38.5939C295.75 32.9676 286.5 29.5918 276.375 29.5918H274.75C271.625 29.7168 268.625 28.5916 266.375 26.4661C248.875 10.2123 225.375 0.334961 199.625 0.334961C175.25 0.334961 153.125 9.21204 135.875 23.8405C132.75 26.4661 128.625 27.3413 124.75 25.966C122.25 25.0908 119.625 24.5906 116.75 24.5906C111.625 24.5906 106.875 26.216 103 28.8416C99.625 31.0922 95.5 31.5923 91.875 29.8419C74.75 21.965 56 17.464 36.25 17.464C23.625 17.464 11.5 19.3394 0 22.7152Z"
            fill="white"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              begin="mouseover"
              from="0"
              to="-70"
              dur="0.5s"
            />
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['popupObj'],
  data() {
    return {
      popup: false,
      buyer: {
        25: '<b>1st-25th Buyer</b> <br> Free Geekout Ticket Next Year',
        50: '<b>26th -50th Buyer</b> <br> $2,500 OFF of Geekout Next Year',
        101: '<b>51th -101st Buyer</b> <br> $1,000 OFF of Geekout Next Year',
      },
      active: false,
    }
  },
  mounted() {
    this.popupShow()
    // setTimeout(() => {
    //   this.popup = true
    //   document.documentElement.style.overflow = 'hidden'
    // }, 3000)
  },
  methods: {
    popupClose(e) {
      e.preventDefault()
      this.popup = false
      document.documentElement.style.overflow = 'auto'
    },
    popupShow() {
      const videosection = document.getElementById('videoSection')
      window.addEventListener('scroll', () => {
        const top = Math.round(videosection.getBoundingClientRect().top - 400)
        if (this.active === false) {
          if (top < 60 && top > 0) {
            this.popup = true
            console.log(top)
            document.documentElement.style.overflow = 'hidden'
            this.active = true
          }
        }
      })
    },
  },
}
</script>
<style scoped lang="scss">
.popup {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow-y: auto;

  &-wrap {
    margin: 8vh auto 2vh;
    z-index: 2;
    background: radial-gradient(
        100% 100% at 50% 0%,
        #d71929 12.31%,
        #a40001 100%
      ),
      #e41f30;
    padding: 60px;
    box-shadow: 0 0 3em rgb(0 0 0 / 40%);
    width: 100%;
    max-width: 1200px;
    max-height: 700px;
    height: 100%;
    position: relative;
    border: 2px solid #ffffff;
    border-radius: 30px;
    overflow: hidden;
    @include _md {
      margin: 20vh auto 2vh;
      max-width: 85%;
      max-height: 530px;
    }
    @include _sm {
      max-width: 80%;
      max-height: 510px;
    }
    @include _xs {
      max-height: 490px;
    }
  }
  &-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &-loader {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-form {
    width: 100%;
    z-index: 3;
    img {
      width: 100%;
      max-width: 220px;
      margin: 0 auto;
    }
    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0;
      @include _md {
        flex-direction: column;
        text-align: center;
      }
    }
    &-text {
      text-align: center;
      width: 100%;
      z-index: 3;
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, -15%);
      h3 {
        ::v-deep b {
          color: #e41f30;
        }
      }
      @include _md {
        margin-left: 0;
        margin-top: 20px;
        bottom: 4%;
      }
    }
  }
  &-img {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    svg {
      width: 100%;
      height: auto;
      min-height: 185px;
    }
    &:hover {
    }
  }
  &-close {
    padding: 0;
    height: 40px;
    width: 40px;
    bottom: 30px;
    right: 30px;
    position: absolute;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 3;
    background: white;
    border: 2px solid #e0e1e4;
    border-radius: 50%;
    line-height: 40px;
    @include _md {
      top: 30px;
    }
    svg {
      pointer-events: none;
    }
    &:hover {
      opacity: 0.5;
    }
    &--bg {
      position: fixed;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      backdrop-filter: blur(2px);
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
      margin: 0;
      padding: 0;
      border: none;
    }
  }
}
</style>
