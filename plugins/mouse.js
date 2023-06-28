import Vue from 'vue'

export default ({ app }, inject) => {
  const viewport = new Vue({
    data() {
      return !process.client
        ? {}
        : {
            x: 0,
            y: 0,
            normalizedX: 0,
            normalizedY: 0,
            event: null,
          }
    },
    created() {
      if (!process.client) return
      addEventListener('mousemove', this.onMouseMove, false)
    },
    beforeDestroy() {
      if (!process.client) return
      removeEventListener('mousemove', this.onMouseMove)
    },
    methods: {
      onMouseMove(event) {
        if (!process.client) return
        this.event = event
        this.x = event.clientX
        this.y = event.clientY
        this.normalizedX = (this.x / window.innerWidth) * 2 - 1
        this.normalizedY = -((this.y / window.innerHeight) * 2 - 1)
        app.$events.emit('mouse:move', this.$data)
      },
    },
  })

  inject('mouse', viewport)
}
