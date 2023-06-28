import * as THREE from 'three'
import Sizes from './Utils/Sizes'
import Mouse from './Utils/Mouse'
import Time from './Utils/Time'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'
import Resources from './Utils/Resources'

window.instance = null

export default class SanDiego {
  constructor(canvas) {
    if (window.instance) {
      return window.instance
    }
    window.instance = this
    // Options
    this.canvas = canvas
    // Setup
    this.sizes = new Sizes()
    this.mouse = new Mouse()
    this.scene = new THREE.Scene()
    this.time = new Time()
    this.resources = new Resources()
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()
    // Listeners
    this.sizes.on('resize', this._resize.bind(this))
  }
  _resize() {
    this.camera.resize()
    this.renderer.resize()
    this.world.resize()
  }
  destroy() {
    this.time.stop()
    this.world.destroy()
    this.world = null
    this.scene = null
    this.camera = null
    this.sizes.stop()
    this.resources = null
    this.mouse = null
    this.renderer.dispose()
    window.instance = null
  }
}
