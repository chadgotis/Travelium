window.addEventListener("load", () => {
    const load = document.querySelector(".loader");
    load.classList += " hidden";

    gsap.from(".hero-right", {duration: 1, x: 300, opacity: 0});
    gsap.from(".watermark", {duration: 2, x: -300, opacity: 0});
  });