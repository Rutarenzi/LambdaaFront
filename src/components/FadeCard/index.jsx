
import './FadeCard.css';
import Img from "../../assests/img/img-3.jpg"
import {AiOutlineStar} from "react-icons/ai"

const FadeCard=()=>{
    return (
        <div className="FeedCart-Container">
            <div className="FeedTop">
               <img
                src={Img}
                alt="Hello world"
                className="FeedImg"
                height= "40px"
                width= "40px"
               />
               <div className="Star">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
               </div>
            </div>
            <h3>Floyd Miles</h3>
            <p>Floyd Miles Floyd Miles Floyd Miles Floyd Miles Floyd Miles
                Floyd Miles Floyd Miles Floyd Miles Floyd Miles Floyd Miles 
                Floyd Miles Floyd Miles Floyd Miles Floyd Miles Floyd Miles 
                Floyd Miles Floyd Miles Floyd Miles Floyd Miles Floyd Miles 
            </p>
        </div>
    )
}

export default FadeCard