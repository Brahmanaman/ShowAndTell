
const mobileMenu = document.getElementById("mobile-menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const header = document.getElementById("header");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    document.body.classList.add("no-scroll");
    header.classList.remove("glass-navbar");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
    document.body.classList.remove("no-scroll");
    header.classList.add("glass-navbar");
});


function section1Animation() {

    tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#techSol",
            scroller: "body",
            start: "top 90%",
            end: "top -40%",
            scrub: 2,
        },
    });

    tl.from("#techSol .techSol-left img", {
        opacity: 0,
        x: -100,
        duration: 0.5,
    });

    tl.from(
        "#techSol .tecSol-right",
        {
            opacity: 0,
            x: 200,
            duration: 0.5,
        },
        "-=0.5"
    );
}

section1Animation()


function section2Animation() {
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#platforms",
            start: "top 60%",
        }
    });
    tl.from("#platforms h2", {
        opacity: 0,
        y: 100,
        duration: 0.6,
    });

    tl.from("#platforms .stepper", {
        opacity: 0,
        y: 100,
        duration: 0.5,
        delay: 0.3,
        stagger: 0.2,
    });
}

section2Animation();


function section3Animation() {

    tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#policies",
            scroller: "body",
            start: "top 90%",
            end: "top -40%",
            scrub: 2,
        },
    });

    tl.from("#policies .policies-left", {
        opacity: 0,
        x: -100,
        duration: 0.5,
    });

    tl.from(
        "#policies .policies-right",
        {
            opacity: 0,
            x: 200,
            duration: 0.5,
        },
        "-=0.5"
    );
}

section3Animation()


function section4Animation() {
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#works",
            start: "top 60%",
        }
    });
    tl.from("#works h2", {
        opacity: 0,
        x: 500,
        duration: 0.6,
    });
}

section4Animation()

