const left = document.querySelector(".left")
const right = document.querySelector(".right")
const center = document.querySelector(".center")
const centerTop = document.querySelector(".center-top")
const centerBottom = document.querySelector(".center-bottom")
const leftGap = document.querySelector(".left-gap")
const rightGap = document.querySelector(".right-gap")
const imageContainer = document.querySelector(".image-container")
const leftImages = document.querySelector(".left-images")
const rightImages = document.querySelector(".right-images")
const tim = document.getElementById("switch")


var tl = gsap.timeline()

left.addEventListener("mousemove",function(e){
    leftGap.style.height="120vh"
    leftImages.style.height="80vh"
    gsap.from(".left-images , img",{
        opacity:1,
        duration:1,
        scrub:2,
    })
    gsap.from("#one",{
        filter:"blur(4px)",
        scrub:2,
    })
    tl.to("#one",{
        filter:"blur(0px)",
    })
    gsap.from("#two",{
        filter:"blur(30px)", 
        scrub:2,
    })
    gsap.from("#three",{
        filter:"blur(10px)", 
        scrub:2,
    })
    tl.to("#three",{
        filter:"blur(8px)",
    })
    gsap.from("#four",{
        filter:"blur(10px)", 
        scrub:2,
    })
    tl.to("#four",{
        filter:"blur(8px)",
    })
})
left.addEventListener("mouseleave",function(e){
    leftGap.style.height="0vh"
    leftImages.style.height="0vh"
    gsap.to(".left-images , img",{
        opacity:0,
        duration:1,
        scrub:2,
    })
})
right.addEventListener("mousemove",function(e){
    rightGap.style.height="120vh"
    rightImages.style.height="80vh"
    gsap.from(".right-images , img",{
        opacity:1,
        duration:1,
        scrub:2,
    })
    gsap.from("#one",{
        filter:"blur(4px)",
        scrub:2,
    })
    tl.to("#one",{
        filter:"blur(0px)",
    })
    gsap.from("#two",{
        filter:"blur(30px)", 
        scrub:2,
    })
    gsap.from("#three",{
        filter:"blur(10px)", 
        scrub:2,
    })
    tl.to("#three",{
        filter:"blur(8px)",
    })
    gsap.from("#four",{
        filter:"blur(10px)", 
        scrub:2,
    })
    tl.to("#four",{
        filter:"blur(8px)",
    })
})
right.addEventListener("mouseleave",function(e){
    rightGap.style.height="0vh"
    rightImages.style.height="0vh"
    gsap.to(".right-images , img",{
        opacity:0,
        duration:1,
        scrub:2,
    })
})