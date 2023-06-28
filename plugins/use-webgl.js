import {
  Clock,
  Scene,
  Group,
  Vector3,
  WebGLRenderer,
  sRGBEncoding,
  PerspectiveCamera,
  ReinhardToneMapping,
} from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
let webgl

export default ({ app }, inject) => {
  class WebGL {
    constructor(app) {
      //app data
      this.viewport = app.$viewport
      this.events = app.$events
      // clock
      this.clock = new Clock()
      // scene
      this.scene = new Scene()
      this.DOMScene = new Group()
      this.scene.add(this.DOMScene)
      // camera
      this.startCamPos = new Vector3(0, 0, 0)
      this.camera = new PerspectiveCamera(70, this.viewport.ratio, 1, 150)
      this.camera.position.set(...this.startCamPos)

      // renderer
      this.renderer = new WebGLRenderer({
        alpha: true,
        powerPreference: 'high-performance',
        antialias: false,
        stencil: false,
        depth: false,
      })
      // this.renderer.setClearColor('#0d0311')
      this.renderer.toneMapping = ReinhardToneMapping
      this.renderer.toneMappingExposure = 2
      this.renderer.outputEncoding = sRGBEncoding
      this.renderer.shadowMap.autoUpdate = false
      this.renderer.shadowMap.needsUpdate = true
      this.renderer.shadowMap.enabled = true
      this.renderer.info.autoReset = false
      this.renderer.physicallyCorrectLights = true
      this.renderer.setSize(this.viewport.width, this.viewport.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      // stats
      if (process.env.NODE_ENV === 'development') {
        this.stats = new Stats()
        document.body.appendChild(this.stats.dom)
        this.events.on('frame:statsBegin', this.stats.begin)
        this.events.on('frame:statsEnd', this.stats.end)
      }

      // events
      this.events.on('viewport:resize', this.onWindowResize)

      // raf
      this.events.on('frame:frame', this.loop)
    }

    loop = ({ time, deltaTime, frame }) => {
      this.renderer.render(this.scene, this.camera)
      this.renderer.renderLists.dispose()
    }

    viewsize(toObject) {
      let width, height
      if (this.camera.type === 'PerspectiveCamera') {
        const distance = toObject
          ? this.startCamPos.clone().sub(toObject.clone()).z
          : this.startCamPos
        const vFov = (this.camera.fov * Math.PI) / 180
        height = 2 * Math.tan(vFov / 2) * distance
        width = height * this.viewport.ratio
      } else if (this.camera.type === 'OrthographicCamera') {
        width = this.viewport.width
        height = this.viewport.height
      }

      return { width, height }
    }

    onWindowResize = () => {
      if (this.camera.type === 'OrthographicCamera') {
        this.camera.left = this.viewport.width / -2
        this.camera.right = this.viewport.width / 2
        this.camera.top = this.viewport.height / 2
        this.camera.bottom = this.viewport.height / -2
      }
      this.renderer.setSize(this.viewport.width, this.viewport.height)
      this.camera.aspect = this.viewport.ratio
      this.camera.updateProjectionMatrix()
    }

    destroy() {
      this.events.off('frame:statsBegin', this.stats.begin)
      this.events.off('frame:statsEnd', this.stats.end)
      this.events.off('frame:frame', this.loop)
    }
  }

  const useWebGL = () => {
    return webgl || (webgl = new WebGL(app))
  }

  inject('useWebGl', useWebGL)
}
