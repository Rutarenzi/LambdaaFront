
import "./CategoryCard.css";


const CategoryCard=({image,name})=>{
  return(
  <div className="CategoryCard">
      <div className="CategoryImg">
        <img 
         src={image}
         alt="Category card Image"
         className="CatCard-Img"
        />
      </div>
      <div className="CatCard-Description">
        <div className="First-Desc">
         <h3>{name}</h3>
         <a>Explore More!</a>
        </div>
        <a className="arrow">&rarr;</a>
      </div>
  </div>
  )
}

export default CategoryCard