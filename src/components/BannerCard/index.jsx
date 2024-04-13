import Img from "../../assests/img/img-2.jpg"
import './BannerCard.css'

const BannerCard=()=>{
    return(
      <div className="ContainerBanner">
         <img
         src={Img}
         alt="Photo"
         className="ImgCard"
         />
         <div className="description">
             <h3>Be young Presents</h3>
             <h2>
              Brezzy Summer style
             </h2>
             <p>
              UP TO 50% OFF
             </p>
             <a>Explore Items</a>
         </div>
      </div>
    )
}

export default BannerCard;