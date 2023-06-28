import * as THREE from 'three'
import Scene from '../Scene'
import Environment from '../World/Environment'
import Grid from './Grid'
import VW from './VW'
import Geek from './Geek'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import sources from '../sources'
import sources2 from '../sources2'
gsap.registerPlugin(ScrollTrigger)

export default class World {
  constructor() {
    this.app = new Scene()
    this.scene = this.app.scene
    this.renderer = this.app.renderer
    this.sizes = this.app.sizes
    this.camera = this.app.camera
    this.resources = this.app.resources
    // Listeners (load)
    if (this._isItNeed()) this._setObjects()
    this.grid = new Grid()
  }

  _isItNeed() {
    return this.sizes.width > 576
  }

  _setObjects() {
    this.firstLoads = this._firstLoads.bind(this)
    this.resources.on('ready1', this.firstLoads)
    this.resources._startLoading(sources)
    this.secondLoads = this._secondLoads.bind(this)
  }

  _firstLoads() {
    this.environment = this.environment || new Environment()
    this.geek = new Geek()
    this.activeTopElement = this.geek.model
    this._setScrollTriggers()
    this.resources.off('ready1', this.firstLoads)
    this.resources.on('ready2', this.secondLoads)
    this.resources._startLoading(sources2)
  }
  _secondLoads() {
    this.resources.off('ready2', this.secondLoads)
    if (!this._isItNeed()) return
    this.geek.on('removed', () => {
      this._removeScrollTrigger()
      this.geek = null
      this.vw = new VW()
      this.activeTopElement = this.vw.model
      this.vw.on('vwonthescreen', () => {
        this._setScrollTriggers()
        ScrollTrigger.refresh()
        ScrollTrigger.update()
      })
    })
  }

  _getAspectHeight() {
    return (
      this.sizes.visibleHeightAtZDepth(
        this.camera.instance,
        this.activeTopElement.position.z + 0.5
      ) / this.sizes.height
    )
  }
  _getAspectWidth() {
    return (
      this.sizes.visibleWidthAtZDepth(
        this.camera.instance,
        this.activeTopElement.position.z + 0.5
      ) / this.sizes.width
    )
  }

  _setScrollTriggers() {
    const tl_auto1 = gsap.timeline({
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: `${this.renderer.canvas.clientHeight / 2} center`,
        end: `+=${this.renderer.canvas.clientHeight}`,
        scrub: 1,
        // markers: true,
      },
    })
    tl_auto1.to(this.activeTopElement.position, {
      x: () => this._getAspectWidth() * this.sizes.width * 1.2,
    })
    if (this.activeTopElement !== this.geek?.model) {
      tl_auto1.to(
        this.activeTopElement.rotation,
        {
          y: `+=${(Math.PI / 180) * 90}`,
        },
        '<'
      )
    }
    tl_auto1.to(
      this.grid.material.uniforms.alpha,
      {
        value: 0,
      },
      '<'
    )
    tl_auto1.to(this.grid.material.uniforms.alpha, {
      value: 1,
      duration: 0.01,
    })
  }
  _removeScrollTrigger() {
    ScrollTrigger.getAll().forEach((trigger) => {
      trigger.kill(true)
    })
  }
  resize() {
    if (this.grid) this.grid.resize()

    if (this._isItNeed()) {
      if (!this.vw && !this.geek) {
        this.resources.loaderCount = 0
        this._setObjects()
      } else {
        if (this.geek) this.geek.resize()
        if (this.vw) this.vw.resize()
        this._removeScrollTrigger()
        this._setScrollTriggers()
        ScrollTrigger.refresh()
      }
    } else {
      this.resources.off('ready1', this.firstLoads)
      this.resources.off('ready2', this.firstLoads)
      if (this.vw) {
        this.vw.destroy()
        this.vw = null
      }
      if (this.geek) {
        this.geek.destroy()
        this.geek = null
      }
    }

    // if (this._isItNeed()) {
    //   if (!this.vw.model && !this.geek.model) {
    //     this._setObjects()
    //   } else {
    //     if (this.vw.model) this.vw.resize()
    //     if (this.geek.model) this.geek.resize()
    //     this._removeScrollTrigger()
    //     this._setScrollTriggers()
    //     ScrollTrigger.refresh()
    //   }
    // } else {
    //   if (this.vw.model) this.vw.destroy()
    //   if (this.geek.model) this.geek.destroy()
    //   this.resources.off('ready1', this.firstLoads)
    //   this.resources.off('ready2', this.firstLoads)
    //   this._removeScrollTrigger()
    // }
  }
  update() {
    if (this.grid) this.grid.update()
    if (this.vw) this.vw.update()
  }
  destroy() {
    if (this.vw) {
      this.vw.destroy()
    }
    if (this.geek) {
      this.geek.destroy()
    }
    if (this.grid) this.grid.destroy()
    this.resources.off('ready1', this.firstLoads)
    this.resources.off('ready2', this.firstLoads)
    this._removeScrollTrigger()
    if (this.environment) this.environment.destroy()
  }
}
