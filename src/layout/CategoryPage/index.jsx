import { CategoryCard } from "../../components";
import SectionHeader from "../../components/SectionHeader";
import "./CategoryPage.css";
import ForMen from "./constant";

const CategoryPage=()=>{
  return(
    <div className="CatC">
    <SectionHeader HearderName="Category For Men"/>
    <div className="CategoryGrid">
       {ForMen.map((item,index)=>(
        <CategoryCard image={item.image} name={item.name} key={index}/>
       ))}
    </div>
    <SectionHeader HearderName="Category For Women"/>
    <div className="CategoryGrid">
       {ForMen.map((item,index)=>(
        <CategoryCard image={item.image} name={item.name} key={index}/>
       ))}
    </div>
    </div>
    )
  
}

export default CategoryPage;