import EventEmitter from './EventEmitter'
import gsap from 'gsap'

export default class Time extends EventEmitter {
  constructor() {
    super()
    // Setup
    this.elapsed = 0
    this.delta = 16

    this.tickerFunction = this._tick.bind(this)
    gsap.ticker.add(this.tickerFunction)
  }

  _tick(time, deltaTime, frame) {
    this.delta = deltaTime
    this.elapsed = time
    // Emit event
    // this.trigger('tick')
  }

  stop() {
    gsap.ticker.remove(this.tickerFunction)
  }
}
