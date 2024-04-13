import './BigPage.css';
import { BigCard } from '../../components';
import SectionHeader from '../../components/SectionHeader';
const card=()=>{
    return(
        <div className="BigC">
        <SectionHeader HearderName="Big Saving Zone"/>
        <div className="grid-container">
        <BigCard />
        <BigCard />
        <BigCard />
    </div>
    <div className="grid-container2">
    <BigCard />
    <BigCard />
    </div>
    </div>
    )
}

export default card