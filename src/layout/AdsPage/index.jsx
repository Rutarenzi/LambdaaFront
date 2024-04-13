
import Img from "../../assests/img/img-3.jpg";
import './AdsPage.css'
const AdsPage =()=> {
    return(
        
       <div className="AdsContainer">
           <div className="First-Ads">
            <img
            src={Img}
            alt="Photo ads"
            className="AdsImg"
           
            />
            <div className="First-Ads-Desc">
                <p className="FirstP">
                    WE MADE YOUR EVERYTHING FASHION BETTER! 
                </p>
            <p className="SecondP">
                in our journey to improve everyday fashion
                europhoria presents EVERYDAY wear range Comfortable
                & Affordable fashion 24/7
            </p>
            <br></br>
            <br></br>
            <a className="AdsBtn">Shop Now</a>
            </div>
           </div>
           <div className="second-Ads">
           <img
            src={Img}
            alt="Photo ads"
            className="AdsImg"
           
            />
           </div>
       </div>
    )
}

export default AdsPage;