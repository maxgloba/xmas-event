import * as THREE from 'three'
import gsap from 'gsap'
import EventEmitter from '../Utils/EventEmitter'
import Scene from '../Scene'

export default class VW extends EventEmitter {
  constructor() {
    super()

    this.app = new Scene()
    this.scene = this.app.scene
    this.renderer = this.app.renderer
    this.resources = this.app.resources
    this.mouse = this.app.mouse
    this.ticker = this.app.time
    this.sizes = this.app.sizes
    this.debug = this.app.debug
    this.camera = this.app.camera

    // Setup
    this.animationCounter = 0
    this.raycaster = new THREE.Raycaster()
    this.resource = this.resources.items.vwModel

    this._setModel()
    this._setAnimation()
    this._update = this.update.bind(this)
    gsap.ticker.add(this._update)
    window.addEventListener('click', () => {
      if (this.currentIntersect) {
        this.trigger('vwClicked')
      }
    })

    // Debug
    // if (this.debug.active) {
    //   this._setDebug()
    // }
  }
  _setModel() {
    this.model = this.resource.scene
    this.model.rotation.y = -(Math.PI / 180) * 60
    this.model.rotation.x = (Math.PI / 180) * 15
    this.model.position.z = 2.5
    this.modelMeshes = []
    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        this.modelMeshes.push(child)
      }
    })
    this._updateModelParams()
    this.scene.add(this.model)
    gsap.from(this.model.position, {
      x:
        this.sizes.visibleWidthAtZDepth(
          this.camera.instance,
          this.model.position.z
        ) / 2,
      onComplete: () => this.trigger('vwonthescreen'),
    })
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
      this.model.scale.set(0.11, 0.11, 0.11)
      this.model.position.y = -visibleHeight * 0.16
      this.model.position.x = visibleWidth * 0.25
    } else if (this.sizes.width > 1023 && this.sizes.width <= 1200) {
      this.model.scale.set(0.085, 0.085, 0.085)
      this.model.position.y = -visibleHeight * 0.32
      this.model.position.x = visibleWidth * 0.25
    } else if (this.sizes.width > 767 && this.sizes.width <= 1023) {
      this.model.scale.set(0.075, 0.075, 0.075)
      this.model.position.y = -visibleHeight * 0.35
      this.model.position.x = 0
    } else if (this.sizes.width > 480 && this.sizes.width <= 767) {
      this.model.scale.set(0.09, 0.09, 0.09)
      this.model.position.y = -visibleHeight * 0.35
      this.model.position.x = 0
    } else {
      this.model.scale.set(0.065, 0.065, 0.065)
      this.model.position.y = -visibleHeight * 0.3
      this.model.position.x = 0
    }
  }
  _setAnimation() {
    this.animation = {}
    this.animation.mixer = new THREE.AnimationMixer(this.model)
    this.animation.actions = []
    this.resource.animations.forEach((animation, i) => {
      this.animation.actions.push(
        this.animation.mixer.clipAction(animation).setLoop(THREE.LoopOnce, 1)
      )
      this.animation.actions[i].clampWhenFinished = true
    })
    this.animation.mixer.addEventListener(
      'finished',
      () => ++this.animationCounter
    )
    this._playAnimation()
  }
  _playAnimation() {
    this.animationCounter = 0
    this.animation.actions.forEach((animation) => {
      animation.reset().play()
    })
  }
  _setDebug() {
    this.debugFolder = this.debug.ui.addFolder('VW')
    const debugObject = {
      playAnimation: this._playAnimation.bind(this),
    }
    this.debugFolder.add(debugObject, 'playAnimation')
  }

  resize() {
    this._updateModelParams()
  }

  update() {
    // animation VW
    this.animation.mixer.update(this.ticker.delta * 0.0015)

    if (
      this.mouse.xP2 !== this.lastX &&
      this.mouse.yP2 !== this.lastY &&
      this.animationCounter === this.animation.actions.length
    ) {
      this.raycaster.setFromCamera(
        new THREE.Vector2(this.mouse.xP2, this.mouse.yP2),
        this.camera.instance
      )
      this.currentIntersect =
        this.raycaster.intersectObjects(this.modelMeshes, false)[0] || null
      if (this.currentIntersect && !this.prevIntersect) {
        this._playAnimation()
      }
      this.prevIntersect = this.currentIntersect
    }

    this.lastX = this.mouse.xP2
    this.lastY = this.mouse.yP2
  }

  destroy() {
    gsap.ticker.remove(this._update)
    this.scene.remove(this.model)
    this.model.traverse((child) => {
      if (child instanceof THREE.Object3D) {
        if (child.material) child.material.dispose()
        if (child.geometry) child.geometry.dispose()
      }
    })
    this.model = null
  }
}
