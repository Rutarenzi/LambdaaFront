import "./LinkCard.css"


const LinkCard =({Header,links})=> {
    return (
       <div className="LinkCard">
            <h3>{Header}</h3>
            {links.map((item, index)=>(
                <a key={index}>{item}</a>
            ))}
            
       </div>
    )
}

export default LinkCard;