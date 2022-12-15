import React from "react";
import { SliderContainer } from "./FrontSlider.style";

const FrontSlider = ({ count, slideRef }) => {
  const sliderlist = [
    // {
    //   id: 1,
    //   src:  process.env.PUBLIC_URL +"/assets/skills/html.png",
    //   alt: "HTML",
    // },
    // {
    //   id: 2,
    //   src:  process.env.PUBLIC_URL +"/assets/skills/css.png",
    //   alt: "CSS",
    // },
    {
      id: 1,
      src: process.env.PUBLIC_URL + "/assets/skills/js.png",
      alt: "JS",
    },
    {
      id: 2,
      src: process.env.PUBLIC_URL + "/assets/skills/react.png",
      alt: "React",
    },
    {
      id: 3,
      src: process.env.PUBLIC_URL + "/assets/skills/redux.png",
      alt: "Redux",
    },
    {
      id: 4,
      src: process.env.PUBLIC_URL + "/assets/skills/recoil.png",
      alt: "Recoil",
    },
    {
      id: 5,
      src: process.env.PUBLIC_URL + "/assets/skills/vue.png",
      alt: "Vue",
    },
    {
      id: 6,
      src: process.env.PUBLIC_URL + "/assets/skills/three.png",
      alt: "Three.js",
    },
  ];
  return (
    <SliderContainer>
      <div ref={slideRef} className="slideWrap">
        {sliderlist.map((slide) => (
          <div key={slide.id}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
    </SliderContainer>
  );
};
export default FrontSlider;
