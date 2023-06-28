<template>
  <div class="envelope-parts">
    <img
      class="envelope-parts-body"
      src="@/assets/img/christmas/convert_one.png"
      alt=""
    />
    <img
      class="envelope-parts-head_close"
      src="@/assets/img/christmas/convert_two.png"
      alt=""
    />
    <img
      class="envelope-parts-head_heart"
      src="@/assets/img/christmas/heart.png"
      alt=""
    />
    <span class="closeEnvelopeBtn"></span>
    <p class="envelope-parts-text text-xls w400">{{ envelopObj.text_bonus }}</p>
    <p class="envelope-parts-text-second text-sxl w700">
      To You <br />
      from Santa
    </p>
    <div class="envelope-parts-letter">
      <h2 class="text-xl w800">{{ envelopObj.title }}</h2>
      <p class="text-md w300">{{ envelopObj.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['envelopObj', 'envelopClick'],
  data() {
    return {}
  },
  methods: {
    openEnvelope(e) {
      const gsap = this.$gsap
      const t1 = gsap.timeline()
      const parts = document.querySelectorAll('.envelope-parts')
      parts.forEach((part) => {
        if (part.contains(e.target)) {
          const heart = part.querySelector('.envelope-parts-head_heart')
          const body = part.querySelector('.envelope-parts-body')
          const close = part.querySelector('.envelope-parts-head_close')
          const letter = part.querySelector('.envelope-parts-letter')
          const bonus = part.querySelector('.envelope-parts-text')
          const textSanta = part.querySelector('.envelope-parts-text-second')
          const closeBtn = part.querySelector('.closeEnvelopeBtn')
          t1.to(heart, {
            autoAlpha: 1,
            display: 'none',
            duration: 0,
          })
          t1.to(close, {
            ease: 'power3',
            transform: 'matrix(1, 0, 0, -1, 0, 0)',
            bottom: '100%',
            zIndex: '1',
            duration: 0.8,
          })
          t1.to(body, {
            ease: 'power3',
            background: 'transparent',
            duration: 0.1,
          })
          t1.to(letter, {
            ease: 'power4',
            display: 'block',
            bottom: '90%',
            duration: 1,
          })
          t1.to(body, {
            ease: 'power1',
            background: '#D11F2E',
            duration: 0.3,
          })
          t1.to(body, {
            duration: 0,
            zIndex: '1',
          })
          t1.to(close, {
            ease: 'power1',
            transform: 'matrix(1, 0, 0, 0, 0, 0)',
            zIndex: '25',
            duration: 0,
          })
          t1.to(bonus, {
            zIndex: '0',
            duration: 0,
          })
          t1.to(textSanta, {
            zIndex: '0',
            duration: 0,
          })
          t1.to(letter, {
            ease: 'power4',
            bottom: '10%',
            transform: 'rotate(+10deg)',
            duration: 1,
          })
          t1.to(closeBtn, {
            ease: 'power4',
            opacity: 1,
            zIndex: '2',

          })
          closeBtn.onclick = () => {
            t1.reverse()
          }
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.envelope {
  &-parts {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    max-width: 750px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    // transform: rotate(-10deg);
    img {
      width: 100%;
      max-width: 750px;
      height: auto;
      max-height: 100%;
    }
    &-head_close {
      position: absolute;
      z-index: 2;
    }
    &-head_heart {
      max-width: 20% !important;
      height: 25% !important;
      position: absolute;
      top: 25%;
      cursor: pointer;
      z-index: 2;
      transition: .5s ease;
      &:hover{
        transform: scale(1.1);
      }
    }
    &-body {
      z-index: 2;
      background: linear-gradient(
        180deg,
        #fdf3aa -27.65%,
        #fbf5ac -13.2%,
        #f1eaa4 -5.31%,
        #9e8346 62.99%,
        #b7974c 83.66%,
        #c6a350 92.6%,
        #cba751 100%
      );
    }
    &-text {
      position: absolute;
      left: 5%;
      bottom: 5%;
      z-index: 2;
      color: #fff;
      &-second {
        position: absolute;
        right: 5%;
        bottom: 5%;
        z-index: 2;
        color: #fff;
        text-transform: uppercase;
        text-align: right;
        @include _xs {
          font-size: 12px;
        }
      }
    }
    &-letter {
      position: absolute;
      display: none;
      width: 100%;
      max-width: 750px;
      border: 5px solid;
      padding: 140px 50px;
      background: #ffffff;
      text-align: center;
      border-image: linear-gradient(
        180deg,
        #b7974c 0%,
        rgba(248, 248, 248, 0) 100%
      );
      border-image: linear-gradient(to bottom, #b7974c, rgba(248, 248, 248, 0))
        0 100%;
      border-image-slice: 1;
      z-index: 1;
      @include _lg {
        padding: 120px 90px;
      }
      @include _md {
        padding: 80px 40px;
      }
      @include _sm {
        max-height: 250px;
        overflow: auto;
        padding: 20px 10px;
      }
      h2 {
        text-transform: uppercase;
        margin-bottom: 20px;
      }
      @include _xl {
        transform: rotate(0deg) !important;
      }
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
      @include _md {
        width: 35px;
        height: 35px;
        right: 10px;
        top: 5px;
      }
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
</style>
