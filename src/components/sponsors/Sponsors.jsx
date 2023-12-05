import React, { useEffect, useRef } from "react";
import "./Sponsors.css";
import Swiper from "swiper";
import { EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor1.png";
import sponsor3 from "../../assets/images/sponsor1.png";
import sponsor4 from "../../assets/images/sponsor1.png";
import sponsor5 from "../../assets/images/sponsor1.png"; // Add this line

function Sponsors() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        modules: [EffectCoverflow],
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        effect: "coverflow",
        speed: 500,
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 10,
          slideShadows: false,
          scale: 1,
          depth: 50,
          stretch: -40,
        },
      });

      // Set initial active slide index
      swiper.slideTo(1, false, true); // Set initial slide to the middle one

      // Add active class to initial slide
      const middleSlideIndex = Math.floor(swiper.slides.length / 2);
      swiper.slides[middleSlideIndex].classList.add("swiper-slide-active");

      // Flag to track initial slide change
      let initialSlideChange = true;

      swiper.on("slideChange", () => {
        const activeSlide = swiper.activeIndex;
        const slides = swiper.slides.slice();

        slides.forEach((slide, index) => {
          const slideClasses = slide.classList;
          const isActive = index === activeSlide;

          if (isActive) {
            slideClasses.add("swiper-slide-active");
          } else {
            slideClasses.remove("swiper-slide-active");
          }
        });
      });
    }
  }, [swiperRef]);

  return (
    <div className="sponsors-section">
      <div className="sponsor-header">
        <p className="special-p">Sponsors</p>
        <h2>Our Sponsors</h2>
        <p>
          We extend our heartfelt gratitude to our generous sponsors whose
          support fuels innovation and drives the success of InnoByte Hackathon.
        </p>
      </div>

      <div className="swiper-container" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={sponsor1} alt="sponsor1" className="sponsorImg" />
          </div>
          <div className="swiper-slide">
            <img src={sponsor2} alt="sponsor1" className="sponsorImg" />
          </div>
          <div className="swiper-slide">
            <img src={sponsor3} alt="sponsor1" className="sponsorImg" />
          </div>
          <div className="swiper-slide">
            <img src={sponsor4} alt="sponsor1" className="sponsorImg" />
          </div>
          <div className="swiper-slide">
            <img src={sponsor5} alt="sponsor1" className="sponsorImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

// function Sponsors() {
//   const [postionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4]);

//   const handleNext = () => {
//     setPositionIndex((prev) => {
//       const temp = [...prev];
//       const last = temp.pop();
//       temp.unshift(last);
//       return temp;
//     });
//   };

//   const positons = ["center", "left1", "left", "right1", "right"];

//   const images = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5];

//   const imageVariants = {
//     left1: { x: "100%", opacity: 0.8, scale: 0.7, zindex: 1 },

//     left: { x: "-50%", opacity: 0.6, scale: 0.5, zindex: -1 },

//     right1: { x: "", opacity: 0.8, scale: 0.7, zindex: 2 },

//     right: { x: "90%", opacity: 0.6, scale: 0.5, zindex: 1 },
//   };

//   return (
//     <div className="Sponsors">
//       <div className="sponsorSlider ">
//         {images.map((image, index) => (
//           <motion.img
//             key={index}
//             src={image}
//             alt="sponsor"
//             className="rounded-{12px}"
//             initial="center"
//             animate={positons[postionIndex[index]]}
//             variants={imageVariants}
//             transition={{ duration: 0.5 }}
//             style={{ width: "30%", positon: "absolute", top: "50%" }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
