
import LandImg from "../../assests/img/img-2.jpg";
import './LandingCard.css';


const LandingCard =()=>{
    return(
       <div className="ImgContainer">
        <img src={LandImg} className="ImgSlide" height="100%" width="100%"/>
        <div className="LandingDesc">
          <p className="P1">T-shirt / Tops</p>
          <p className="P2">Summer Value Pack</p>
          <p className="P1">cool / Colorfull /comfy</p>
          <a className="ShopperBtn">Shop Now</a>
        </div>
       </div>
    )
}

export default LandingCard;