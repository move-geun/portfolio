import React from "react";
import { SliderContainer } from "./FrontSlider.style";

const FrontSlider = ({ count, slideRef }) => {
  const sliderlist = [
    {
      id: 1,
      src: "./assets/html.png",
      alt: "HTML",
    },
    {
      id: 2,
      src: "./assets/css.png",
      alt: "CSS",
    },
    {
      id: 3,
      src: "./assets/js.png",
      alt: "JS",
    },
    {
      id: 4,
      src: "./assets/react.png",
      alt: "React",
    },
    {
      id: 5,
      src: "./assets/redux.png",
      alt: "Redux",
    },
    {
      id: 6,
      src: "./assets/recoil.png",
      alt: "Recoil",
    },
    {
      id: 7,
      src: "./assets/vue.png",
      alt: "Vue",
    },
    {
      id: 8,
      src: "./assets/three.png",
      alt: "Three.js",
    },
    {
      id: 10,
      src: "./assets/html.png",
      alt: "HTML",
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
