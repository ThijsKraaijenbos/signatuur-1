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

    //load progress bar & orb
    // gsap.fromTo(".progress-bar", {
    //     opacity: 0
    // },
    //     {
    //         opacity: 0.1,
    //         duration: 3,
    //         ease: "power3.inOut",
    //         scrollTrigger: {
    //             trigger: ".circle-text-header",
    //             scrub: 5,
    //             end: "top center",
    //             // @ts-ignore
    //             endTrigger: ".circle-text-header",
    //             once: true,
    //             // markers: true,
    //         }
    //     }
    // );

    // gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".circle-text-header", // The progress-bar acts as the container
    //         start: "top center",         // When the progress-bar's top reaches the top of the viewport
    //         end: "bottom bottom",     // When the progress-bar's bottom reaches the bottom of the viewport           // Smooth scrubbing
    //         // markers: true             // Enable markers for debugging (remove for production)
    //     }
    // })
    //     .from(".progress-orb", {
    //         opacity: 0,
    //         duration: 0.2,
    //         ease: "power3.inOut"
    //     })
    //     .to(".progress-orb", {
    //         opacity: 0.3,
    //         duration: 3,
    //         ease: "power3.inOut",
    //     })
    //     .to(".progress-orb", {
    //         ease: "power3.inOut",
    //         scrollTrigger: {
    //             trigger: ".progress-bar", // The progress-bar acts as the container
    //             start: "top center",         // When the progress-bar's top reaches the top of the viewport
    //             end: "bottom center",     // When the progress-bar's bottom reaches the bottom of the viewport
    //             scrub: 3,              // Smooth scrubbing
    //             pin: ".progress-orb",     // Pin the progress-orb to the viewport center
    //             pinSpacing: false,        // Avoid extra space being added
    //             // markers: true,
    //         }
    //     });


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

    //Animate images
    gsap.fromTo('.book-img', {
        y: -10,
        opacity: 0,
    },
        {
            y: 0,
            opacity: 1,
            duration: 3,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".book-img",
                start: "20% bottom",
                end: "20% center",
                scrub: 3,
                once: true,
                // markers: true,
            }
        }
    );
}