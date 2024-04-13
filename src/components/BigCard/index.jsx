import Img from "../../assests/img/img-1.jpg"
import './BigCard.css'

const BigCard=()=>{
    return(
      <div className="ContainerBig">
         <img
         src={Img}
         alt="Photo"
         className="ImgCard"
         />
         <div className="descriptionBig">
             {/* <h2>
               Hawalian Shirts
             </h2> */}
             <p>
              UP TO 50% OFF
             </p>
             <h3>Dress up in summer vibe</h3>
             
             <p>
              UP TO 50% OFF
             </p>
             <p className="downArrow">
              &darr;
             </p>
             <a>Shop Now</a>
         </div>
      </div>
    )
}

export default BigCard;