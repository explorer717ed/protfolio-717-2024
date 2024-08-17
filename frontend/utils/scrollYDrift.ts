import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { map } from "./index";

export default class ScrollYDrift {
  _DOM: {el: HTMLElement, wrapper: HTMLElement|Document};
  _firstRAFCycle = true;
  _requestId = undefined as undefined|number;
  _bounds = { el: undefined as DOMRect|undefined, wrapper: undefined as DOMRect|undefined }

  constructor(el: HTMLElement, wrapper = document){
    gsap.registerPlugin(ScrollTrigger) 
    this._DOM = { el, wrapper }
    
    this._calcBounds()
    this._initEvent()
  }

  _calcBounds() {
    this._bounds = {
      el: this._DOM.el.getBoundingClientRect(),
      wrapper: this._DOM.wrapper === document 
        ? { height: window.innerHeight, scrollTop: window.scrollY }
        : this._DOM.wrapper.getBoundingClientRect()
    };
  }

  _initEvent(){
    this._firstRAFCycle = true;
    this._calcBounds()
    this._DOM.wrapper.addEventListener('scroll', () => this._onScroll())
  }

  _onScroll(){
    
    let scrollTop = this._DOM.wrapper.scrollTop || window.scrollY
    let scrollBottom = scrollTop + this._bounds.wrapper.height
    let elYTop = this._bounds.el?.y
    let elYCenter = elYTop + (this._bounds.el?.height/2)
    let elYBottom = elYTop + this._bounds.el?.height

    if(scrollBottom < elYTop) return
    if(scrollTop > elYBottom) return

    let driftY = ((elYCenter - scrollTop) / (scrollBottom - scrollTop) - 0.5)
    
    gsap.to(this._DOM.el, {
      y: Math.sin(driftY*Math.PI) * this._bounds.wrapper.height * 0.08,
    })
  }
}