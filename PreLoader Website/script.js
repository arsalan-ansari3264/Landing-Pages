const images = document.querySelectorAll(".hero img");
images.forEach(function(elem){
    console.log(elem);
    elem.addEventListener("mousemove", function(e){
       elem.style.transform= "translateY(-20px) rotateY(20deg) rotateX(-20deg) " 
    })
    elem.addEventListener("mouseleave", function(e){
        
        setTimeout(() => {
            // elem.style.transform= "translateY(10px)"
            elem.style.transform= "translateY(0px) rotateY(20deg) rotateX(20deg) " 
            
        }, 100);
        setTimeout(() => {
            elem.style.transform= "translateY(0px)"
            // elem.style.transform= "translateY(-10px) rotateY(20deg) rotateX(20deg) " 
            
        }, 500);

    })
})


function loader(){
    let counterElement = document.querySelector(".counter")
    let currentValue = 0;
     
    function update(){
        if(currentValue === 100){
            return
        }

        currentValue += Math.floor(Math.random()*10)+1

        if(currentValue >100){
            currentValue = 100;
        }

        counterElement.textContent = currentValue
        let delay = Math.floor(Math.random()*200)+50

        setTimeout(update, delay);
    }
    update()
}
loader()
var tl = gsap.timeline()

tl.to(".counter", 0.25, {
    delay:3.5,
    opacity:0,
    zIndex:"0",
})
gsap.to(".bar", 1.5, {
    delay:3.5,
    opacity:0,
    height:0,
    stagger:{
        amount:0.5,
    },
    ease:"power4.inOut",
})

tl.to(".overlay", {
    zIndex:"0",
})
tl.from(".header .h1",{
    y:-700,
    opacity:0,
    stagger:{
        amount:0.5,
    },
})
tl.from(".hero img",{
    opacity:0,
})
tl.to(".hero img",{
    opacity:1,
    stagger:{
        amount:0.5,
    },
})