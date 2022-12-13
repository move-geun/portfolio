import React from "react";
import { SliderContainer } from "./FrontSlider.style";

const FrontSlider = ({ count, slideRef }) => {
  const sliderlist = [
    {
      id: 1,
      src: "./assets/skills/html.png",
      alt: "HTML",
    },
    {
      id: 2,
      src: "./assets/skills/css.png",
      alt: "CSS",
    },
    {
      id: 3,
      src: "./assets/skills/js.png",
      alt: "JS",
    },
    {
      id: 4,
      src: "./assets/skills/react.png",
      alt: "React",
    },
    {
      id: 5,
      src: "./assets/skills/redux.png",
      alt: "Redux",
    },
    {
      id: 6,
      src: "./assets/skills/recoil.png",
      alt: "Recoil",
    },
    {
      id: 7,
      src: "./assets/skills/vue.png",
      alt: "Vue",
    },
    {
      id: 8,
      src: "./assets/skills/three.png",
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
