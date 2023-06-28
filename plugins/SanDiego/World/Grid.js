import * as THREE from 'three'
import Scene from '../Scene'
import gridVertexShader from '~/static/SanDiego/shaders/grid/vertex.glsl'
import gridFragmentShader from '~/static/SanDiego/shaders/grid/fragment.glsl'
import gsap from 'gsap'

export default class Grid {
  constructor() {
    this.app = new Scene()
    this.scene = this.app.scene
    this.time = this.app.time
    this.camera = this.app.camera
    this.sizes = this.app.sizes
    this.mouse = this.app.mouse
    this.mouseSmooth = {
      x: this.app.mouse.xP,
      y: this.app.mouse.yP,
    }
    this.debounceTimer = null
    this.grid = new THREE.Vector2(15, 15)

    // Setup
    this.mouse.on('mousemoved', this._mousemoved.bind(this))

    this._setGeometry()
    this._setMaterial()
    this._setMesh()
    this._updateParams()
  }
  _setGeometry() {
    this.geometry = new THREE.PlaneBufferGeometry(
      1,
      2,
      this.grid.x,
      this.grid.y
    )
  }
  _setMaterial() {
    this.material = new THREE.RawShaderMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
      vertexShader: gridVertexShader,
      fragmentShader: gridFragmentShader,
      uniforms: {
        aspect: { value: 1 },
        mousePositions: { value: new THREE.Vector2(0, 0) },
        grid: { value: this.grid },
        fogColor: { value: new THREE.Vector3(0.05, 0.0, 0.05) },
        fogNear: { value: 2.5 },
        fogFar: { value: 3.5 },
        fog: { value: true },
        alpha: {value: 1}
      },
    })
  }
  _setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    // Rotations
    this.mesh.rotateX((-Math.PI / 180) * 75)
    this.scene.add(this.mesh)
  }
  _updateParams() {
    // scales
    this.mesh.scale.x = this.sizes.visibleWidthAtZDepth(this.camera.instance)
    this.mesh.scale.y = this.sizes.visibleHeightAtZDepth(this.camera.instance)
    // Update size
    const box = new THREE.Box3().setFromObject(this.mesh)
    this.meshSizes = {
      x: box.max.x - box.min.x,
      y: box.max.y - box.min.y,
    }
    // Positions
    this.mesh.position.z =
      (this.meshSizes.y / 2) * Math.tan(Math.abs(this.mesh.rotation.x))
    this.mesh.position.y =
      -this.meshSizes.y / 2 -
      this.sizes.visibleHeightAtZDepth(this.camera.instance) / 2 +
      this.meshSizes.y
  }
  _mousemoved() {
    clearTimeout(this.debounceTimer)
    this.debounceTimer = setTimeout(() => {
      gsap.to(this.mouseSmooth, {
        x: this.mouse.xP,
        y: this.mouse.yP,
        duration: 1.5,
        overwrite: true,
        ease: 'power4.out',
        onUpdate: () => {
          this.material.uniforms.mousePositions.value = new THREE.Vector2(
            this.mouseSmooth.x,
            this.mouseSmooth.y / this.meshSizes.y - 0.25
          )
        },
      })
    }, 4)
  }

  resize() {
    this._updateParams()
  }
  update(){

  }
  destroy(){
    this.scene.remove(this.grid);
    this.geometry.dispose()
    this.material.dispose()
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.mesh = null
  }
}
