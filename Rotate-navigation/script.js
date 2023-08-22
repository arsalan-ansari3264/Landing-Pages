var active = 3;
var mediaQuery = window.matchMedia("(max-width: 540px)");

var minicircles = document.querySelectorAll('.miniCircle');
var second = document.querySelectorAll('.second');

gsap.to(minicircles[active-1],{
    opacity: .6
})
gsap.to(second[active-1],{
    opacity: 1
})

minicircles.forEach(function(val , index){
    
    val.addEventListener('click', function(){
        // console.log(index);
        gsap.to(".circle",{
            rotate:(3-(index +1))*10,
            ease: Expo.easeInOut,
            duration:1
        })
        if (mediaQuery.matches) {
             gsap.to(".circle",{
                rotate:(3-(index +1))*20,
                ease: Expo.easeInOut,
                duration:1 
            })
            
        }

        
        greyOut()
        gsap.to(this,{
            opacity : .6
        })
        gsap.to(second[index],{
            opacity :1,
            ease: Expo.easeInOut,
            duration:1
        })
    })
})

function greyOut(){
     
    gsap.to(minicircles , {
        opacity: 0.1
    })
    gsap.to(second,{
        opacity : .4
    })
}

gsap.to(".circle" ,{
    rotate:0,
    ease: Expo.easeInOut,
    duration:2
})

disableScroll()
function disableScroll() {
    // Get the current page scroll position in the vertical direction
   scrollTop = document.documentElement.scrollTop;
        
        
// Get the current page scroll position in the horizontal direction 

 scrollLeft = document.documentElement.scrollLeft;
   
   
  // if any scroll is attempted,
 // set this to the previous value
 window.onscroll = function() {
  window.scrollTo(scrollLeft, scrollTop);
 };
}
