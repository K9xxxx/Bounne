let borderVertical = document.querySelector('.border-offer');

const tlBorder= new TimelineMax();
const tlParagraphs= new TimelineMax();

const tlStartUp= new TimelineMax();

tlStartUp.to(borderVertical,0,{scale:"0"})
tlStartUp.to(".bigger-p",0,{opacity:0})
tlStartUp.to(".lower-p",0,{opacity:0})


tlParagraphs.to(".bigger-p",0.5,{opacity:1})
tlParagraphs.to(".lower-p",0.5,{opacity:1})

tlBorder.to(borderVertical,1.5,{scale:"1"})


$(document).ready(function(){
    let controller = new ScrollMagic.Controller();

    let Paragraphs= new ScrollMagic.Scene({
        triggerElement:".secound-section",
        triggerHook:0.75,
        reverse:false
    })
    .setTween(tlParagraphs)
    .addIndicators()
    .addTo(controller);

    let vertBorder = new ScrollMagic.Scene({
        triggerElement:".offer-all-container",
        triggerHook:0.5,
        reverse:false
    })
    .setTween(tlBorder)
    .addIndicators()
    .addTo(controller);

})