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
