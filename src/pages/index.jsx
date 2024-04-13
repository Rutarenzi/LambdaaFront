
import {  LandingPage,
    BannerPage,
    NewPage,
    BigPage,
    AdsPage,
    CategoryPage,
    LimePage,
    FootPage,
    FadebackPage
} from "../layout"

const Pages =()=>{
    return(
     <>
      <LandingPage />
      <div className="PageContainer">
         <BannerPage />
         <NewPage/>
         <BigPage/>
         <AdsPage/>
         < CategoryPage/>
         <LimePage/>
         <FadebackPage/>
         
      </div>
      <FootPage />
     </>
    )
}

export default Pages;
