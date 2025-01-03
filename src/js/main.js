import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { ScrollSmoother } from "gsap/all";

window.addEventListener("load", () => init());

const init = () => {
    console.log("test")
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
    })

}