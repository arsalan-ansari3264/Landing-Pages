var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#part1 ",
        start:"50% 50%",
        end:"150% 50%",
        // markers:true,
        scrub:true,
        pin:true,
    }
})
tl.to(".top-content",{
    rotateX:"90deg",
    opacity:0,
    duration:4,
    translateY:"-20%"

},"same")
tl.to(".bottom-content",{
    rotateX:"-90deg",
    opacity:0,
    duration:4,
    translateY:"40%"
},"same")
tl.to(".image-container",{
   height:"100%",
   width:"100%",
    duration:20,
    translateY:"-0%"
},"same")

const cursor = document.querySelector("#cursor");
const overlay = document.querySelector(".overlay");
window.addEventListener("mousemove",function(e){
    console.log(e.clientX,e.clientY);
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    overlay.style.top = e.clientY-15 + "px";
    overlay.style.left = e.clientX + "px";
})