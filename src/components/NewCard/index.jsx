import './NewCard.css'
const NewCard =({image,name})=>{
 return (
    <div className="NewCard-container">
      <div className="ImgContainer">
      <img src={image} alt="Photo" className="CardImg"/>
      </div>
       <h4>{name}</h4>   
    </div>
 )
}

export default NewCard;