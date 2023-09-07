const img = document.querySelector(".img img");
const cursor = document.querySelector(".cursor");
const left = document.querySelector(" .left");
const right = document.querySelector(".right");



left.addEventListener("mousemove", function (e) {
  
    img.style.transform = `rotateX(10deg) rotateY(-40deg)`;

})
right.addEventListener("mousemove", function (e) {
    img.style.transform = `rotateX(10deg) rotateY(40deg)`;

})
left.addEventListener("mouseleave", function (e) {
    setTimeout(() => {

        img.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }, 500);
})
right.addEventListener("mouseleave", function (e) {

    setTimeout(() => {

        img.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }, 500);
})
window.addEventListener("mousemove", function (e) {
    cursor.style.top = e.clientY + "px"
    cursor.style.left = e.clientX + "px"
    // img.style.left = e.clientX  + "px"
})
