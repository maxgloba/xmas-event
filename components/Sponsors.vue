<template>
  <div class="sponsors">
    <div class="banner-sponsors-inner">
      <div class="banner-sponsors">
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
</template>

<script>
export default {
  name: 'Marquee',
  mounted() {
    this.animateMarquee()
  },
  methods: {
    animateMarquee() {
      const marquee = document.querySelector('.sponsors')
      const marqueeItem = document.querySelector('.banner-sponsors')
      const marqueeInner = document.querySelector('.banner-sponsors-inner')
      const marqueeCount = marquee.offsetWidth / marqueeItem.offsetWidth

      for (let i = 0; i <= marqueeCount; i++) {
        const marqueeItemClone = marqueeItem.cloneNode(true)
        marqueeInner.appendChild(marqueeItemClone)
      }

      const marqueeInnerClone = marqueeInner.cloneNode(true)
      marquee.appendChild(marqueeInnerClone)

      let start = performance.now()
      let progress
      let translateX

      requestAnimationFrame(function step(now) {
        progress = (now - start) / 15000

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
  },
}
</script>