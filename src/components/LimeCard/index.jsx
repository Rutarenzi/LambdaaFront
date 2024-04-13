
import "./LimeCard.css";
import Img from "../../assests/img/img-3.jpg"
import { AiOutlineHeart } from "react-icons/ai";

const LimeCard=({image,name,category,price})=>{
  return(
  <div className="CategoryCard">
      <div className="CategoryImg">
        <img 
         src={image}
         alt="Category card Image"
         className="CatCard-Img"
        />
        <a href="/" className="LikeIcon"><AiOutlineHeart/></a>
      </div>
      <div className="CatCard-Description">
        <div className="First-Desc">
         <h3>{name}...</h3>
         <a>{category}</a>
        </div>
         <a className="PriceBtn">${price}</a>
      </div>
  </div>
  )
}

export default LimeCard