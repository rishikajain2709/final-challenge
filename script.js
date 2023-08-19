
function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()





var tl=gsap.timeline();


tl.from("#nav>#center",{
    opacity:0,
    y:-100,
    duration:1,
delay:1.5,

    // duration:1,
    // dealy:1

})
tl.to("#page1>img",{
  
    
    width:"100%",
    height:"110%",
    duration:.5,
// delay:1.5,
    pin:true
    // duration:1,
    // dealy:1

})
tl.from("#nav-1>#i,#nav-2>#b",{
  
    
    y:-60,
    opacity:0,
    stagger:.5,
    duration:.5,
    pin:true
// delay:1.5,
    // duration:1,
    // dealy:1

})



tl.to("#center",{
  scrollTrigger:{
      trigger:`#page2`,
      start:`top 90%`,
      end:`top 85%`,
    pin:true,
      scroller:`#main`,
      scrub:`2`,

  },
  top:"6vh",
  stagger:.5,
  scale:.6,

 
})
tl.to("#nav",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top 85%`,
    end:`top 80%`,
  pin:true,
    scroller:`#main`,
    scrub:`2`,

},
    backgroundColor:"#fff",
  y:"-100%"
},"same")

gsap.to("#page1>img",{
  scrollTrigger:{
      trigger:`#page2`,
      scroller:`#main`,
      start:`top 45%`,
      end:`top 20%`,
      pin:true,
      scrub:2,

  },
  filter:"brighness(2)",
  opacity:.4

  // filter:"blur(1.5)",

  // filter:blur(50%)
  // stagger:.5,
  // scale:.5,
 
})


var clutter = "";

document.querySelector("#center1>h1").textContent.split("").forEach(function(dets){
  clutter += `<span>${dets}</span>`

  document.querySelector("#center1>h1").innerHTML = clutter;
})



gsap.to("#center1>h1>span",{
  scrollTrigger:{
      trigger:`#center1>h1>span`,
      start:`top 60%`,
      end:`top -80%`,
    
      scroller:`#main`,
      scrub:`2`,
  },
  stagger:.5,
  color:"#E3E3C4",
})

gsap.to("#q",{
  scrollTrigger:{
      trigger:`#bottom`,
      start:`top 60%`,
      end:`top -100%`,
    
      scroller:`#main`,
      scrub:`4`,
  },
  yoyo:"true",
 translateX:"-250px",
})
gsap.to("#r",{
  scrollTrigger:{
      trigger:`#bottom`,
      start:`top 60%`,
      end:`top -100%`,
    
      scroller:`#main`,
      scrub:`4`,
  },
  yoyo:"true",
 translateX:"-280px",
})

var clutter1= "";

document.querySelector("#page3>h1").textContent.split("").forEach(function(dets){
  clutter1 += `<span>${dets}</span>`

  document.querySelector("#page3>h1").innerHTML = clutter1;
})


var tl2=gsap.timeline();
gsap.to("#page3>h1>span",{
  scrollTrigger:{
      trigger:`#page3>h1>span`,
      start:`top 98%`,
      end:`top 20%`,
    
      scroller:`#main`,
      scrub:`2`,
      //
  },
  stagger:.5,
  color:"black",
})
tl2.from("#left>h3",{
  scrollTrigger:{
      trigger:`#page3>h1>span`,
      start:`top 20%`,
      end:`top -10%`,
    
      scroller:`#main`,
      scrub:`5`,
     
  },
  duration:1,

  opacity:0,
  y:"30px",
  stagger:.5,
  
},"same")
tl2.from("#one",{
  scrollTrigger:{
      trigger:`#page3>h1>span`,
      start:`top 20%`,
      end:`top -10%`,
    
      scroller:`#main`,
      scrub:`5`,
  },
  duration:1,

  opacity:0,
  y:"30px",
  stagger:.5,
  
})
tl2.from("#left1>h2",{
  scrollTrigger:{
    trigger:`#page3>h1>span`,
    start:`top 12%`,
    end:`top -10%`,
  
    scroller:`#main`,
    scrub:`5`,
   
},
// delay:1,
duration:1,

  opacity:0,
  y:"30px",
  stagger:.5,
})
tl2.from("#left>img",{
  scrollTrigger:{
    trigger:`#page3>h1>span`,
    start:`top 8%`,
    end:`top -10%`,
  
    scroller:`#main`,
    scrub:`5`,
    
},
duration:1,

  opacity:0,
  y:"30px",
  stagger:.5,
},"same2")
tl2.from("#right>#two",{
  scrollTrigger:{
    trigger:`#page3>h1>span`,
    start:`top 8%`,
    end:`top -10%`,
  
    scroller:`#main`,
    scrub:`5`,
   
},
duration:1,
  opacity:0,
  y:"30px",
  stagger:.5,
},"same2")