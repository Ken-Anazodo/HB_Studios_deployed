



// const loadPage = () =>{

// 	let artist = JSON.parse(localStorage.getItem("database"));
// console.log(artist)

// 	if (artist) {
// 		const displaySlider2 = () =>{	
// 			return`
			
// 					${artist.slider2Images.map((slider2Image, index) => {
// 						return `
// 					<div key="${index}" class="swiper-slide">
// 					<img
// 						src="${}"
// 						class="bwImg h-full w-full object-cover brightness-50"
// 						alt="left-down arrow"
// 					/>
// 					</div>
// 					`
// 					}).join("")
// 				}
// 			`
// 		}
// 		document.querySelector(".sliderDisplay").innerHTML = displaySlider2();
// 	}	
// }
// loadPage();