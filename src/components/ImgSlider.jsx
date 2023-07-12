import React from "react";
import { SliderContainer } from "./ImgSlider.style";

const ImgSlider = ({ slideRef }) => {
  return (
    <SliderContainer>
      <div {...slideRef} className="slideWrap">
        {slideRef.map((slide, idx) => (
          <div key={idx}>
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>
    </SliderContainer>
  );
};
export default ImgSlider;
