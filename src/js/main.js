import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => init());

const init = () => {

    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
        console.log(e);
    });

    console.log("test")

    gsap.fromTo("#circle-1, #circle-2", {
        opacity: 0.3
    },
        {
            opacity: 1,
            duration: 2,
            ease: "power3.inOut",
        }
    );

    gsap.fromTo(".right img", {
        opacity: 0,
        y: -40,
    },
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
        }
    );

    gsap.fromTo(".right .gradient-bar", {
        opacity: 0,
        x: 200,
    },
        {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
        }
    );

    // Load all individual animations for the circle text glow thingies
    let circleTextHeaders = document.getElementsByClassName("circle-text-header");
    for (let element of circleTextHeaders) {
        gsap.fromTo(element, {
            opacity: 0
        },
            {
                opacity: 1,
                duration: 3,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: element,
                    scrub: 5,
                    end: "top center",
                    // @ts-ignore
                    endTrigger: element.parentElement?.parentElement.querySelector('.anim-text'),
                    once: true,
                    // markers: true,
                }
            }
        );
    }

    //Calculate if the gradient bar is supposed to be left or right, then animate
    //from the correct side (200 for left & -200 for right side gradient bars)
    let gradientbars = document.getElementsByClassName("anim-gradient-bar")
    let counter = 0
    for (let element of gradientbars) {
        let isEven = counter % 2;

        gsap.fromTo(element, {
            opacity: 0,
            x: isEven ? "200" : "-200",
        },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: element,
                    scrub: 3,
                    end: "top center",
                    // @ts-ignore
                    endTrigger: element.parentElement?.parentElement.querySelector('.anim-text'),
                    once: true,
                    // markers: true,
                }
            }
        );
        counter++
    }

    // Animate h2 elements for the text headers
    let headerTexts = document.getElementsByClassName("anim-header-text")
    for (let element of headerTexts) {
        gsap.fromTo(element, {
            y: 20,
            opacity: 0,
        },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: element,
                    scrub: 3,
                    end: "top center",
                    // @ts-ignore
                    endTrigger: element.parentElement?.parentElement.querySelector('.anim-text'),
                    once: true,
                    // markers: true,
                }
            }
        );
    }

    //animate p tag elements
    let textTags = document.getElementsByClassName("anim-text")
    for (let element of textTags) {
        gsap.fromTo(element, {
            y: -10,
            opacity: 0,
        },
            {
                y: 0,
                opacity: 1,
                duration: 3,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: element,
                    scrub: 3,
                    end: "25% center",
                    endTrigger: element,
                    once: true,
                    // markers: true,
                }
            }
        );
    }
}