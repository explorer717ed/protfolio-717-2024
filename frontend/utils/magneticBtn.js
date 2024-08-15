import gsap from "gsap";

export default class MagneticButton {
  constructor() {
    this.buttons = [...document.querySelectorAll("[data-MagneticBtn]")];
    // this.buttons = elements;
    this.addEventListeners();
  }

  addEventListeners() {
    this.buttons.forEach(button => {
      button.addEventListener("mousemove", event => {
        const buttonRect = event.target.getBoundingClientRect();
        const center = {
          x: buttonRect.left + buttonRect.width / 2,
          y: buttonRect.top + buttonRect.height / 2
        };
        const offsetX = (event.clientX - center.x) * 0.5;
        const offsetY = (event.clientY - center.y) * 0.5;

        gsap.to(button, {
          x: offsetX,
          y: offsetY,
          rotation: offsetX * 0.1,
          duration: 0.3,
          force3D: true,
          scale: 1.1,
          ease: "Expo.easeOut",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          force3D: true,
          ease: "Elastic.easeOut",
        });
      });
    });
  }
}
