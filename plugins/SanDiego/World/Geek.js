import * as THREE from 'three'
import gsap from 'gsap'
import EventEmitter from '../Utils/EventEmitter'
import Scene from '../Scene'

export default class Geek extends EventEmitter {
  constructor() {
    super()

    this.app = new Scene()
    this.scene = this.app.scene
    this.renderer = this.app.renderer
    this.resources = this.app.resources
    this.geek = this.resources.items.geekModel
    this.sizes = this.app.sizes
    this.camera = this.app.camera

    this._setModel()

    this._update = this.update.bind(this)
  }

  _setModel() {
    this.model = this.geek.scene
    this.modelMeshes = []
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        this.modelMeshes.push(child)
      }
    })
    this._updateModelParams()
    this._setAnimation()
    this.scene.add(this.model)
  }
  _updateModelParams() {
    this.model.position.z = 2.5
    const visibleWidth = this.sizes.visibleWidthAtZDepth(
      this.camera.instance,
      2.5
    )
    const visibleHeight = this.sizes.visibleHeightAtZDepth(
      this.camera.instance,
      2.5
    )

    if (this.sizes.width > 1200) {
      this.model.scale.set(0.15, 0.15, 0.15)
      this.model.position.y = 0
      this.model.position.x = visibleWidth * 0.25
    } else if (this.sizes.width > 1023 && this.sizes.width <= 1200) {
      this.model.scale.set(0.1, 0.1, 0.1)
      this.model.position.y = 0
      this.model.position.x = visibleWidth * 0.25
    } else if (this.sizes.width > 991 && this.sizes.width <= 1023) {
      this.model.scale.set(0.1, 0.1, 0.1)
      this.model.position.y = -visibleHeight * 0.25
      this.model.position.x = 0
    } else if (this.sizes.width > 480 && this.sizes.width <= 991) {
      this.model.scale.set(0.14, 0.14, 0.14)
      this.model.position.y = -visibleHeight * 0.2
      this.model.position.x = 0
    } else {
      this.model.scale.set(0.1, 0.1, 0.1)
      this.model.position.y = -visibleHeight * 0.2
      this.model.position.x = 0
    }
  }

  _setAnimation() {
    this.tls = {}
    /* 1 */
    const tl1 = (this.tls.tl1 = gsap.timeline({ repeat: -1 }))
    tl1.set(this.model.rotation, { y: -Math.PI * 0.03 })
    tl1.to(this.model.rotation, {
      x: -Math.PI * 2,
      ease: 'power4.inOut',
      duration: 3,
    })
    tl1.to(
      this.model.rotation,
      { y: Math.PI * 2, ease: 'power4.inOut', duration: 3 },
      '-=2.25'
    )
    tl1.to(
      this.model.rotation,
      { z: -Math.PI * 2, ease: 'power4.inOut', duration: 3 },
      '-=2.25'
    )

    tl1.eventCallback('onRepeat', () => {
      if (this.resources.items.vwModel) {
        gsap.to(this.model.position, {
          duration: 2,
          ease: 'back.inOut(1.7)',
          x: this.sizes.visibleWidthAtZDepth(this.camera.instance, 2.5),
          onComplete: () => {
            this.trigger('removed')
            tl1.pause().seek(1).kill()
            this.destroy()
          },
        })
      }
    })
  }

  resize() {
    this._updateModelParams()
  }

  update() {}

  destroy() {
    this.scene.remove(this.model)
    for (let key in this.tls) {
      this.tls[key].kill()
    }
    this.model.traverse((child) => {
      if (child instanceof THREE.Object3D) {
        if (child.material) child.material.dispose()
        if (child.geometry) child.geometry.dispose()
      }
    })
    this.model = null
    this.geek = null
  }
}
