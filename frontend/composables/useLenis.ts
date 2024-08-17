import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useLenis = (el?: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger) 

  let config: any = {
    duration: .5,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true
  }

  if(el) config.wrapper = el
  
  let lenis: Lenis;

  const _raf = (time: number) => {
    lenis.raf(time);
    ScrollTrigger.update()
    requestAnimationFrame(_raf);
  }


  lenis = new Lenis(config)
  requestAnimationFrame(_raf);

  onUnmounted(()=>{
    if(lenis) lenis.destroy()
  })

  return { lenis }
}