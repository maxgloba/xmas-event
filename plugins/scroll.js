import ASScroll from '@ashthornton/asscroll'

let smoothScroll

export default ({ app }, inject) => {
  class SmoothScroll {
    constructor() {
      this.asscrollOptions = {
        disableResize: true,
        disableRaf: true,
        touchScrollType: 'transform',
      }
      this.init()
    }

    init() {
      this.isTouch = 'ontouchstart' in document.documentElement
      this.asScroll = new ASScroll(this.asscrollOptions)
      // init ScrollTrigger proxy
      this.initScrollTrigger()
      // events
      // raf
      app.$events.on('frame:frame', this.loop.bind(this))
      // listener
      new ResizeObserver(this.onWindowResize.bind(this)).observe(
        this.asScroll.scrollElements[0]
      )

      return this.asScroll
    }
    initScrollTrigger() {
      app.$ScrollTrigger.defaults({
        scroller: this.asScroll.containerElement,
      })
      app.$ScrollTrigger.scrollerProxy(this.asScroll.containerElement, {
        scrollTop: (value) => {
          if (arguments.length) {
            this.asScroll.currentPos = value
            return
          }
          return this.asScroll.currentPos
        },
        getBoundingClientRect: () => {
          return {
            top: 0,
            left: 0,
            width: app.$viewport.width,
            height: app.$viewport.height,
          }
        },
        fixedMarkers: true,
      })

      this.asScroll.on('update', app.$ScrollTrigger.update)
      app.$ScrollTrigger.addEventListener(
        'refresh',
        this.asScroll.resize.bind(this)
      )
      app.$ScrollTrigger.refresh()
    }
    loop() {
      this.asScroll.update()
    }
    onWindowResize(e) {
      const width = app.$viewport.width
      const height = app.$viewport.height
      this.asScroll.resize({ width, height })
      app.$events.emit('scroll:resize', e)
    }
  }

  const useSmoothScroll = () => {
    return smoothScroll || (smoothScroll = new SmoothScroll(app).asScroll)
  }

  inject('scroll', useSmoothScroll)
}
