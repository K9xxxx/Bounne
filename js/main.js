let mobNav=document.querySelector(".mobile-nawigacja");
let iconNav=document.querySelector(".icon-nawigacja");
let iconClose=document.querySelector(".icon-close");
let desktopNav=document.querySelector(".desktop-icon-nawigacja");
let desktopClose=document.querySelector(".desktop-icon-close img");
let desktopNavContent=document.querySelector(".desktop-nawigacja-content");
let navContainerPMenu=document.querySelector(".nav-container-p-menu");
let bannerMobile=document.querySelectorAll(".banner-img-mobile");
let bannerDesktop=document.querySelectorAll(".banner-img-desktop");
let cardContainers=document.querySelectorAll(".card-container");


iconNav.addEventListener('click',()=>{
    const tl=new TimelineMax();
    tl.to(iconNav,.3,{opacity:0})
    tl.to(iconNav,0,{display:"none"})
    tl.to(mobNav,.3,{right:0},"=-0.3")
})
iconClose.addEventListener('click',()=>{
    const tl=new TimelineMax();
    tl.to(mobNav,.3,{right:"-300px"})
    tl.to(iconNav,0,{display:"inline"})
    tl.to(iconNav,.3,{opacity:1})
})

const tl=new TimelineMax({repeat:-1});
tl.to(bannerMobile[0],1,{opacity:1,delay:3})
tl.to(bannerMobile[1],1,{opacity:1},"=-1")
tl.to(bannerMobile[1],1,{opacity:0,delay:3})
tl.to(bannerMobile[2],1,{opacity:1},"=-1")
tl.to(bannerMobile[2],1,{opacity:0,delay:3})

const tld=new TimelineMax({repeat:-1});
tld.to(bannerDesktop[0],1,{opacity:1,delay:3})
tld.to(bannerDesktop[1],1,{opacity:1},"=-1")
tld.to(bannerDesktop[1],1,{opacity:0,delay:3})
tld.to(bannerDesktop[2],1,{opacity:1},"=-1")
tld.to(bannerDesktop[2],1,{opacity:0,delay:3})

desktopNav.addEventListener('click',()=>{
    const tl=new TimelineMax();
    tl.to(desktopNavContent,0,{marginTop:"0px"})
    tl.to(desktopNavContent,0,{paddingBottom:"60px"})
    tl.to(desktopNav,0,{display:"none"})
    tl.to(desktopClose,0,{display:"block"})
    tl.to(desktopNavContent,.3,{minHeight:"100vh"})
    tl.to(desktopClose,.2,{y:0,opacity:1},"=-0.3")
})
desktopNav.addEventListener('mouseenter',()=>{
    const tla=new TimelineMax();
    tla.to(desktopNav,.15,{y:5, opacity:0.5})
    tla.to(".desktop-icon-nawigacja p",.15,{textShadow:"0px 0px 15px red"},"=-.15")
    tla.to(desktopNav,.15,{y:0})
    tla.to(".desktop-icon-nawigacja p",.15,{textShadow:"none"},"=-.15")
})
desktopNav.addEventListener('mouseleave',()=>{
    const tla=new TimelineMax();
    tla.to(desktopNav,.15,{opacity:1})
})
desktopClose.addEventListener('click',()=>{
    const tl=new TimelineMax();
    tl.to(desktopNavContent,0,{padding:"0px"})
    tl.to(desktopNavContent,.3,{minHeight:"0px"})
    tl.to(desktopClose,.2,{y:-5,opacity:0},"=-0.3")
    tl.to(desktopClose,0,{display:"none"})
    tl.to(desktopNav,0,{display:"block"})
})
desktopClose.addEventListener('mouseenter',()=>{
    const tla=new TimelineMax();
    tla.to(desktopClose,.15,{y:-5})
    tla.to(desktopClose,.15,{y:0})
})

const tlScroll= new TimelineMax();
tlScroll.to(".shadow-container-top-right",.3,{opacity:1,delay:2})
tlScroll.to(".shadow-container-top-left",.3,{opacity:1},"=-0.3")
tlScroll.to(".shadow-container-bottom-right",.3,{opacity:1},"=-0.3")
tlScroll.to(".shadow-container-bottom-left",.3,{opacity:1},"=-0.3")

tlScroll.to(".shadow-container-top-right",0,{opacity:0})
tlScroll.to(".shadow-container-top-left",0,{opacity:0})
tlScroll.to(".shadow-container-bottom-right",0,{opacity:0})
tlScroll.to(".shadow-container-bottom-left",0,{opacity:0})

tlScroll.to(".shadow-container-top-right",.2,{opacity:1, delay:0.4})
tlScroll.to(".shadow-container-top-left",.2,{opacity:1},"=-0.2")
tlScroll.to(".shadow-container-bottom-right",.2,{opacity:1},"=-0.2")
tlScroll.to(".shadow-container-bottom-left",.2,{opacity:1},"=-0.2")

tlScroll.to(".shadow-container-top-right",.3,{opacity:0})
tlScroll.to(".shadow-container-top-left",.3,{opacity:0},"=-0.3")
tlScroll.to(".shadow-container-bottom-right",.3,{opacity:0},"=-0.3")
tlScroll.to(".shadow-container-bottom-left",.3,{opacity:0},"=-0.3")

tlScroll.to(".shadow-container-top-right",.5,{opacity:1})
tlScroll.to(".shadow-container-top-left",.5,{opacity:1},"=-0.5")
tlScroll.to(".shadow-container-bottom-right",.5,{opacity:1},"=-0.5")
tlScroll.to(".shadow-container-bottom-left",.5,{opacity:1},"=-0.5")

tlScroll.to(".shadow-container-top-right",.3,{opacity:0})
tlScroll.to(".shadow-container-top-left",.3,{opacity:0},"=-0.3")
tlScroll.to(".shadow-container-bottom-right",.3,{opacity:0},"=-0.3")
tlScroll.to(".shadow-container-bottom-left",.3,{opacity:0},"=-0.3")

tlScroll.to(".shadow-container-top-right",.6,{opacity:1})
tlScroll.to(".shadow-container-top-left",.6,{opacity:1},"=-0.6")
tlScroll.to(".shadow-container-bottom-right",.6,{opacity:1},"=-0.6")
tlScroll.to(".shadow-container-bottom-left",.6,{opacity:1},"=-0.6")

const tlShow=new TimelineMax()
tlShow.to(cardContainers[0],0.3,{opacity:1})
tlShow.to(cardContainers[1],0.3,{opacity:1})
tlShow.to(cardContainers[2],0.3,{opacity:1})
tlShow.to(cardContainers[3],0.3,{opacity:1})


//scrollmagic

$(document).ready(function(){
    let controller = new ScrollMagic.Controller();

    let navMenuP= new ScrollMagic.Scene({
        triggerHook:"0",
        offset:10,
        reverse:true
    })
    .setClassToggle('.toggle-p-menu', 'fade-out')
    .addIndicators()     
    .addTo(controller);

    let page1Sec2Content = new ScrollMagic.Scene({
        triggerElement:".secound-section",
        triggerHook:0.8,
        reverse:false
    })
    .setClassToggle('.secound-section', 'opacityContent')
    .addIndicators()
    .addTo(controller);

    let page1Sec3img = new ScrollMagic.Scene({
        triggerElement:".third-section",
        triggerHook:0.8,
        delay:1,
        reverse:false
    })
    .setClassToggle('.border-of-picture', 'opacityContent')
    .addIndicators()
    .addTo(controller);

    let page1Sec3background = new ScrollMagic.Scene({
        triggerElement:".third-section",
        triggerHook:0.8,
        reverse:false
    })
    .setClassToggle('.label-from-left', 'positionWidthContent')
    .addIndicators()
    .addTo(controller);

    let page1Sec3text1 = new ScrollMagic.Scene({
        triggerElement:".third-section",
        triggerHook:0.8,
        reverse:false
    })
    .setClassToggle('.grid-label.about', 'opacityContent')
    .addIndicators()
    .addTo(controller);

    let page1Sec3text2 = new ScrollMagic.Scene({
        triggerElement:".third-section",
        triggerHook:0.8,
        reverse:false
    })
    .setClassToggle('.grid-label.contact', 'opacityContent')
    .addIndicators()
    .addTo(controller);

    let page1Sec3anch1 = new ScrollMagic.Scene({
        triggerElement:".third-section",
        triggerHook:0.8,
        reverse:false
    })
    .setClassToggle('.anchor-container', 'opacityContent')
    .addIndicators()
    .addTo(controller);
    
    let page1Sec4Containers = new ScrollMagic.Scene({
        triggerElement:".fourth-section",
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlShow)
    .addIndicators()
    .addTo(controller);

    let page1Sec4shadowContainers = new ScrollMagic.Scene({
        triggerElement:".fourth-section",
        triggerHook:0.8,
        reverse:false
    })
    .setTween(tlScroll)
    .addIndicators()
    .addTo(controller);
    let page1Sec4Border = new ScrollMagic.Scene({
        triggerElement:".fourth-section",
        triggerHook:0.8,
        reverse:false
    })
    .setClassToggle('.all-card-border','positionWidthContent')
    .addIndicators()
    .addTo(controller);
})

