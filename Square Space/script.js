var tl = gsap.timeline()

tl.from(".logo ,.anim1 ,.btn",{
    y:-100,
    duration:1,
    delay:1,
    stagger:.2,
    opacity:0,
})
tl.from(".center h1",{
    y:300,
    transform:"rotateX(180deg)",
    opacity:0,
    duration:1,
    stagger:0.5
})
tl.from(".anim-img",{
    x:200,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from(".social",{
    x:-200,
    duration:1,
    opacity:0,
    stagger:0.3
})
