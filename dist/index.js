// import  { displayNav } from './nav.js';
// let navDisplayed = displayNav();
// document.getElementById("showNav").innerHTML = navDisplayed;


gsap.registerPlugin(ScrollTrigger);


// NAVIGATION (Display On Scroll Up)
const showAnim = gsap
  .from(".nav-sec-container", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});

// CIRCLE ROTATE TEXT

// Instantiate `CircleType` with an HTML element.
// Small Screen
// const circleType = new CircleType(document.getElementById("myElement"));
// circleType.radius();
// circleType.forceHeight();
// circleType.forceWidth(true);
// circleType.refresh();

// Large Screen
// const circleType1 = new CircleType(document.getElementById("myElement1"));
// circleType1.radius();
// circleType1.forceHeight();
// circleType1.forceWidth(true);
// circleType1.refresh();

// Circle Text in body
// const circleType2 = new CircleType(document.getElementById("myElement2"));
// circleType2.radius(100);
// circleType2.forceHeight();
// circleType2.forceWidth(true);
// circleType2.refresh();

// OPEN AND CLOSE NAV
let menu = document.getElementById("menu-wrapper");
let logoAndCloseMenu = document.getElementById("logoAndClose");



let tl = gsap.timeline()


const closeMenu = () => {
	tl.fromTo(menu, {top: '0'}, {top: '-150vh', duration: 0.7, ease: "power4.in"},)
	  .fromTo(".gNav", {y: 0}, {y: '15vw', duration: 0.5, ease: "power4.in", transition: 1 }, "1")
    .fromTo(".navReveal", {height: "0%"}, {height: "100%", duration: 2, ease: 'power2.in', transition: 1}, "1")
    // menubtn.style.display = "block";
	logoAndCloseMenu.style.display = "none";
}

const openMenu = () => {
	tl.fromTo(menu, {top: '-150vh'}, {top: '0', duration: 0.5, ease: "power4.in"})
	  .fromTo(".gNav", {y: '15vw'}, {y: 0, duration: 0.5, ease: "power4.in", transition: 1 }, "1")
    .fromTo(".navReveal", {height: "100%"}, {height: "0%", duration: 1, ease: 'power4.in'}, "1")
    .fromTo(".navImgg", {scale: 1.3}, {scale: 1, duration: 2.5,}, "2") 
	  .fromTo(".navImgg1", {scale: 1.3}, {scale: 1, duration: 2.5,}, "2") 
    .fromTo(".hr", {width: "0"}, {width: '100%', duration: 2, ease: "power4.out"}, "2")  
    // menubtn.style.display = "none";
    logoAndCloseMenu.style.display = "flex";
}

const navOpen = document.getElementById('nav-toggler')
const navRemove = document.getElementById('navClosee')
navOpen.addEventListener('click', (e) =>  openMenu())
navRemove.addEventListener('click', (e) =>  closeMenu())

// LOADER ANIMATION AND COUNTER
const startLoader = () => {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  const updateCounter = () => {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  };

  updateCounter();
};

startLoader();

// BARS INTRO EFFECT AFTER COUNTER

// COUNTER
gsap.to(".counter", 0.25, { delay: 3.6, opacity: 0 });

// BARS
gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  top: "-200vw",
  stagger: {
    amount: 5,
  },
  ease: "power4 inOut",
});

// COUNTER BACKGROUND
gsap.to(".counter", 0.25, { delay: 10.5, top: "-300vw" });

// OVERLAY BACKGROUND
gsap.to(".overlay", 1.5, { delay: 10.5, top: "-300vw" });

// CURSOR ANIMATION
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  console.log(x, y);

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
let navConnect = Array.from(document.querySelectorAll(".navConnect"));
let circleTexts = Array.from(document.querySelectorAll(".circle"));
// let menuCursor = document.querySelector(".menuCursor");
let closeDiv = document.querySelector(".close-icon");
let closeCursor = document.querySelector(".closeCursor");

// Nav Narration Display
let homeIcon = document.querySelector(".iconNav");
let homeDisplay = document.querySelector(".hmeCont");
let hbNav = document.querySelector(".hbNav");
let welcomeToHb = document.querySelector(".welcomeCont");
let menuIcon = document.querySelector(".menu-icon");
let navImgDisplay = document.querySelector(".navContt");

// Home Icon
homeIcon.addEventListener("mouseover", () => {
  gsap.fromTo(
    ".hmeCont",
    { y: "1.5vw" },
    {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".hmeCont",
      },
    }
  );
  homeDisplay.style.display = "flex";
});

homeIcon.addEventListener("mouseleave", () => {
  homeDisplay.style.display = "none";
});

// HB Studios Icon
hbNav.addEventListener("mouseover", () => {
  gsap.fromTo(
    ".welcomeCont",
    { y: "3vw" },
    {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".welcomeCont",
      },
    }
  );
  welcomeToHb.style.display = "flex";
});

hbNav.addEventListener("mouseleave", () => {
  welcomeToHb.style.display = "none";
});

// MENU ICON
menuIcon.addEventListener("mouseover", () => {
  gsap.fromTo(
    ".navContt",
    { y: "1.5vw" },
    {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".hmeCont",
      },
    }
  );
  navImgDisplay.style.display = "flex";
});

menuIcon.addEventListener("mouseleave", () => {
  navImgDisplay.style.display = "none";
});


// CURSOR ANIMATION
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.style.display = "none";
  });

  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.style.display = "block";
  });
});

navConnect.forEach((navConnect) => {
  navConnect.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.style.display = "none";
  });

  navConnect.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.style.display = "block";
  });
});

circleTexts.forEach((circleText) => {
  circleText.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.classList.add("grow");
  });

  circleText.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.classList.remove("grow");
  });
});

// GIANT LOGO ROTATION
gsap.fromTo(
  ".giantLogo",
  { x: "30vw" },
  {
    x: 0,
    rotation: 180,
    duration: 30,
    scrollTrigger: {
      trigger: ".giantLogo",
      scrub: true,
    },
  },
  "0.5"
);

// Navigation Images

let navImg1 = document.querySelector(".navImage-display1");
let navImg2 = document.querySelector(".navImage-display2");
let navImg3 = document.querySelector(".navImage-display3");
let navChild1 = document.querySelector(".navChild1");
let navChild2 = document.querySelector(".navChild2");
let navChild3 = document.querySelector(".navChild3");

let mouseX;
let mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, 0.3, { x: mouseX, y: mouseY });
});





// Navigation Images

// Define the breakpoint
const breakpoint = window.matchMedia("(min-width: 1280px)");



/////////////////////// About/////////////////////////////////////
// Event listener Functions for navChild1
function onMouseEnter1() {
    gsap.to(navImg1, 1, {
        scale: 1,
        opacity: 1,
        top: "-5vw",
        left: "-5vw",
        rotate: 0,
        ease: Elastic.easeOut.config(1, 0.3)
    });
    navImg1.style.display = "block";
}

function onMouseMove1(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.to(navImg1, 1, {
        x: mouseX,
        y: mouseY
    });
}

function onMouseLeave1() {
    gsap.to(navImg1, 0.2, {
        scale: 0,
        opacity: 0,
        top: "0.1vw",
        left: "-0.5vw",
        rotate: 45
    });
    navImg1.style.display = "none";
}



//////////////////// Service///////////////////////////////

// Event listener functions for navChild1
function onMouseEnter2() {
    gsap.to(navImg2, 1, {
        scale: 1,
        opacity: 1,
        top: "-5vw",
        left: "-5vw",
        rotate: 0,
        ease: Elastic.easeOut.config(1, 0.3)
    });

    navImg2.style.display = "block";
}

function onMouseMove2(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.to(navImg2, 1, {
        x: mouseX,
        y: mouseY
    });
}

function onMouseLeave2() {
    gsap.to(navImg2, 0.2, {
        scale: 0,
        opacity: 0,
        top: "0.1vw",
        left: "-0.5vw",
        rotate: 45
    });

    navImg2.style.display = "none";
}




//////////////////////////////////// Contacts///////////////////////////
// Functions for navChild3
function onMouseEnter3() {
    gsap.to(navImg3, 1, {
        scale: 1,
        opacity: 1,
        top: "-5vw",
        left: "-5vw",
        rotate: 0,
        ease: Elastic.easeOut.config(1, 0.3)
    });
    navImg3.style.display = "block";
}

function onMouseMove3(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.to(navImg3, 1, {
        x: mouseX,
        y: mouseY
    });
}

function onMouseLeave3() {
    gsap.to(navImg3, 0.2, {
        scale: 0,
        opacity: 0,
        top: "0.1vw",
        left: "-0.5vw",
        rotate: 45
    });
    navImg3.style.display = "none";
}




// Function to add event listeners
function addEventListeners() {
	navChild1.addEventListener("mouseenter", onMouseEnter1);
    navChild1.addEventListener("mousemove", onMouseMove1);
    navChild1.addEventListener("mouseleave", onMouseLeave1);

    navChild2.addEventListener("mouseenter", onMouseEnter2);
    navChild2.addEventListener("mousemove", onMouseMove2);
    navChild2.addEventListener("mouseleave", onMouseLeave2);

	navChild3.addEventListener("mouseenter", onMouseEnter3);
    navChild3.addEventListener("mousemove", onMouseMove3);
    navChild3.addEventListener("mouseleave", onMouseLeave3);
}

// Function to remove event listeners
function removeEventListeners() {
	navChild1.removeEventListener("mouseenter", onMouseEnter1);
    navChild1.removeEventListener("mousemove", onMouseMove1);
    navChild1.removeEventListener("mouseleave", onMouseLeave1);


    navChild2.removeEventListener("mouseenter", onMouseEnter2);
    navChild2.removeEventListener("mousemove", onMouseMove2);
    navChild2.removeEventListener("mouseleave", onMouseLeave2);

	navChild3.removeEventListener("mouseenter", onMouseEnter3);
    navChild3.removeEventListener("mousemove", onMouseMove3);
    navChild3.removeEventListener("mouseleave", onMouseLeave3);
}



// Function to handle breakpoints
function handleBreakpointChange() {
    if (breakpoint.matches) {
        // Add event listeners if the screen width is above the breakpoint
        addEventListeners();
    } else {
        // Remove event listeners if the screen width is below the breakpoint
        removeEventListeners();
    }
}


// Initial setup
handleBreakpointChange();

// Re-run breakpoint handling whenever the viewport size changes
breakpoint.addEventListener("change", handleBreakpointChange);







    // SCROLL
    gsap.to(".scrollCont", {opacity: 0, duration: 1, transition: 0.5,

    scrollTrigger:{
      trigger: ".scrollCont",
      start: "5px 45%",
      end: "top 35%",
      scrub: true,
      }});




    // We Transcend
    gsap.fromTo(".we-transcend", {opacity: 0}, {opacity: 1, transition: 1,
      scrollTrigger:{
        trigger: ".we-transcend",
        start: "10px 100%",
        toggleActions: 'play reverse play reverse',
        }}); 


        // NewsLetter
        // document.addEventListener("DOMContentLoaded", (event) => {
        //   gsap.fromTo(".loadCont1", {x: '-20vw'}, {x: 0, duration: 0.5, ease: "power4.in", transition: 1 })
        //   gsap.fromTo(".sentCont1", {x: '30vw'}, {x: 0, duration: 0.5, ease: "power4.in", transition: 1 })
        // })



    // Half a decade experience as independent creative professionals. (Section)
      const tl4 = gsap.timeline({
        defaults: {
            duration: 1
        }
    });
    
    // Add animations to the timeline
    tl4.fromTo(".decadeHeadP", {
        y: 300, // Initial position below
        opacity: 0 // Initial opacity
    }, {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 5 // Duration of animation
    }).fromTo(".subBody", {
        y: 300, // Initial position above
        opacity: 0 // Initial opacity
    }, {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 5 // Duration of animation
    }, "-=0.5"); // Delay the start of the subBody animation
    
    // Define ScrollTriggers for the animations
    ScrollTrigger.create({
        trigger: ".decadeCont", // The container element
        start: "top bottom", // Start animation when top of container reaches center of viewport
        end: "top 10%", // End animation when bottom of container reaches center of viewport
        animation: tl4, // Use the defined timeline for animation
        scrub: true // Smoothly move through animation as user scrolls
    });
     









      // Reveal Images
          const revealElement = (cloak, element, height) => {
          gsap.fromTo(cloak, {height: height}, {height: "0%", duration: 8, ease: 'power4.out', 
          scrollTrigger:{
          trigger: element,
          start: "10px 100%",
          toggleActions: 'play reverse play reverse',
          }})
        }


          revealElement(".impactReveal", ".impactImg", "30%");
          revealElement(".impactReveal1", ".impactImg1", "30%");
          revealElement(".stylAndMusReveal1", ".stylAndMusImg1", "30%");
          revealElement(".stylAndMusReveal2", ".stylAndMusImg2", "30%");
          revealElement(".revoluReveal", ".revoluImg", "25%");
          revealElement(".bnxnReveal", ".bnxn", "35%");
          revealElement(".bnxnReveal1", ".bnxn1", "60%");
          revealElement(".bnxnReveal2", ".bnxn2", "80%");
          revealElement(".masqReveal", ".masq", "0%");


        


        // Parallax Effect
        const parallaxEffect = (image, parallaxContainer, parallaxImg) => {
          const section = parallaxContainer; // Select the section element

          const bg = parallaxImg; // Select the background element within the section

          // Set the path to your image file relative to the project directory
          const imagePath = image;

          // Set background image for the section
          bg.style.backgroundImage = `url(${imagePath})`;

          // Function to calculate the ratio between element's height and window's height
          const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

          // Define the animation
          gsap.fromTo(bg, {
              backgroundPosition: () => imagePath? `50% ${-window.innerHeight * 0.5}px` : `50% 0px`
          }, {
              backgroundPosition: () => `50% ${window.innerHeight * 0.03}px`, // Adjust the multiplier for parallax effect
              ease: "none",
              scrollTrigger: {
                  trigger: section,
                  start: () => imagePath? "top bottom" : "top top", 
                  end: "bottom top",
                  scrub: true,
                  invalidateOnRefresh: true, // to make it responsive
                  duration: 5 // Adjust duration for slower effect (e.g., 2 seconds)
              }
          });
        }

        let parallaxCont1 =  document.querySelector(".parallax-container");
        let parallaxImg1 =  document.querySelector(".parallax-img");
        let parallaxCont2 =  document.querySelector(".parallax-containerr");
        let parallaxImg2 =  document.querySelector(".parallax-imgg");
  
    
        parallaxEffect("/assets/img/dedayo1.PNG", parallaxCont1, parallaxImg1 );
        parallaxEffect("/assets/img/dedayo.jpg", parallaxCont2, parallaxImg2 );
       


        

        // Parallax Effect 1
        const parallaxEffect1 = () => {
          // Function to calculate the ratio between element's height and window's height
          const getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

          // Loop through each section
          document.querySelectorAll(".parallax-container1").forEach((section, i) => {
          const bg = section.querySelector(".parallax-img1"); // Select the background element within the section

          // Set the path to your image file relative to the project directory
          const imagePaths = [       
            "https://res.cloudinary.com/dkcbvgmcr/image/upload/w_auto,q_auto,f_auto/v1714340912/images/yhpar6jbessm11hbyczi.jpg",
            "/assets/img/dedayo3.jpg",
          ]

          // Set background image for the section
          bg.style.backgroundImage = `url(${imagePaths[i % imagePaths.length]})`; 
                
          // Define the animation
          gsap.fromTo(bg, {
              backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
          }, {
              backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
              ease: "none",
              scrollTrigger: {
                  trigger: section,
                  start: "top bottom", 
                  end: "bottom top",
                  scrub: true,
                  invalidateOnRefresh: true, // to make it responsive
                  // duration: 5, // Adjust duration for slower effect (e.g., 2 seconds)
                  // delay: i * 25 // Add a delay based on the index of the section (e.g., 0.5 seconds per section)
              }
          });
      });
    }

    parallaxEffect1();
    




      // Animate Headers
      const animateHeaders = (headerId, subHeader, start) => {
      
        document.addEventListener("DOMContentLoaded", (event) => {
          gsap.registerPlugin(CSSRulePlugin);
        
          const text = new SplitType(headerId, { types: 'lines' })
          var rule = CSSRulePlugin.getRule(".line:after");

          gsap.fromTo(subHeader, {opacity: 0, y: "-5vw"}, {opacity: 1, duration: 1, y: 0,  
              scrollTrigger:{
              trigger: subHeader,
              start: start,
            }})
            
          gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1,  
            scrollTrigger:{
            trigger: subHeader,
            start: start,
          }});
        });
   
      }

      animateHeaders('#createLegends', '.cLegends', "5px 100%")
      animateHeaders('#stratCollab', '.sCollab', "5px 85%");
      animateHeaders('#empArtists', '.eArtists', "5px 100%");
      animateHeaders('#ourVision', '.ourVsn', "5px 100%");
      animateHeaders('#theStyling', '.theStyle', "5px 85%");
      animateHeaders('#unforgettable', '.unforget', "5px 100%");
      animateHeaders('#selectedWorks', '.selectWorks', "5px 100%");




      // CREDIT ANSWER Animation

      const  creditAnim = () => {
        const text1Parent = new SplitType(".credit-ans", { types: 'lines', lineClass: 'lineParent'});
        const text1Child = new SplitType(".credit-ans", { types: 'lines', lineClass: 'lineChildren'});

        gsap.fromTo(text1Child.lines, {y: '11vw', opacity: 0}, {duration: 1, y: 0, opacity: 1, ease: 'power4.easeIn',  
        scrollTrigger: {
            trigger: '.creditCont',
            start: "10px bottom",
            toggleActions: 'play reverse play reverse'
        }}, '0.2')
      }
      

    
      creditAnim("#credAnsHb");
      