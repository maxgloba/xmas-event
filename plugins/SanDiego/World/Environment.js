import * as THREE from 'three'
import Scene from '../Scene'
import gsap from 'gsap'

export default class Environment {
  constructor() {
    this.app = new Scene()
    this.scene = this.app.scene
    this.resources = this.app.resources

    this._setSunLight()
  }

  _setSunLight() {
    this.sunlight = new THREE.DirectionalLight('#ffffff', 4)
    this.sunlight.castShadow = true
    this.sunlight.shadow.camera.far = 4
    this.sunlight.shadow.mapSize.set(1024, 1024)
    this.sunlight.shadow.normalBias = 0.05
    this.sunlight.position.set(0, 2, 5)
    this.scene.add(this.sunlight)
  }
  destroy() {
    this.scene.remove(this.sunlight)
    this.sunlight.dispose()
    this.sunlight = null
  }
}
