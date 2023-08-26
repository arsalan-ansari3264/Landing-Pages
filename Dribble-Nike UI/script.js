const circle = document.querySelector(".circle");
const frame = document.querySelector(".nav-center");

window.addEventListener("mousemove" , function(e){
    // circle.style.transform = `translate(${e.clientX-10}px , ${e.clientY-10}px)`;
    gsap.to(circle,{
        x: e.clientX,
        y: e.clientY,
        duration:.1,
        ease:Expo
    })
})
