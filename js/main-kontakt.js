let infoContainer=document.querySelectorAll('.info-container-info')
let contactContainer=document.querySelector('.contact-container-info')

const tlStartUp=new TimelineMax();

const tlLeftInfo=new TimelineMax();

tlStartUp.to(contactContainer,0,{scaleY:0});
tlStartUp.to(infoContainer[0],0,{opacity:0})
tlStartUp.to(infoContainer[1],0,{opacity:0})
tlStartUp.to(infoContainer[2],0,{opacity:0})
tlStartUp.to(infoContainer[3],0,{opacity:0})
tlStartUp.to(infoContainer[4],0,{opacity:0})


tlLeftInfo.to(contactContainer, 0.5, {scaleY:1})
tlLeftInfo.to(infoContainer[0],0.3,{opacity:1})
tlLeftInfo.to(infoContainer[1],0.3,{opacity:1})
tlLeftInfo.to(infoContainer[2],0.3,{opacity:1})
tlLeftInfo.to(infoContainer[3],0.3,{opacity:1})
tlLeftInfo.to(infoContainer[4],0.3,{opacity:1})

$(document).ready(function(){
    let controller = new ScrollMagic.Controller();

    let Paragraphs= new ScrollMagic.Scene({
        triggerElement:".secound-section",
        triggerHook:0.15,
        reverse:false
    })
    .setTween(tlLeftInfo)
    .addTo(controller);

})
