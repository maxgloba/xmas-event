import * as THREE from 'three'
import { GLTFLoader } from '~/node_modules/three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from '~/node_modules/three/examples/jsm/loaders/DRACOLoader'
import EventEmitter from './EventEmitter'

export default class Resources extends EventEmitter {
  constructor() {
    super()
    // Setup
    this.items = {}
    this.toLoad = 0
    this.loaded = 0
    this.loaderCount = 0

    this._setLoaders()
  }

  _setLoaders() {
    this.loaders = {}
    this.loaders.DRACOLoader = new DRACOLoader()
    this.loaders.DRACOLoader.setDecoderPath('./SanDiego/draco/gltf/')
    this.loaders.DRACOLoader.setDecoderConfig({ type: 'js' })
    this.loaders.gltfLoader = new GLTFLoader().setDRACOLoader(
      this.loaders.DRACOLoader
    )
    this.loaders.textureLoader = new THREE.TextureLoader()
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
  }
  _startLoading(sources) {
    this.toLoad = sources.length
    sources.forEach((source) => {
      switch (source.type) {
        case 'gltfModel':
          this.loaders.gltfLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
        case 'cubeTexture':
          this.loaders.cubeTextureLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
        case 'texture':
          this.loaders.textureLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
      }
    })
  }
  _sourceLoaded(source, file) {
    this.items[source.name] = file
    ++this.loaded
    if (this.loaded === this.toLoad) {
      ++this.loaderCount
      this.loaded = 0
      this.trigger(`ready${this.loaderCount}`, this.loaderCount)
    }
  }
}
