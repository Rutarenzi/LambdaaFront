
import React,{useState} from 'react';
import Slider from 'react-slick';
import { NewCard } from '../../components';
import "./NewPage.css"
import NewItem from './constant';
import SectionHeader from '../../components/SectionHeader';
const Carousel = () => {
    const [sliderRef, setSliderRef] = useState(null)
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
     <SectionHeader HearderName="New Arrival"/>
    <div className="slidessContainer">
      <div>
      <button onClick={sliderRef?.slickPrev} className="ArrowBtn" >
       &larr;
     </button>
     </div> 
    
     <div className="SliderContaneR">
    <Slider ref={setSliderRef} {...settings}>
     {
      NewItem.map((item,index)=>(
        <NewCard 
         name={item.name}
         image={item.image}
         key={index}
        />
      ))
     }
    </Slider>
    </div>
    <div >
    <button  onClick={sliderRef?.slickNext} className="ArrowBtn">
     &rarr;
  </button>
    </div>
  </div>
  </>
  );
};

export default Carousel;