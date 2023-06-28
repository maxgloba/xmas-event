import * as THREE from 'three'
import { OrbitControls } from '~/node_modules/three/examples/jsm/controls/OrbitControls'
import Scene from './Scene'
export default class Camera {
  constructor() {
    this.app = new Scene()
    this.sizes = this.app.sizes
    this.scene = this.app.scene
    this.canvas = this.app.canvas

    this._setInstance()
    // this._setOrbitControls()

    // this.scene.add(new THREE.AxisHelper())
  }

  _setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      40,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    )
    this.instance.position.set(0, 0, 4)
    this.scene.add(this.instance)
  }
  _setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
  }
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }
  update() {
    // this.controls.update()
  }
}
