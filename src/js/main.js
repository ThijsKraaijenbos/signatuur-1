import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => init());

const init = () => {
    console.log("test")

    // onderzoeken anims
    gsap.fromTo(".onderzoeken-header h2", {
        y: 20,
        opacity: 0,
    },
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".onderzoeken-header h2",
                scrub: 3,
                end: "top center",
                endTrigger: ".onderzoeken-text",
                once: true,
            }
        }
    );

    gsap.fromTo("#onderzoeken-gradient-bar", {
        opacity: 0,
        x: -200,
    },
        {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: "#onderzoeken-gradient-bar",
                scrub: 3,
                end: "top center",
                endTrigger: ".onderzoeken-text",
                once: true,
            }
        }
    );

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


    // Ontwerpen anims
    gsap.fromTo(".ontwerpen-header h2", {
        y: 20,
        opacity: 0,
    },
        {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".ontwerpen-header h2",
                scrub: 3,
                end: "top center",
                endTrigger: ".ontwerpen-text",
                once: true,
            }
        }
    );

    gsap.fromTo("#ontwerpen-gradient-bar", {
        opacity: 0,
        x: "200",
    },
        {
            x: "0",
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: "#ontwerpen-gradient-bar",
                scrub: 3,
                end: "top center",
                endTrigger: ".ontwerpen-text",
                once: true,
            }
        }
    );

    gsap.fromTo(".ontwerpen-text", {
        y: -10,
        opacity: 0,
    },
        {
            y: 0,
            opacity: 1,
            duration: 3,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".ontwerpen-text",
                scrub: 3,
                end: "top center",
                endTrigger: ".ontwerpen-text",
                once: true,
            }
        }
    );
}