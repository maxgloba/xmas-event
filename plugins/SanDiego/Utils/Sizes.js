import EventEmitter from './EventEmitter'

export default class Sizes extends EventEmitter {
  constructor() {
    super()
    // Setup
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    this.containerTarget = document.querySelector('.banner')
    this.timerResize = null
    // Resize event
    this.listenerHandler = this._onResize.bind(this)
    window.addEventListener('resize', this.listenerHandler)
  }

  visibleHeightAtZDepth(camera, depth = 0) {
    // compensate for cameras not positioned at z=0
    const cameraOffset = camera.position.z
    if (depth < cameraOffset) depth -= cameraOffset
    else depth += cameraOffset

    // vertical fov in radians
    const vFOV = (camera.fov * Math.PI) / 180

    // Math.abs to ensure the result is always positive
    return 2 * Math.tan(vFOV / 2) * Math.abs(depth)
  }

  visibleWidthAtZDepth(camera, depth = 0) {
    const height = this.visibleHeightAtZDepth(camera, depth)
    return height * camera.aspect
  }

  _onResize() {
    this.width = this.containerTarget.clientWidth
    this.height = this.containerTarget.clientHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    // Emit event
    clearTimeout(this.timerResize)
    this.timerResize = setTimeout(()=>{
    this.trigger('resize')
    }, 200)
  }
  stop(){
    window.removeEventListener('resize', this.listenerHandler)
  }
}
