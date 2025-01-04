import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => init());

const init = () => {
    console.log("test")

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
        gsap.fromTo(".onderzoeken-text", {
            y: -10,
            opacity: 0,
        },
            {
                y: 0,
                opacity: 1,
                duration: 3,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: ".onderzoeken-text",
                    scrub: 3,
                    end: "top center",
                    endTrigger: ".onderzoeken-text",
                    once: true,
                }
            }
        );
    }
}