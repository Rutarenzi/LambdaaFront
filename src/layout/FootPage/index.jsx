import "./FootPage.css";
import Img from "../../assests/img/img-2.jpg"
import { LinkCard } from "../../components";
import {AiOutlineFacebook,AiOutlineLinkedin,AiOutlineInstagram,AiOutlineTwitter} from "react-icons/ai";
import Links from "./constant";
const FootPage =()=>{
  return (
    <div className="FootPage">
        <div className="FootPage-Container">
          <div className="firstLinks">
            {
              Links.map((item,index)=>(
                <LinkCard
                key={index}
                 Header={item.name}
                 links={item.linker}
                />
              ))
            }
           
          </div>
          <div className="FootIcon-Container">
            <div className="socialIcon-Container">
              <a href="#"><AiOutlineFacebook/></a>
              <a href="#"><AiOutlineInstagram/></a>
              <a href="#"><AiOutlineTwitter/></a>
              <a href="#"><AiOutlineLinkedin/></a>
            </div>
            <div className="App-Container">
              <h3>Download The App</h3>
               <div className="AppImg-Container">
                 <img
                 src={Img} 
                 alt="hello"
                 className="App-Img"
                 />
                  <img
                 src={Img} 
                 alt="hello"
                 className="App-Img"
                 />
               </div>
            </div>
          </div>
          
             <br></br>
          <div className="select-Category">
            <form>
              <select className="selector">
                <option>Popular category</option>
                <option>Hello</option>
                <option>Hello</option>
                <option>Hello</option>
                <option>Hello</option>
              </select>
            </form>
            </div>
            <hr></hr>
            <div className="CopyRight">
              <p>Copyright @ 2023 Euphoria Pvt Ltd.All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default FootPage;