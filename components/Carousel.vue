<template>
  <div class="slider-envelope">
    <vue-tiny-slider v-bind="tinySliderOptions" class="slider slider-envelope-wrap">
      <div class="slider-envelope-wrap-item item">
        <Envelope
          :envelopObj="letterOne"
          ref="childComponentEnvelope"
          @click.native="evelClick"
        />
      </div>
      <div class="slider-envelope-item item">
        <Envelope :envelopObj="letterTwo" @click.native="evelClick" />
      </div>
      <div class="slider-envelope-item item">
        <Envelope :envelopObj="letterThree" @click.native="evelClick" />
      </div>
      <div class="slider-envelope-item item">
        <Envelope :envelopObj="letterFour" @click.native="evelClick" />
      </div>
      <div class="slider-envelope-item item">
        <Envelope :envelopObj="letterFive" @click.native="evelClick" />
      </div>
      <div class="slider-envelope-item item">
        <Envelope :envelopObj="letterSix" @click.native="evelClick" />
      </div>
      <div class="slider-envelope-item item">
        <Envelope :envelopObj="letterSeven" @click.native="evelClick" />
      </div>
    </vue-tiny-slider>

    <ul class="controls" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
      <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
        <svg
          width="38"
          height="25"
          viewBox="0 0 38 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.8623 1.43262L19.2383 22.5814L1.61429 1.43262"
            stroke="#E41F30"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </li>
      <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">
        <svg
          width="38"
          height="25"
          viewBox="0 0 38 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.8623 1.43262L19.2383 22.5814L1.61429 1.43262"
            stroke="#E41F30"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </li>
      <p class="w300">
        next
        <br />bonus
      </p>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letterOne: {
        title: 'Via Customer Minutes',
        text: 'Get 30,000 credits on our software free, our mobile app builder free for a month and a dedicated Customer Strategy Manager assigned to your account to help develop your mobile strategy.',
        text_bonus: 'BONUS #1'
      },
      letterTwo: {
        title: 'Viscap Creatives',
        text: 'Get 3 Free video ads with a signed contract.',
        text_bonus: 'BONUS #2'
      },
      letterThree: {
        title: 'Chronos Audit',
        text: 'To kickstart your 2022 marketing the right way, get a FREE audit and complimentary SMS setup when you sign up for our email plans. ',
        text_bonus: 'BONUS #3'
      },
      letterFour: {
        title: 'Checkout Champ',
        text: 'Get a 14 day trial for FREE and super-charge your shopify, bigcommerce, woocommerce & more!',
        text_bonus: 'BONUS #4'
      },
      letterFive: {
        title: 'Insense',
        text: 'Get up to $400 on your balance and enhance your ad’s performance by amplifying the creator’s content on TikTok, Facebook, and Instagram and.',
        text_bonus: 'BONUS #5'
      },
      letterSix: {
        title: 'Gorgias',
        text: 'Get 2 months free when you sign up for Gorgias, the leading helpdesk for Shopify, Magento and BigCommerce merchants.',
        text_bonus: 'BONUS #6'
      },
      letterSeven: {
        title: 'Juni',
        text: 'Get 2% cashback for new partners for all of December.  Sign up now -> submit your KYB -> bypass our waitlist -> spend over £500.00 with your Juni card and activate 2% for the remainder of the year!',
        text_bonus: 'BONUS #7'
      },
      slide: '',
      tinySliderOptions: {
        touch: true,
        items: 1,
        controls: true,
        swipeAngle: true,
        // nav: true,
        loop: false,
        // autoplay: true,
        speed: 1000,
        gutter: 45,
        center: true,
        axis: 'vertical',
        startIndex: 2,
        // autoHeight: true,
        autoplayButtonOutput: false,
        controlsContainer: '#customize-controls',
        responsive: {
          576: {
            items: 2,
            gutter: 20
          },
          768: {
            items: 2,
            gutter: 30
          },
          992: {
            items: 2,
            gutter: 40
          },
          1200: {
            items: 2,
            gutter: 50
          },
          1400: {
            items: 2,
            gutter: 60
          }
        }
      }
    }
  },
  methods: {
    evelClick(e) {
      const hearts = document.querySelectorAll('.envelope-parts-head_heart')
      hearts.forEach((heart) => {
        if (heart.contains(e.target)) {
          this.$refs.childComponentEnvelope.openEnvelope(e)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-envelope {
  @import '@/assets/styles/tiny-slider';
  transform: rotate(-10deg);
  position: relative;
  // max-height: 120vh;
  text-align: center;

  @include _xl {
    transform: rotate(0deg);
  }
  @include _md {
    padding: 25px 70px;
  }
  @include _sm {
    padding: 10px;
    min-height: 520px;
  }
  @media (max-width: 480px) {
    min-height: 420px;
  }
  @include _xs {
    padding: 10px;
    min-height: 340px;
  }
  .tns-outer {
    padding: 0 !important;
  }
  .tns-nav {
    display: none;
  }
  .tns-item {
    @include _lg {
      max-width: 600px !important;
      margin: 0 auto;
    }
  }
  .tns-slide {
    transition-duration: 0.3s !important;
  }
  .tns-ovh {
    @include _sm {
      min-height: 260px;
    }
  }
  &-wrap {
    &-item {
      touch-action: none;
      &-active {
        .top-section__slider-img {
          filter: blur(0) grayscale(0);
        }
      }
      .top-section__slider-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        &-wrap {
          overflow: hidden;
          font-size: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
    &-item:first-child {
      margin-top: 300px;
      @include _lg {
        margin-top: 0px;
      }
      @include _sm {
        margin-top: 60px;
      }
      @include _sm {
        margin-top: 40px;
      }
    }
  }

  #customize-controls {
    position: absolute;
    top: 70%;
    right: 0;
    list-style: none;
    transform: translate(-100%, -50%);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @include _xl {
      transform: translate(-30%, -50%);
    }
    @include _lg {
      transform: translate(0%, -50%);
    }
    @include _sm {
      position: absolute;
      bottom: 0;
      right: 50%;
      list-style: none;
      transform: translate(50%, 0);
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }

    p {
      color: #e41f30;
      font-size: 20px;
      @include _sm {
        display: none;
      }
    }
    button {
      outline: none !important;
      appearance: none;
      &:focus {
        outline: none !important;
      }
    }
    .prev {
      margin-bottom: 25px;
      cursor: pointer;
      outline: none !important;
      appearance: none !important;
      &:focus {
        outline: none !important;
      }
      &:active {
        outline: none !important;
      }
      @include _sm {
        margin-right: 10px;
        margin-bottom: 0px;
      }
      svg {
        width: 35px;
        height: 35px;
        transform: rotate(180deg);
      }
      &:hover {
        filter: opacity(50%) grayscale(1);
      }
    }
    .next {
      outline: none !important;

      margin-top: 25px;
      cursor: pointer;
      appearance: none !important;
      &:focus {
        outline: none !important;
      }
      &:active {
        outline: none !important;
      }
      @include _sm {
        margin-left: 10px;
        margin-top: 0px;
      }
      svg {
        width: 35px;
        height: 35px;
      }
      &:hover {
        filter: opacity(50%) grayscale(1);
      }
    }
  }
  [aria-disabled='true'] {
    pointer-events: none !important;
    cursor: default !important;
    svg {
      path {
        stroke: grey;
      }
    }
  }
}
</style>
