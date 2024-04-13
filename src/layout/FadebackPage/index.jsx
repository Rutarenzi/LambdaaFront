import './FadebackPage.css';
import {SectionHeader,FadeCard} from '../../components';
import React,{useState} from 'react';
import Slider from 'react-slick';

const FadebackPage=()=>{
  const [sliderRef, setSliderRef] = useState(null)
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

    return(
      <div className="feedSection">
        <SectionHeader HearderName="Feedback"/>

        <div className="SliderFeedContaneR">
    <Slider ref={setSliderRef} {...settings}>
    <FadeCard/>
    <FadeCard/>
    <FadeCard/>
    </Slider>
        </div>
        
      </div>
    )
}

export default FadebackPage