import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SlowMo, RoughEase } from 'gsap/EasePack'
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SlowMo)
gsap.registerPlugin(RoughEase)

export default ({ app }, inject) => {
  inject('gsap', gsap)
  inject('ScrollTrigger', ScrollTrigger)
}
