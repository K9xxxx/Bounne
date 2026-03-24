/* =============================================================
   main.js
   Mobile slideshow: czysty JS + CSS transition (bez GSAP).
   CSS transitions działają na compositor thread przeglądarki —
   nie blokują się przy frame drops, nie mają problemów z
   loopowaniem GSAP repeat:-1 na mobile.
   Desktop slideshow: GSAP timeline (działa poprawnie).
   Nawigacja: GSAP (bez zmian).
============================================================= */

let mobNav            = document.querySelector(".mobile-nawigacja");
let iconNav           = document.querySelector(".icon-nawigacja");
let iconClose         = document.querySelector(".icon-close");
let desktopNav        = document.querySelector(".desktop-icon-nawigacja");
let desktopClose      = document.querySelector(".desktop-icon-close img");
let desktopNavContent = document.querySelector(".desktop-nawigacja-content");
let bannerDesktop     = document.querySelectorAll(".banner-img-desktop");

/* ── Nawigacja mobilna ─────────────────────────────────── */

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

/* ── Slideshow mobile — czysty JS + CSS transition ─────── */
/*
   CSS robi fade (transition: opacity 1s) — przeglądarka
   obsługuje to na compositor thread, niezależnie od JS.
   JS tylko zmienia opacity i kolejkuje następną zmianę.
   Brak GSAP = brak problemów z repeat, delay, overwrite.

   Timing (odpowiada desktopowi):
   - każdy slajd widoczny przez HOLD (3s)
   - przejście trwa FADE (1s — musi zgadzać się z CSS transition)
*/
(function initMobileSlideshow() {
    const slides = Array.from(document.querySelectorAll('.banner-img-mobile'));
    if (slides.length < 2) return;

    const HOLD_MS = 3000; // czas wyświetlania slajdu
    const FADE_MS = 1000; // czas przejścia — musi być = CSS transition-duration

    let current = 0;

    // Upewniamy się że stan startowy jest czysty
    slides.forEach((s, i) => { s.style.opacity = i === 0 ? '1' : '0'; });

    function advance() {
        const prev = current;
        current = (current + 1) % slides.length;

        slides[current].style.opacity = '1'; // następny fade in
        slides[prev].style.opacity    = '0'; // poprzedni fade out

        setTimeout(advance, HOLD_MS + FADE_MS);
    }

    setTimeout(advance, HOLD_MS); // pierwsze przejście po 3s
})();

/* ── Slideshow desktop — GSAP (działa poprawnie) ─────────
   Bezwzględne pozycje czasu eliminują konflikty przy repeat.

   Oś czasu (1 pętla = 12s):
   t=0–3  : img[0] widoczny
   t=3–4  : crossfade img[0]→img[1]
   t=4–7  : img[1] widoczny
   t=7–8  : crossfade img[1]→img[2]
   t=8–11 : img[2] widoczny
   t=11–12: crossfade img[2]→img[0]
*/
const tlDesktop = gsap.timeline({ repeat: -1 });
tlDesktop
    .to(bannerDesktop[1], { duration: 1, opacity: 1 }, 3)
    .to(bannerDesktop[0], { duration: 1, opacity: 0 }, 3)
    .to(bannerDesktop[2], { duration: 1, opacity: 1 }, 7)
    .to(bannerDesktop[1], { duration: 1, opacity: 0 }, 7)
    .to(bannerDesktop[0], { duration: 1, opacity: 1 }, 11)
    .to(bannerDesktop[2], { duration: 1, opacity: 0 }, 11);

/* ── Synchronizacja kropek hero z slideshow ─────────────── */
/*
   Timing: pętla = 12s. Zmiana slajdu co 4s (3s hold + 1s fade).
   Pierwsza zmiana po 3s (koniec hold img[0]).
*/
const dots = document.querySelectorAll(".hero-dot");
if (dots.length === 3) {
    let activeSlide = 0;

    function updateDots(i) {
        dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
    }

    setTimeout(() => {
        activeSlide = 1; updateDots(1);
        setInterval(() => {
            activeSlide = (activeSlide + 1) % 3;
            updateDots(activeSlide);
        }, 4000);
    }, 3000);
}

/* ── Nawigacja desktopowa — otwieranie ────────────────── */
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

/* ── Nawigacja desktopowa — zamykanie ──────────────────── */
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

/* ── ScrollMagic — chowanie "MENU" przy scroll ─────────── */
$(document).ready(function () {
    let controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({ triggerHook: "0", offset: 10, reverse: true })
        .setClassToggle('.toggle-p-menu', 'fade-out')
        .addTo(controller);
});