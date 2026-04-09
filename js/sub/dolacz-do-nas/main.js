

let mobNav            = document.querySelector(".mobile-nawigacja");
let iconNav           = document.querySelector(".icon-nawigacja");
let iconClose         = document.querySelector(".icon-close");
let desktopNav        = document.querySelector(".desktop-icon-nawigacja");
let desktopClose      = document.querySelector(".desktop-icon-close img");
let desktopNavContent = document.querySelector(".desktop-nawigacja-content");
let bannerDesktop     = document.querySelectorAll(".banner-img-desktop");

/* Nawigacja mobilna */

iconNav.addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.to(iconNav,  { duration: 0.3, opacity: 0 })
    tl.set(iconNav, { display: "none" })
    tl.to(mobNav,   { duration: 0.3, right: 0 }, "-=0.3")
});

iconClose.addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.to(mobNav,   { duration: 0.3, right: "-300px" })
    tl.set(iconNav, { display: "inline" })
    tl.to(iconNav,  { duration: 0.3, opacity: 1 })
});



/* Nawigacja desktopowa — otwieranie */
desktopNav.addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.set(desktopNavContent, { marginTop: "0px", paddingBottom: "60px" })
    tl.set(desktopNav,        { display: "none" })
    tl.set(desktopClose,      { display: "block" })
    tl.to(desktopNavContent,  { duration: 0.3, minHeight: "100vh" })
    tl.to(desktopClose,       { duration: 0.2, y: 0, opacity: 1 }, "-=0.3")
});

desktopNav.addEventListener('mouseenter', () => {
    const tla = gsap.timeline();
    tla.to(desktopNav,                   { duration: 0.15, y: 5, opacity: 0.5 })
    tla.to(".desktop-icon-nawigacja p",  { duration: 0.15, textShadow: "0px 0px 15px red" }, "-=0.15")
    tla.to(desktopNav,                   { duration: 0.15, y: 0 })
    tla.to(".desktop-icon-nawigacja p",  { duration: 0.15, textShadow: "none" }, "-=0.15")
});

desktopNav.addEventListener('mouseleave', () => {
    gsap.to(desktopNav, { duration: 0.15, opacity: 1 });
});

/*  Nawigacja desktopowa — zamykanie*/
desktopClose.addEventListener('click', () => {
    const tl = gsap.timeline();
    tl.set(desktopNavContent, { padding: "0px" })
    tl.to(desktopNavContent,  { duration: 0.3, minHeight: "0px" })
    tl.to(desktopClose,       { duration: 0.2, y: -5, opacity: 0 }, "-=0.3")
    tl.set(desktopClose,      { display: "none" })
    tl.set(desktopNav,        { display: "block" })
});

desktopClose.addEventListener('mouseenter', () => {
    const tla = gsap.timeline();
    tla.to(desktopClose, { duration: 0.15, y: -5 })
    tla.to(desktopClose, { duration: 0.15, y: 0 })
});

/*  ScrollMagic — chowanie "MENU" przy scroll */
$(document).ready(function () {
    let controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({ triggerHook: "0", offset: 10, reverse: true })
        .setClassToggle('.toggle-p-menu', 'fade-out')
        .addTo(controller);
});