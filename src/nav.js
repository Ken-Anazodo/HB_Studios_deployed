export let displayNav = () => {

	
	// OPEN AND CLOSE NAV
	let menu = document.getElementById("menu-wrapper");
	let logoAndCloseMenu = document.getElementById("logoAndClose");
	// let openMenu = document.getElementById('nav-toggler');
	// let closeMenu = document.getElementById("closeNav")

	const closeMenu = () => {
	menu.style.top = "-150vh";
	logoAndCloseMenu.style.display = "none";
	};

	const openMenu = () => {
	menu.style.top = "0";
	logoAndCloseMenu.style.display = "flex";
	};

	// closeMenu.addEventListener( 'click', (e) => {
	// 	menu.style.top = "-150vh";
	// 	logoAndCloseMenu.style.display = "none";
	// })


	// openMenu.addEventListener( 'click', (e) => {
	// 	menu.style.top = "0";
	// 	logoAndCloseMenu.style.display = "flex";
	// })

	return`
	<section0 class="relative overflow-hidden h-screen w-full">
	<div class="nav-sec-container fixed top-0 left-0 z-20 w-full h-[8vh] xl:h-[11vh] bg-blac">
		<div class="absolute top-0 left-0 h-full w-full bg-black bg-opacity-[30%] backdrop-blur-sm"></div>
		<div class="absolute nav-sec flex justify-between items-center px-[3vw] text-stone-200 top-0 left-0 w-full h-full">
			
			<a href="/public/index.html">
				<div class="navConnect iconNav h-[13vw] w-[12vw] sm:h-[12vw] sm:w-[11vw] md:h-[9vw] md:w-[8vw] xl:h-[7vw] xl:w-[6vw] flex items-center">
					<img src="public/assets/img/roll.png" class="h-full w-full object-contain" alt=”Image”>
				</div>
			</a>

			<div class="navConnect hbNav text-center md:text-[1.7vw] md:leading-[2.1vw] xl:text-[1.1vw] xl:leading-[1.2vw] lg:pt-[1vw] xl:pt-0">
				<div class="[display:none] md:[display:block]">
					<div class="stu hb ">HEADB0RN</div>
					<div class="stu md:text-[2.5vw] xl:text-[1.6vw] ">STUDIOS</div>
				</div>
				<div class="hBs md:[display:none] text-[4.5vw] leading-[4.5vw] sm:text-[4vw] sm:leading-[4vw]">HBS</div>
			</div>

			<div>
				<div class="navConnect menu-icon cursor-pointer text-[3.5vw] md:text-[2vw] xl:text-[1.2vw] text-stone-200 xl:hover:text-[1.6vw] hover:font-bold" id="nav-toggler" onclick="openMenu()">
					<h1 class="[display:none] md:[display:block]">MENU</h1>

					<div class="md:[display:none] h-[12vw] w-[12vw] sm:h-[12vw] sm:w-[11vw]">
						<img src="public/assets/img/menu.png" class="h-full w-full object-contain" alt=”Image”>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="fixed top-[-150vh] left-0 h-screen w-full z-20" id="menu-wrapper">
		<div class="absolute top-0 left-0 z-30 h-full w-full bg-black bg-opacity-[100%] backdrop-blur-sm"></div>
		<nav class="navbar absolute top-0 left-0 h-full w-full  z-40 text-white px-[2vw]">

			<div class="h-[132vw] w-[87vw] md:h-[92vw] md:w-[67vw] xl:h-[42vw] xl:w-[27vw] absolute top-[13vh] left-[-2vw]">
				<img src="public/assets/img/statue.png" class="h-full w-full object-cover brightness-63 opacity-[20%]" alt=”left-down arrow”>
			</div>

			
			<div class="fixed top-0  left-0 [display:none] justify-between items-center px-[3vw] cursor-pointer w-full h-[8vh] xl:h-[11vh]" id="logoAndClose">
				<a href="/public/index.html">
					<div class="navConnect h-[13vw] w-[12vw] sm:h-[12vw] sm:w-[11vw] md:h-[9vw] md:w-[8vw] xl:h-[7vw] xl:w-[6vw]">
						<img src="public/assets/img/roll.png" class="h-full w-full object-contain" alt=”Image”>
					</div>
				</a>

				<div>
					<h1 class="navConnect close-icon text-[3.5vw] md:text-[2vw] xl:text-[1.4vw] xl:leading-[1.4vw] uppercase text-white xl:hover:text-[1.7vw] xl:hover:font-bold" id="closeNav" onclick="closeMenu()">Close</h1>
				</div>
			</div>

			<div class="pt-[20vw] md:pt-[13vw] xl:pt-[6vw] min-h-screen h-screen flex flex-col">
				<div class="flex flex-col uppercase text-[50px] leading-[52px] sm:text-[80px] sm:leading-[82px] md:text-[7vw] md:leading-[7vw]">
					<a href="/public/about.html" data-text="about">
						<div class="navChild1 navigation relative flex">
							<h1 class="menu-num text-[2.5vw] leading-[2.5vw] md:text-[1.2vw] md:leading-[1.2vw]">(01)</h1>
							<h1>About</h1>
						</div>

						<div class="navImage-display1 min-h-[40vh] h-[40vh] w-[30vw] z-[10000000]">
							<img src="public/assets/img/nezAndCos/img4.jpg" class="h-full w-full object-cover grayscale" alt=”Image”>
						</div>
					</a>
					<hr>


					<a href="/public/service.html"  data-text="services">
						<div class="navChild2 flex md:justify-end">
							<div class="navigation relative mt-[4vw] sm:mt-[5vw] md:mt-[3vw] flex">
								<h1 class="menu-num text-[2.5vw] leading-[2.5vw] md:text-[1.2vw] md:leading-[1.2vw] md:[display:none]">(02)</h1>
								<h1>Services</h1>
								<h1 class="menu-num text-[2.5vw] leading-[2.5vw] md:text-[1.2vw] md:leading-[1.2vw] [display:none] md:block">(02)</h1>
							</div>

							<div class='iframeCont navImage-display2 h-[40vh] min-h-[40vh] w-[30vw]  z-[10000000]'>
								<iframe src="https://player.vimeo.com/video/893302984?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;showinfo=0&amp;is_iframe=true&amp;loop=1&amp;controls=0" class='aspect-video h-full w-full brightness-[50%] grayscal' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					</a>
					<hr>					
					
					<a href="/public/contact.html" data-text="contact">
						<div class="navChild3 navigation relative mt-[4vw] sm:mt-[5vw] md:mt-[3vw] flex">
							<h1 class="menu-num text-[2.5vw] leading-[2.5vw] md:text-[1.2vw] md:leading-[1.2vw]">(03)</h1>
							<h1>Contact</h1>
						</div>

						<div class='iframeCont navImage-display3 h-[40vh] min-h-[40vh] w-[30vw]  z-[10000000]'>
							<!-- <iframe src="public/assets/video/vid5.mp4" class='aspect-video h-full w-full brightness-50 grayscal' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" autoPlay loop muted allowfullscreen title="class4"></iframe> -->
							<iframe src="https://player.vimeo.com/video/897032294?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;showinfo=0&amp;is_iframe=true&amp;loop=1&amp;controls=0" class='aspect-video h-full w-full brightness-[60%] grayscal' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
						</div>
					</a>
					<hr>
				</div>


				<div class="flex items-end flex-1 md:pb-[3vw] xl:pb-[2vw]">
					<div class="w-full">
					<div class="flex justify-between items-end md:block">

					<!-- Circle Texts for Small Screens -->
					<div class="md:[display:none]">
						<div class="z-10">

							<div class="circle relative">
								<div class="circleTextAnim text-stone-40 cursor-pointer">
									<h1 class="myElement text-[11px] xs:text-[3.7vw] sm:text-[20px]" id="myElement"> * HB STUDIOS * OUR CREATION * OUR CREATION * HB STUDIOS * OUR CREATION</h1>
								</div>


								<div class="absolute h-full w-full top-0 left-0 flex justify-center items-center z-20 hover:hidde">
									<div class="h-[6.5vw] w-[6.5vw]">
										<img src="public/assets/img/rightArrow1.png" class="h-full w-full object-contain" alt=”left-down arrow”>
									</div>
								</div>
							</div>

						</div>
					</div>													


				<div class="mt-[5vw] md:flex justify-between items-end">
					<div class="md:flex items-center">
						<div class="flex items-center">
							<div class="mr-[2vw] xl:mr-[1.5vw]">
								<div class="min-h-[35vw] h-[35vw] w-[24vw] sm:min-h-[26vw] sm:h-[26vw] sm:w-[19vw] md:min-h-[28vw] md:h-[28vw] md:w-[15vw] xl:min-h-[30vh] xl:h-[30vh] xl:w-[13vw]">
									<img src="public/assets/img/odunsi.jpg" class="h-full w-full object-cover  brightness-[60%]" alt=”Image”>
								</div>
							</div>

							<div>
								<div class="exploreHead text-[19px] leading-[21px] w-[23vw] sm:text-[25px] sm:leading-[27px] sm:w-[21vw] md:text-[2.7vw] md:leading-[2.7vw] md:w-[13vw] xl:text-[2.5vw] xl:leading-[2.5vw] xl:w-[12vw] uppercase">Explore HeadBorn Studios</div>
								<div>
									<div class="exploreBody text-[13px] leading-[15px] w-[20vw] sm:text-[16px] sm:leading-[18px] sm:w-[14vw] md:text-[1.1vw] md:leading-[1.1vw] md:w-[10vw] xl:text-[0.9vw] xl:leading-[0.9vw] xl:w-[12vw] mt-[2vw] md:mt-[1.5vw]">
										<div class="[display:none] md:block">You can also enjoy the unique experience that comes with Headborn Studios to your heart's content too.</div>
										<div class="md:[display:none]">Experience HBS.</div>
									</div>
								</div>
							</div>
						</div>


						<!-- Circle Texts for Large Screens -->
						<div class="[display:none] md:block">
							<div class="z-10">
								<div class="circle xl:ml-[1.5vw] mr-[1.5vw] xl:mr-0 relative cursor-pointer">
									<div class="circleTextAnim text-stone-40">
										<h1 class="text-[11px] xs:text-[3.7vw] sm:text-[20px] md:text-[1.5vw] xl:text-[1.3vw]" id="myElement1"> * HB STUDIOS * OUR CREATION * OUR CREATION * HB STUDIOS * OUR CREATION</h1>
									</div>
			
									<div class="absolute h-full w-full top-0 left-0 flex justify-center items-center z-20">
										<div class="md:h-[2.5vw] md:w-[2.5vw]">
											<img src="public/assets/img/rightArrow1.png" class="h-full w-full object-contain" alt=”left-down arrow”>
										</div>
									</div>
								</div>
							</div>
						</div>								
					</div>


					<div class="flex items-center md:mr-[2vw] xl:mr-[3vw] mt-[3vw] md:mt-0">
						<div class="mr-[2vw] xl:mr-[1.5vw]">
							<div class="min-h-[35vw] h-[35vw] w-[24vw] sm:min-h-[26vw] sm:h-[26vw] sm:w-[19vw] md:min-h-[28vw] md:h-[28vw] md:w-[15vw] xl:min-h-[30vh] xl:h-[30vh] xl:w-[13vw]">
								<img src="public/assets/img/remy/remy.jpg" class="h-full w-full object-cover  brightness-[60%]" alt=”Image”>
							</div>
						</div>

						<div>
							<div class="exploreHead text-[19px] leading-[21px] w-[20vw] sm:text-[25px] sm:leading-[27px] sm:w-[16vw] md:text-[2.7vw] md:leading-[2.7vw] md:w-[13vw] xl:text-[2.5vw] xl:leading-[2.5vw] xl:w-[12vw] uppercase">
								<div class="[display:none] md:block">Forging Artists into Icons</div>
								<div class="md:[display:none]">Forging Icons</div>
							</div>
							<div>
								<div class="exploreBody text-[13px] leading-[15px] w-[20vw] sm:text-[16px] sm:leading-[18px] sm:w-[15vw] md:text-[1.1vw] md:leading-[1.1vw] md:w-[10vw] xl:text-[0.9vw] xl:leading-[0.9vw] xl:w-[12vw] mt-[2vw] md:mt-[1.5vw]">
									<div class="[display:none] md:block">Enable artists and brands to craft enduring visual narratives that resonate globally within the realms of fashion and lifestyle.</div>
									<div class="md:[display:none]">Crafting enduring visual narratives.</div>
								</div>
							</div>
						</div>
					</div>
		

					<!-- Social Media & Copyrights for Large Screen -->
					<div class="[display:none] md:block">
						<div class="mb-[7vw]">
							<div class="flex justify-between items-center w-[15vw]">
								<div class="w-[3.5vw] h-[3.5vw] rounded-full bg-zinc-800 flex justify-center items-center">
									<div class="h-[2vw] w-[2vw]">
										<img src="public/assets/img/instagtam.png" class="h-full w-full object-contain" alt=”left-down arrow”>
									</div>
								</div>

								<div class="w-[3.5vw] h-[3.5vw] rounded-full bg-zinc-800 flex justify-center items-center">
									<div class="h-[2vw] w-[2vw]">
										<img src="public/assets/img/twitter.png" class="h-full w-full object-contain" alt=”left-down arrow”>
									</div>
								</div>

								<div class="w-[3.5vw] h-[3.5vw] rounded-full bg-zinc-800 flex justify-center items-center">
									<div class="h-[2vw] w-[2vw]">
										<img src="public/assets/img/mail.png" class="h-full w-full object-contain" alt=”left-down arrow”>
									</div>
								</div>
							</div>
						</div>


						<div class="footer-nav md:text-right text-[1.3vw] leading-[1.4vw] xl:text-[1.1vw] xl:leading-[1.4vw]">
							<span class='text-[1.2vw]'>©</span>
							<span>2023 HEADB0RN STUDIOS</span>
							<div class="uppercase">All Rights Reserved</div>
						</div>
					</div>
				</div>
				</div>





				<!-- Social Media & Copyrights for Small Screen -->
				<div class="flex items-center justify-between md:[display:none] mt-[5vw] md:mt-[3vw] mb-[2vw]">
					<div class="footer-nav text-[10px] leading-[10.2px] sm:text-[13px] sm:leading-[13.3px] xl:text-[1.1vw] xl:leading-[1.4vw]">
						<span class='text-[10.2px] sm:text-[13.3px] xl:text-[1.2vw]'>©</span>
						<span>2023 HEADB0RN STUDIOS</span>
						<div class="uppercase">All Rights Reserved</div>
					</div>


					<div class="mb-[7vw">
						<div class="flex justify-between items-center w-[45vw] xl:w-[15vw]">
							<div class="h-[6vw] w-[6vw] sm:h-[4.5vw] sm:w-[5vw] xl:w-[3.5vw] xl:h-[3.5vw] rounded-full bg-zinc-800 flex justify-center items-center">
								<div class="h-[4vw] w-[4vw] sm:h-[2.5vw] sm:w-[2.5vw] xl:h-[2vw] xl:w-[2vw]">
									<img src="public/assets/img/instagtam.png" class="h-full w-full object-contain" alt=”left-down arrow”>
								</div>
							</div>

							<div class="h-[6vw] w-[6vw] sm:h-[4.5vw] sm:w-[5vw] xl:w-[3.5vw] xl:h-[3.5vw] rounded-full bg-zinc-800 flex justify-center items-center">
								<div class="h-[4vw] w-[4vw] sm:h-[2.5vw] sm:w-[2.5vw] xl:h-[2vw] xl:w-[2vw]">
									<img src="public/assets/img/twitter.png" class="h-full w-full object-contain" alt=”left-down arrow”>
								</div>
							</div>

							<div class="h-[6vw] w-[6vw] sm:h-[4.5vw] sm:w-[5vw] xl:w-[3.5vw] xl:h-[3.5vw] rounded-full bg-zinc-800 flex justify-center items-center">
								<div class="h-[4vw] w-[4vw] sm:h-[2.5vw] sm:w-[2.5vw] xl:h-[2vw] xl:w-[2vw]">
									<img src="public/assets/img/mail.png" class="h-full w-full object-contain" alt=”left-down arrow”>
								</div>
							</div>
						</div>
					</div>
				</div>
				</div>



				</div>						
			</div>
		</nav>
	</div>		
</section0>
	`
}

// displayNav();