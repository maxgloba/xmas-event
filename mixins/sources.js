import { CubeTextureLoader } from 'three'
import { GLTFLoader } from '~/node_modules/three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from '~/node_modules/three/examples/jsm/loaders/DRACOLoader'
import { TextureLoader } from 'three'

export default {
  data() {
    return {
      loaders: {},
      loadedSources: {},
      loaded: 0,
      toLoad: 0,
    }
  },
  mounted() {
    this.toLoad = this.source.length
    // Set loaders
    this.setLoaders()
    // Load source
    this.loadSources()
  },
  methods: {
    setLoaders() {
      // DRACO
      this.dracoLoader = new DRACOLoader()
      this.dracoLoader.setDecoderPath('./metaverse_3d/webgl/draco/')
      // GLTF
      this.loaders.gltfLoader = new GLTFLoader()
      this.loaders.gltfLoader.setDRACOLoader(this.dracoLoader)
      // CubeTexture
      this.loaders.cubeTextureLoader = new CubeTextureLoader()
      // Img
      this.loaders.textureLoader = new TextureLoader()
    },
    loadSources() {
      for (const key in this.source) {
        switch (this.source[key].type) {
          case 'cubeTexture':
            this.loaders.cubeTextureLoader.load(
              this.source[key].path,
              this.sourceLoaded.bind(null, this.source[key])
            )
            break
          case 'gltf':
            this.loaders.gltfLoader.load(
              this.source[key].path,
              this.sourceLoaded.bind(null, this.source[key])
            )
            break
          case 'texture':
            this.loaders.textureLoader.load(
              this.source[key].path,
              this.sourceLoaded.bind(null, this.source[key])
            )
            break
        }
      }
    },
    sourceLoaded(source, file) {
      file.scene ? (file.scene.name = source.name) : (file.name = source.name)

      this.loadedSources[source.name] = file
      ++this.loaded
      if (this.loaded === this.toLoad) this.init()
    },
  },
  beforeDestroy() {},
}
