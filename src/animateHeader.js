// Animate Headers
// const animateHeaders = (headerId, subHeader, start) => {
      
// 	document.addEventListener("DOMContentLoaded", (event) => {
// 	  gsap.registerPlugin(CSSRulePlugin);
	
// 	  const text = new SplitType(headerId, { types: 'lines' })
// 	  var rule = CSSRulePlugin.getRule(".line:after");

// 	  gsap.fromTo(subHeader, {opacity: 0, y: "-5vw"}, {opacity: 1, duration: 1, y: 0,  
// 		  scrollTrigger:{
// 		  trigger: subHeader,
// 		  start: start,
// 		}})
		
// 	  gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1,  
// 		scrollTrigger:{
// 		trigger: subHeader,
// 		start: start,
// 	  }});
// 	});

//   }

//   animateHeaders()