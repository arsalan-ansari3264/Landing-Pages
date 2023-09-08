const elem = document.querySelectorAll(".elem")
const main = document.querySelectorAll("main")

// elem.forEach(function(el){
//     el.addEventListener("mousemove", function (dets) {
//         var diff = dets.clientY - el.getBoundingClientRect().top
//         el.childNodes[3].style.transform = `translate(${dets.clientX - 75}px,${diff}px) `;

//     })

//     el.addEventListener("mouseenter", function (e) {
//         el.childNodes[3].style.opacity = 1;
//         el.childNodes[3].style.visiblity = "visible";
//     })
//     el.addEventListener("mouseleave", function (e) {
//         el.childNodes[3].style.opacity = 0;
//         el.childNodes[3].style.visiblity = "hidden";
//     })
// })

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });