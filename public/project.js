// const script = document.createElement("script");
// script.src = "../src/projectEngine.js";
// script.id = "engine";
// document.head.appendChild(script);
// const script = document.querySelectorAll("script");
// console.log(script.id);


import { database } from "./database.js";



console.log(database[1])



const loadPage = () => {
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    let id = params.get("id");
    console.log(id)
   

  let artist = database[id]
  // console.log(artist);

  if (artist) {
    const showArtist = () => {
      return `

        
      <section1>
    

      <!-- Body Beginning -->
      <div class="sec1Begin">
        <div class="w-full pt-[20vw] xl:pt-[8vw]">
          <div class="w-full">
            <div
              class="artisteName navConnect text-[29vw] leading-[29vw] xl:text-[31vw] xl:leading-[31vw] text-center bg-white text-black w-full"
            >
              <h1>${artist.name.toUpperCase()}</h1>

              <div
                class="emoji min-h-[12vw] h-[12vw] w-[12vw] z-[10000000] rounded-full"
              >
                <img
                  src="${artist.nameEmoji}"
                  class="h-full w-full object-cover brightness-50 rounded-full sepi"
                  alt="”Image”"
                />
              </div>
            </div>

            ${artist.Projects.map((proj, index) => {
              return `
            <div class="xl:flex justify-between">
            <div
              class="no1 text-[5.2vw] leading-[5.2vw] xl:text-[2vw] xl:leading-[2vw] mt-[15vw] xl:mt-[3vw] text-stone-200"
            >
            <h1>/PROJECT ${proj.projectNo}  </h1>
            </div>

            <div class="creditContainer w-full xl:w-[46vw] mt-[6vw] xl:mt-0">
              <div class="uppercase">
                <div class="bdr border-t-[0.1vw] mt-[1vw]"></div>
                
                <div
                class="credit  text-[8vw] md:text-[7vw] leading-normal xl:text-[4vw] xl:leading-[4vw] my-[0.8vw]"
                >
                <span>credits</span>
                </div>
                <div class="border-t-[0.1vw] mt-[1vw]"></div>

${proj.credits
  .map((credit) => {
    return `
        <div class=" mt-[-0.2vw]">
        <div>
        <div
          class="credit-subhead text-[4.2vw] leading-[3.6vw] sm:text-[20px] sm:leading-[24px] lg:text-[25px] lg:leading-[29px] xl:text-[1.5vw] xl:leading-[1.5vw] mt-[3vw] sm:mt-[2vw] xl:mt-[1vw]"
        >
          ${credit.creditSubhead}:
        </div>
        <div class="flex justify-between items-center">
          <div
            class="credit-ans text-[4.2vw] sm:text-[20px] lg:text-[25px] xl:text-[1.5vw]"
          >
            ${credit.creditAns}
          </div>
    
          <div
            class="h-[4vw] w-[4vw] sm:h-[3vw] sm:w-[3vw] xl:h-[1.3vw] xl:w-[1.3vw]"
          >
            <img
              src="/assets/img/arrow4.png"
              class="h-full w-full object-contain"
              alt="”right-down"
              arrow”
            />
          </div>
        </div>
      </div>
        
          <div
            class="w-full border-t-[0.1vw] mt-[1vw] xl:mt-[0.5vw]"
          ></div>
       
        </div>
        `;
  })
  .join("")}
              </div>
            </div>
          </div>

          

     
            <div class="flex justify-between items-end mt-[15vw] xl:mt-[4vw]">
            <div>
              <div class="mb-[15vw]">
                <h1
                  class="ta text-[4.8vw] leading-[4.8vw] xl:text-[2vw] xl:leading-[2vw] uppercase"
                >
                ${proj.projectImages.projectName.subName1}
                </h1>
                <h1
                  class="film1 text-[3vw] leading-[3vw] xl:text-[1.6vw] xl:leading-[1.6vw] mt-[1.3vw] xl:mt-[0.09vw] uppercase underline"
                >
                ${proj.projectImages.projectName.subName2}
                </h1>
              </div>

              <div
                class="h-[24vw] min-h-[24vw] w-[17vw] md:h-[22vw] md:min-h-[22vw] md:w-[19vw] xl:h-[40vh] xl:min-h-[40vh] xl:w-[20vw]"
              >
          
                <img
                  src="${proj.projectImages.imageI}"
                  class="h-full w-full object-cover brightness-50"
                  alt="”left-down"
                  arrow”
                />
              </div>
            </div>

            <div
            class="creditBigImg h-[76vw] min-h-[76vw] w-[65vw] md:h-[72vw] md:min-h-[72vw] md:w-[60vw] xl:h-[70vw] xl:min-h-[70vw] xl:w-[46vw] grayscale"
          >
            <img
              src="${proj.projectImages.imageII}"
              class="h-full w-full object-cover brightness-50"
              alt="”left-down"
              arrow”
            />
          </div>
          </div>
            
       

          

          <div class="ourVisionHead mt-[12vw] xl:mt-[7vw]">
            <div
              class="styl-dir text-[10vw] leading-[10.2vw] xl:text-[6vw] xl:leading-[6vw] uppercase xl:w-[50vw]"
            >
              <h1>${proj.ourVisionHead}</h1>
            </div>

            <!-- Large Screen -->
            <div
              class="visionHeadArr w-[46.5vw] justify-end mt-[2vw] [display:none] xl:flex"
            >
              <div class="h-[3.5vw] w-[3.5vw]">
                <img
                  src="/assets/img/arrow2.png"
                  class="h-full w-full object-contain"
                  alt="”left-down"
                  arrow”
                />
              </div>
            </div>

            <!-- Small Screen -->
            <div class="mt-[5vw] h-[7vw] w-[7vw] xl:[display:none]">
              <img
                src="/assets/img/arrow2.png"
                class="h-full w-full object-contain"
                alt="”left-down"
                arrow”
              />
            </div>
          </div>

          <div
            class="visionChild xl:flex justify-center mt-[10vw] md:mt-[8vw] xl:mt-[5vw]"
          >
            <div class="flex flex-col justify-center xl:items-center">
              <div
                class="subHead text-[6vw] leading-[7vw] md:text-[30px] md:leading-[36px] xl:text-[3.6vw] xl:leading-[4.2vw] w-[45vw] xl:w-[30vw]"
              >
                <div class="xl:text-center">Our Visionary Techniques</div>
              </div>

              <div class="subBody mt-[4vw] xl:mt-[3vw]">
                <div
                  class="xl:text-center leading-6 text-[15px] sm:leading-7 md:text-[12px] md:leading-[18px] xl:text-[1.1vw] xl:leading-normal w-[65vw] xl:w-[27vw] text-stone-300"
                >
                ${proj.ourVisionBody}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-[10vw] xl:mt-[7vw]">
            <div class="flex justify-around">
              <div
                class="blackWhite blackWhite1 h-[22vw] min-h-[22vw] w-[19vw] xl:h-[26vw] xl:min-h-[26vw] xl:w-[22vw] mt-[47vw] xl:mt-[24vw] relative"
              >
                <img
                  src="${proj.ourVisionImages[0]}"
                  class="bwImg h-full w-full object-cover brightness-50 ${artist.id !== 3 && artist.id !== 5? `grayscale` : ` `} absolute top-0 left-0"
                  alt="”left-down"
                  arrow”
                />
              </div>

              <div
                class="blackWhite blackWhite2 h-[70vw] min-h-[70vw] w-[45vw] xl:h-[50.1vw] xl:min-h-[50.1vw] xl:w-[44vw] relative"
              >
                <img
                  src="${proj.ourVisionImages[1]}"
                  class="bwImg h-full w-full object-cover brightness-50  absolute top-0 left-0 ${artist.id !== 3 && artist.id !== 5 && artist.id !== 6? `grayscale` : ` `}"
                  alt="”left-down"
                  arrow”
                />
              </div>

              <div
                class="blackWhite blackWhite3 h-[22vw] min-h-[22vw] w-[19vw] xl:h-[26vw] xl:min-h-[26vw] xl:w-[22vw] relative"
              >
                <img
                  src="${proj.ourVisionImages[2]}"
                  class="bwImg h-full w-full object-cover brightness-50 ${artist.id !== 3 && artist.id !== 5? `grayscale` : ` `} absolute top-0 left-0"
                  alt="”left-down"
                  arrow”
                />
              </div>
            </div>
          </div>


     
          <div class="${index == 0? `<div class="w-full">

        <div class="flex justify-center items-center">
          <div>
            <div>
              <div class="integrate text-[7vw] leading-[7.5vw] xl:text-[4vw] xl:leading-[4.5vw] xl:w-[80vw] mt-[15vw] xl:mt-[7vw]">
                /${proj.ourVisionStatement}
              </div>
              <p class="n italic text-[5.5vw] xl:text-[2.5vw] mt-[1.5vw] xl:mt-0"> (N) </p>
            </div>

            <!-- Large Screen -->
            <div
              class="orangeBtnCont justify-around text-[1.4vw] leading-[1.4vw] uppercase mt-[1vw] px-[6vw] [display:none] xl:flex"
            >
              <div class="btn-orange">Identity</div>
              <div class="btn-orange">Fashion</div>
              <div class="btn-orange">Lifestyle</div>
              <div class="btn-orange">Trends</div>
            </div>

            <!-- Small Screen -->
            <div
              class="orangeBtnCont1 flex flex-col items-center text-[3.6vw] leading-[3.6vw] xl:text-[1.4vw] xl:leading-[1.4vw] uppercase mt-[10vw] px-[6vw] xl:[display:none]"
            >
              <div class="flex justify-between w-[70vw]">
                <div class="btn-orange">Identity</div>
                <div class="btn-orange">Fashion</div>
              </div>

              <div class="flex justify-between w-[45vw] mt-[5vw]">
                <div class="btn-orange">Lifestyle</div>
                <div class="btn-orange">Trends</div>
              </div>
            </div>
          </div>
        </div>
      </div

        <div>
        <div class="singImgCont flex justify-end mt-[15vw] xl:mt-[7vw]">
          <div
            class="singImg blackWhite relative"
          >
            <img
              src="${proj.ourVisionImages[3]}"
              class="bwImg h-full w-full object-cover brightness-50 ${artist.id !== 3 && artist.id !== 5 && artist.id !== 6? `grayscale` : ` `} absolute top-0 left-0"
              alt="”left-down"
              arrow”
            />
          </div>
          </div>
        </div>

        <div class="sdCdCont mt-[7vw]">
          <div>
            <div
              class="sd text-[12vw] leading-[12.5vw] xl:text-[8vw] xl:leading-[8.5vw] uppercase"
            >
              <h1>Style Direction</h1>
              <h1>Style Direction</h1>
              <h1>Style Direction</h1>
            </div>

            <div class="cdCont flex justify-end mt-[17vw]">
              <div
                class="cd text-[12vw] leading-[12.5vw] xl:text-[8vw] xl:leading-[8.5vw] uppercase"
              >
                <h1>Costume Designs</h1>
                <h1>Costume Designs</h1>
                <h1>Costume Designs</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-[15vw] xl:mt-[7vw]">
          <div class="flex flex-col justify-center xl:items-center">
            <div
              class="subHead text-[6vw] leading-[7vw] xl:text-[3.6vw] xl:leading-[4.2vw] w-[50vw] xl:w-[30vw]"
            >
              <div class="xl:text-center">Adaptability to Trends</div>
            </div>

            <div class="subBody mt-[3vw]">
              <div
                class="xl:text-center text-[15px] leading-6 xl:text-[1.1vw] xl:leading-normal w-[70vw] xl:w-[27vw] text-stone-300"
              >
              ${proj.trendsBody}
              </div>
            </div>
          </div>
        </div>





















        <div class="mt-[20vw] xl:mt-[6vw] ${artist.id !== 4 && artist.id !== 6? `block` : `[display:none]`}">
          <div class="ml-[2vw]">
            <div class="film text-[15vw] leading-[14vw] uppercase">
              The Film
            </div>
          </div>
          <div class="mt-[3vw]">
            <div>
              <div
                class="aspect-video w-full xl:w-[70vw] min-h-[40vh] h-[40vh] xl:min-h-[60vh] xl:h-[60vh] bg-zinc-900"
              >
                <iframe
                  class="h-full w-full aspect-video"
                  src="${proj.projectFilm}"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                              picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div
          class="heavenNote uppercase mt-[10vw] xl:mt-[7vw] text-[12px] sm:text-[13px] leading-4 md:text-[10px] md:leading-[13px] xl:text-[0.85vw] xl:leading-[0.95vw]"
        >
          <div class="lg:flex">
            <div>
              <div
                class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[33vw] xl:w-[35vw] px-[1vw] mr-[5vw] xl:mr-[6vw]"
              >
                <h1>
                  One of the primary objectives of a music video is to
                  captivate the audience visually. The styling and costume
                  designs play a central role in achieving this goal. They
                  are not just about adorning the artist but are
                  instrumental in crafting a visual narrative that
                  resonates with the song's message and evokes emotions.
                </h1>

                <div class="flex items-end justify-between">
                  <div
                    class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]"
                  >
                    VISUAL IMPACT
                  </div>
                  <div class="subHead-no">1</div>
                </div>
              </div>
            </div>

            <div
              class="flex justify-end lg:block mt-[14vw] md:mt-[9vw] lg:mt-0"
            >
              <div
                class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[23vw] px-[1vw] text-right lg:mt-[4vw]"
              >
                <h1>
                  The Wardrobe choices tell a story within the music
                  video. Each outfit represents a different facet of the
                  narrative, character development, or emotional arc.
                  Costume changes indicate shifts in the song's mood or
                  lyrics, enriching the viewer's understanding of the
                  music's context.
                </h1>

                <div class="flex items-end justify-between">
                  <div class="subHead-no">2</div>
                  <div
                    class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]"
                  >
                    STORY TELLING
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-[15vw] md:mt-[9vw] lg:mt-0">
              <div
                class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[32vw] px-[1vw] lg:mt-[8vw]"
              >
                <h1>
                  In the competitive world of music videos, being
                  memorable is key. Unique and carefully thought-out
                  wardrobe choices can leave a lasting impression on
                  viewers. When the audience can recall the video because
                  of the striking fashion choices, it enhances the video's
                  longevity and potential for going viral.
                </h1>

                <div class="flex items-end justify-between">
                  <div
                    class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]"
                  >
                    MEMORABILITY
                  </div>
                  <div class="subHead-no">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>` 
        
        
        : index == 1? `<div class="flex justify-end mt-[10vw mb-[7vw]">
        <div>
          <div
            class="boldAndCon text-[22vw] leading-[22vw] xl:text-[16vw] xl:leading-[16vw] text-right uppercase"
          >
            <h1>The</h1>
            <div class="rel relative">
              <h1>Bold</h1>
              <div
                class="slash slash1 "
              ></div>
            </div>
            <h1>And</h1>
            <div class="rel relative">
              <h1>Confident</h1>
              <div
                class="slash slash2"
              ></div>
            </div>
          </div>
        </div>


        <div class="relative min-h-[80vw] h-[80vw] xl:min-h-[80vh] xl:h-[80vh] w-full mt-[5vw] xl:mt-0">
          <div class="swiper mySwiper mb-[30vw]">
            <div class="sliderDisplay swiper-wrapper flex">

            </div>
			    </div>
        </div>
      </div>
      
      
      ${artist.Projects.length >= 2? `
      <div class="mt-[10vw] xl:mt-0">
        <div class="mb-[5vw]">
          <div
            class="styl-dir text-[10vw] leading-[10.2vw] xl:text-[6vw] xl:leading-[6vw] uppercase w-[50vw]"
          >
            <h1>Consistency Across Platforms</h1>
          </div>

          <!--  Arrow Large Screen-->
          <div class="w-[25vw] justify-end mt-[2vw] [display:none] xl:flex">
            <div class="h-[3.5vw] w-[3.5vw]">
              <img
                src="/assets/img/arrow2.png"
                class="h-full w-full object-contain"
                alt="”left-down"
                arrow”
              />
            </div>
          </div>

          <!-- Small Screen -->
          <div class="mt-[5vw] h-[7vw] w-[7vw] xl:[display:none]">
            <img
              src="/assets/img/arrow2.png"
              class="h-full w-full object-contain"
              alt="”left-down"
              arrow”
            />
          </div>
        </div>

        <div class="xl:flex justify-center mt-[10vw] md:mt-[8vw] xl:mt-0">
          <div class="xl:flex flex-col justify-center items-center">
            <div
              class="subHead text-[6vw] leading-[7vw] md:text-[30px] md:leading-[36px] xl:text-[3.6vw] xl:leading-[4.2vw] w-[45vw] xl:w-[30vw]"
            >
              <div class="xl:text-center">Our Visionary Techniques</div>
            </div>

            <div class="subBody mt-[4vw] xl:mt-[3vw]">
              <div
                class="xl:text-center leading-6 text-[15px] sm:leading-7 md:text-[12px] md:leading-[18px] xl:text-[1.1vw] xl:leading-normal w-[60vw] xl:w-[30vw] text-stone-300"
              >
                Maintaining a consistent fashion aesthetic across various
                platforms, including music videos, social media, and live
                performances, reinforceing brand identity. This consistency
                helps in creating a cohesive and recognizable visual brand
                for your audience.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div class="mt-[15vw] xl:mt-[6vw] ${artist.id == 1 && proj.projectNo == '02'? `block` : `[display:none]`}">
      <div class="ml-[2vw]">
        <div class="film text-[15vw] leading-[14vw] uppercase">
          The Film
        </div>
      </div>
      <div class="mt-[3vw]">
        <div>
          <div
            class="aspect-video w-full xl:w-[70vw] min-h-[35vh] h-[35vh] xl:min-h-[60vh] xl:h-[60vh] bg-zinc-900"
          >
            <iframe
              class="h-full w-full aspect-video"
              src="${proj.projectFilm}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                          picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>` : ``}



        <div class="singImgCont flex justify-end mt-[15vw] xl:mt-[7vw] ${artist.Projects.length == 2 || artist.Projects.length == 3? `block` : `[display:none]`}">
          <div class="singImg blackWhite relative">
            <img
              src="${proj.ourVisionImages[4]}"
              class="bwImg h-full w-full object-cover brightness-50 absolute top-0 left-0"
              alt="”left-down"
              arrow”
            />
          </div>
        </div>
      ` 
      
      
      : index == 3? `
      <div class="${artist.id == 1 && proj.projectNo == '04'? `block` : `[display:none]`}">
    <div class="ml-[2vw] mt-[15vw] xl:mt-[6vw]">
      <div class="film text-[15vw] leading-[14vw] uppercase">
        The Film
      </div>
    </div>
    <div class="mt-[3vw]">
      <div>
        <div
          class="aspect-video w-full xl:w-[70vw] min-h-[35vh] h-[35vh] xl:min-h-[60vh] xl:h-[60vh] bg-zinc-900"
        >
          <iframe
            class="h-full w-full aspect-video"
            src="${proj.projectFilm}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                        picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

      
      ` : `[display:none]`}"></div>
          
        
      



    ${artist.Projects.length < 2? `<div class="w-full xl:flex justify-center mt-[10vw] xl:mt-[7vw]">
        <div class="h-[120vw] min-h-[120vw] w-[55vw] xl:h-[50.1vw] xl:min-h-[50.1vw] xl:w-[44vw]">
            <img
            src="${artist.lastImg}"
            class="h-full w-full object-cover brightness-50 grayscale"
            alt="”Image”"
          />
        </div>
        </div>` : ``}



          <div class="flex items-center mt-[10vw] xl:mt-[3vw] ${index == artist.Projects.length - 1?  `[display:none]` : `block`}">
          <div class="h-[20vw] w-[28vw] xl:w-[31vw]">
            <img
              src="/assets/img/longArrow.png"
              class="h-full w-full object-contain"
              alt="left-arrow"
            />
          </div>
          <div class="next text-[17vw] leading-[15vw] ml-[2vw]">
            <h1>NEXT</h1>
          </div>
        </div>
        </div>




        

        ${index == artist.Projects.length - 1? `<div class="w-full">
        <div class="nxtPageSec" id="nxtPagee">
          <div class="mr-[3vw]">
            <a href="/index.html#swiperSec">
            <div
              class="viewProject rounded-full h-[40vw] w-[40vw] sm:h-[35vw] sm:w-[35vw] md:h-[30vw] md:w-[30vw] xl:h-[11vw] xl:w-[11vw] text-center uppercase flex justify-around items-center text-[3.1vw] leading-[3.1vw] sm:text-[2.6vw] sm:leading-[2.6vw] xl:text-[1vw] xl:leading-[1vw] animate-bounce hover:animate-none"
            >
              <div
                class="h-[4vw] w-[5.5vw] sm:h-[3vw] sm:w-[4.5vw] xl:h-[1.5vw] xl:w-[2vw]"
              >
                <img
                  src="/assets/img/longArrow1.png"
                  class="h-full w-full object-contain"
                  alt="”brand”"
                />
              </div>
  
              <div>
                <div>View</div>
                <div>Projects</div>
              </div>
  
              <div
                class="h-[4vw] w-[5.5vw] sm:h-[3vw] sm:w-[4.5vw] xl:h-[1.5vw] xl:w-[2vw]"
              >
                <img
                  src="/assets/img/longArrow.png"
                  class="h-full w-full object-contain"
                  alt="”brand”"
                />
              </div>
            </div>
            </a>
          </div>
      </div></div>` : ` `}
            `;
            }).join('')}

            

          </div>
        </div>         
      </div>



       
    </section1>
    
    
    `;
    };

    document.querySelector("wrapper").innerHTML = showArtist();
  }
};

loadPage();
