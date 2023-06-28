import EventEmitter from './EventEmitter'

export default class Mouse extends EventEmitter {
  constructor() {
    super()
    // Setup
    this.prevX = 0
    this.prevY = 0
    this.x = 0
    this.y = 0
    this.xP = 0
    this.yP = 0
    this.xP2 = 0
    this.yP2 = 0
    // Resize event
    window.addEventListener('mousemove', this._onMouseMove.bind(this))
  }

  _onMouseMove(e) {
    this.x = e.clientX
    this.y = e.clientY
    this.xP = this.x / window.innerWidth
    this.yP = this.y / window.innerHeight
    this.xP2 = this.xP * 2 - 1
    this.yP2 = -(this.yP * 2) + 1
    // Emit event
    this.trigger('mousemoved')
  }
}
