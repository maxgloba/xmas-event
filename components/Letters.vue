<template>
  <div class="letters">
    <div class="letters-item" v-for="(letter, i) in lettersArray">
      <img class="letters-heart" src="@/assets/img/christmas/letter-heart.png" @click="openLetter">
      <div class="letters-bonus">BONUS #{{++i}}</div>
      <div class="letters-santa">To You <br> from Santa</div>
      <div class="letters-box">
        <button class="letters-close" @click="closeLetter">+</button>
        <div class="letters-box--wrap">
          <div class="letters-title">{{ letter.title }}</div>
          <div class="letters-text">{{ letter.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      lettersArray: [
        {
          title: 'Via Customer Minutes',
          text: 'Get 30,000 credits on our software free, our mobile app builder free for a month and a dedicated Customer Strategy Manager assigned to your account to help develop your mobile strategy.'
        },
        {
          title: 'Viscap Creatives',
          text: 'Get 3 Free video ads with a signed contract.'
        },
        {
          title: 'Chronos Audit',
          text: 'To kickstart your 2022 marketing the right way, get a FREE audit and complimentary SMS setup when you sign up for our email plans. '
        },
        {
          title: 'Checkout Champ',
          text: 'Get a 14 day trial for FREE and super-charge your shopify, bigcommerce, woocommerce & more!'
        },
        {
          title: 'Insense',
          text: 'Get up to $400 on your balance and enhance your ad’s performance by amplifying the creator’s content on TikTok, Facebook, and Instagram and.'
        },
        {
          title: 'Gorgias',
          text: 'Get 2 months free when you sign up for Gorgias, the leading helpdesk for Shopify, Magento and BigCommerce merchants.'
        },
        {
          title: 'Juni',
          text: 'Get 2% cashback for new partners for all of December.  Sign up now -> submit your KYB -> bypass our waitlist -> spend over £500.00 with your Juni card and activate 2% for the remainder of the year!'
        }
      ]
    }
  },
  methods: {
    closeLetter(){
      const letters = document.querySelectorAll('.letters-item')
      letters.forEach(letter => letter.classList.remove('letters-active'))
    },
    openLetter(e){
      this.closeLetter()
      e.target.parentNode.classList.add('letters-active')
    }
  }
}
</script>
<style lang="scss" scoped>
.letters{
  border: 1px solid #000;
  padding: 50px 0;
  position: relative;
  z-index: 1;
  &-item{
    perspective: 800px;
    position: relative;
    background: linear-gradient(180deg, #FDF3AA -27.65%, #FBF5AC -13.2%, #F1EAA4 -5.31%, #9E8346 62.99%, #B7974C 83.66%, #C6A350 92.6%, #CBA751 100%);
    width: 750px;
    height: 546px;
    &:not(:first-child){
      margin-top: 50px;
    }
    &:before{
      content:"";
      display: block;
      position: absolute;
      left: 0; top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: url('@/assets/img/christmas/letter-wrap.png') no-repeat 0 0/100% 100%;
    }
  }
  &-bonus{
    font-size: 40px;
    line-height: 1;
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    z-index: 3;
    bottom: 45px;
    left: 45px;
  }
  &-santa{
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;
    text-align: right;
    text-transform: uppercase;
    color: #FFFFFF;
    position: absolute;
    z-index: 3;
    bottom: 45px;
    right: 45px;
  }
  &-box{
    background: linear-gradient(0deg, #F8F8F8 0%, #B7974C 100%);
    position: absolute;
    z-index: 1;
    left: 10px; right: 10px;
    top: 10px; bottom: 10px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    &:before{
      content:"";
      position: absolute;
      background: #fff;
      left: 5px; right: 5px;
      top: 5px; bottom: 5px;
    }
  }
  &-title{
    margin-bottom: 30px;
    position: relative;
    z-index: 2;
    font-weight: 800;
    font-size: 35px;
    line-height: 43px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
  }
  &-text{
    position: relative;
    z-index: 1;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #000000;
  }
  &-close{
    color: #000;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 3;
    padding: 0;
    border:none;
    background: none;
    font-size: 30px;
    line-height: 40px;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    &:hover{
      opacity: .9;
    }
  }
  &-heart{
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    top: 0;
    transition: transform .2s ease;
    transform-origin: top center;
    transform: rotate3d(1, 0, 0, 0deg);
  }
  &-active{
    z-index: 2;
    .letters-heart{
      animation: 1s ease forwards heart;
    }
    .letters-box{
      animation: 1s ease forwards box 1s;
    }
  }
}
@keyframes heart {
  50% {
    z-index: 2;
  }
  100%{
    transform: rotate3d(1, 0, 0, 180deg);
    z-index: 1;
  }
}
@keyframes box {
  0%{
  }
  40%{
    z-index: 1;
  }
  50% {
    transform: translate(0, -100%);
  }
  100%{
    transform: translate(0, 0);
    z-index: 2;
  }
}

</style>