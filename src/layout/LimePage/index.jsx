import "./LimePage.css";
import LimeCard from "../../components/LimeCard";
import SectionHeader from "../../components/SectionHeader";
import Lime from "./constant";

const LimePage =()=> {
    return (
        <div className="LimeSection">
        <SectionHeader HearderName="In The Limelight"/>
       <div className="LimeGrid">
        {Lime.map((item, index)=>(
            <LimeCard
            key={index}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
            
            />
        ))}
       </div>
</div>
    )
}

export default LimePage;