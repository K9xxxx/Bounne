

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

let paragraphJs=document.querySelectorAll(".paragraph-js");
let imageContainers=document.querySelectorAll(".image-container");
let personContainer=document.querySelectorAll(".person-container-full");
let personContainerRight=document.querySelectorAll(".person-container-full.right");
let personName=document.querySelectorAll(".person-name");
let personInfo=document.querySelectorAll(".person-info");


const tlStartUp= new TimelineMax();
const tlOpacity= new TimelineMax();
const tlRotateRightOne= new TimelineMax();
const tlRotateRight= new TimelineMax();
const tlRotateLeftOne= new TimelineMax();
const tlRotateLeft= new TimelineMax();
const tlnameXopacityOne= new TimelineMax();
const tlnameXopacityTwo= new TimelineMax();
const tlnameXopacityThree= new TimelineMax();
const tlnameXopacityFour= new TimelineMax();
const tlNameParagraph1=new TimelineMax();
const tlNameParagraph2=new TimelineMax();
const tlNameParagraph3=new TimelineMax();
const tlNameParagraph4=new TimelineMax();

tlStartUp.to(paragraphJs[0],0,{opacity:0})
tlStartUp.to(paragraphJs[1],0,{opacity:0})
tlStartUp.to(paragraphJs[2],0,{opacity:0})
tlStartUp.to(paragraphJs[3],0,{opacity:0})
tlStartUp.to(imageContainers[0],0,{opacity:0,rotate:"-15deg"})
tlStartUp.to(imageContainers[1],0,{opacity:0,rotate:"15deg"})
tlStartUp.to(imageContainers[2],0,{opacity:0,rotate:"-15deg"})
tlStartUp.to(imageContainers[3],0,{opacity:0,rotate:"15deg"})
tlStartUp.to(personName[0],0,{opacity:0,x:30})
tlStartUp.to(personName[1],0,{opacity:0,x:-30})
tlStartUp.to(personName[2],0,{opacity:0,x:80})
tlStartUp.to(personName[3],0,{opacity:0,x:-30})
tlStartUp.to(personInfo[0],0,{opacity:0})
tlStartUp.to(personInfo[1],0,{opacity:0})
tlStartUp.to(personInfo[2],0,{opacity:0})
tlStartUp.to(personInfo[3],0,{opacity:0})


tlOpacity.to(paragraphJs[0],0.4,{opacity:1})
tlOpacity.to(paragraphJs[1],0.4,{opacity:1})
tlOpacity.to(paragraphJs[2],0.4,{opacity:1})
tlOpacity.to(paragraphJs[3],0.4,{opacity:1})

tlRotateRightOne.to(imageContainers[0],1,{rotate:"0deg", opacity:1})
tlRotateRight.to(imageContainers[2],1,{rotate:"0deg", opacity:1})
tlRotateLeftOne.to(imageContainers[1],1,{rotate:"0deg", opacity:1})
tlRotateLeft.to(imageContainers[3],1,{rotate:"0deg", opacity:1})

tlnameXopacityOne.to(personName[0],0.4,{opacity:1,x:0})
tlnameXopacityTwo.to(personName[1],0.4,{opacity:1,x:0})
tlnameXopacityThree.to(personName[2],0.4,{opacity:1,x:0})
tlnameXopacityFour.to(personName[3],0.4,{opacity:1,x:0})

tlNameParagraph1.to(personInfo[0],1.5,{opacity:1})
tlNameParagraph2.to(personInfo[1],1.5,{opacity:1})
tlNameParagraph3.to(personInfo[2],1.5,{opacity:1})
tlNameParagraph4.to(personInfo[3],1.5,{opacity:1})


$(document).ready(function(){
    let controller = new ScrollMagic.Controller();

    let paragraphOpacity=new ScrollMagic.Scene({
        triggerElement:'.first-section-paragraph',
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlOpacity)
    .addTo(controller);

    let imgContainerOne=new ScrollMagic.Scene({
        triggerElement:personContainer[0],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlRotateRightOne)
    .addTo(controller);

    let imgContainerTwo=new ScrollMagic.Scene({
        triggerElement:personContainer[2],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlRotateRight)
    .addTo(controller);



    let imgContainerThree=new ScrollMagic.Scene({
        triggerElement:personContainerRight[0],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlRotateLeftOne)
    .addTo(controller);

    let imgContainerFour=new ScrollMagic.Scene({
        triggerElement:personContainerRight[1],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlRotateLeft)
    .addTo(controller);


    let PersonName1=new ScrollMagic.Scene({
        triggerElement:personContainer[0],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlnameXopacityOne)
    .addTo(controller);

    let PersonName2=new ScrollMagic.Scene({
        triggerElement:personContainerRight[0],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlnameXopacityTwo)
    .addTo(controller);

    let PersonName3=new ScrollMagic.Scene({
        triggerElement:personContainer[2],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlnameXopacityThree)
    .addTo(controller);

    let PersonName4=new ScrollMagic.Scene({
        triggerElement:personContainerRight[1],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlnameXopacityFour)
    .addTo(controller);

    let PersonInfo1=new ScrollMagic.Scene({
        triggerElement:personContainer[0],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlNameParagraph1)
    .addTo(controller);

    let PersonInfo2=new ScrollMagic.Scene({
        triggerElement:personContainerRight[0],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlNameParagraph2)
    .addTo(controller);

    let PersonInfo3=new ScrollMagic.Scene({
        triggerElement:personContainer[2],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlNameParagraph3)
    .addTo(controller);

    let PersonInfo4=new ScrollMagic.Scene({
        triggerElement:personContainerRight[1],
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlNameParagraph4)
    .addTo(controller);
})