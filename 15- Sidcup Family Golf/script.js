var cursor = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

const h4all= document.querySelectorAll("#nav h4");
const cards= document.querySelectorAll(".overlay");


document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x-10+ "px";
  cursor.style.top = dets.y-10 + "px";
  blur.style.top = dets.y-230 + "px";
  blur.style.left = dets.x-230+ "px";
})
h4all.forEach(function(element){
  element.addEventListener("mouseenter",function(e){
    cursor.style.scale = 4
    cursor.style.border = "0.5px solid #fff"
    cursor.style.backgroundColor = "transparent"
    element.style.color = "#000"
  })
  element.addEventListener("mouseleave",function(e){
    cursor.style.scale = 1
    cursor.style.border = "none"
    cursor.style.backgroundColor = "#94c11f"
    element.style.color = "#fff"
  })
});
cards.forEach(function(card){
  card.addEventListener("mouseenter",function(e){
    cursor.style.scale = 4
    cursor.style.border = "0.5px solid #fff"
    cursor.style.backgroundColor = "transparent"
  })
  card.addEventListener("mouseleave",function(e){
    cursor.style.scale = 1
    cursor.style.border = "none"
    cursor.style.backgroundColor = "#94c11f"
  })
});

gsap.to("#nav", {
  backgroundColor: "#000",
  color: "#fff",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -20%",
    end: "top -75%",
    scrub: 2,
  },
});

gsap.from(".page2-container",{
  y:90,
  opacity: 0,
  duration:2,
  stagger:.1,
  scrollTrigger:{
    trigger:".about-us",
    scroller:'body',
    // markers:true,
    start:"top 60%",
    end:"top 50%",
    scrub:2,
  }
})
gsap.from(".card",{
  scale:0.8,
  opacity: 0,
  duration:1,
  stagger:.1,
  scrollTrigger:{
    trigger:"#cardContainer",
    scroller:'body',
    // markers:true,
    start:"top 60%",
    end:"top 50%",
    scrub:2,
  }
})




VanillaTilt.init(document.querySelector(".your-element"), {
  max: 25,
  speed: 400,
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".your-element"));


// ================swiperrrrrrrrrrrrrrrrrrrrrrr===========

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});