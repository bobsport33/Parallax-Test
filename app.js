bones = document.querySelectorAll(".bone");

bones.forEach((bone) => {
    bone.style.top = `${Math.floor(Math.random() * 2000)}px`;
    bone.style.left = `${Math.floor(Math.random() * 1000)}px`;
    let size = Math.floor(Math.random() * 300);
    bone.style.height = `${size}px`;
    bone.style.width = `${size}px`;
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".bone", {
    scrollTrigger: {
        scrub: true,
    },

    y: () => -ScrollTrigger.maxScroll(window) * 0.2,
});
