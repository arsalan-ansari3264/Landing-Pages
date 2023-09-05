var tl = gsap.timeline()
tl.from(".logo , .nav-links p,.btn,.nav-part2",{
    y:-100,
    delay:1,
    opacity:0,
    duration:1,
    stagger:.2
})
tl.from(".nav-border",{
   scale:0,
opacity:0,
    duration:1,
    stagger:.2
})
tl.from("#anim1",{
    x:-1000,
    opacity:0,
    duration:1,
    stagger:.3
})
tl.from(".center1-bottom",{
     scale:0,
     opacity:0,
    duration:1,
    stagger:.3
})
tl.from("#anim3 , icon i",{
    x:1000,
    opacity:0,
   duration:2,
   stagger:.3
})
tl.from("#anim2 , icon i",{
     scale:0,
     opacity:0,
    duration:1,
    stagger:.3
})


tl.from(".page2 .content",{
    scale:0,
    x:500,
    opacity:0,
    duration:1,
    rotate:360,
    stagger:.3,
    scrollTrigger:{
        trigger:".page2 .content",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:3,
    }
})

tl.from("#anim4",{
    x:2000,
    opacity:0,
    duration:1,
    stagger:.4,
    scrollTrigger:{
        trigger:".page2 .content",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:2,
    }
})
