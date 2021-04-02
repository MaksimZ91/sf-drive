import  React, {useContext} from "react";
import Aboutpage from "./pages/about/aboutPage"
import Mainpage from "./pages/main/mainPage"
import Faq from "./pages/faq/Faq"
import Registpage from "./pages/registr/registPage"
import {Route} from "react-router-dom"
import { FormContex } from './contextApp'
import Autopage from './pages/autoList/Autopage'
import Newpage from './pages/autoList/autoListPage'
import DetailAutoPage from './pages/detailAutoPage/detailAutoPage'




function Routs (){
    const {isAuthen} = useContext(FormContex)
    if (!isAuthen){ 
        return(
        <>
        <Route path="/" component={Mainpage} exact/>
        <Route path="/about" component={Aboutpage} exact/>
        <Route path="/registr" component={Registpage}/>
        <Route path="/faq" component={Faq}/>  
        </>
        )
    }else{
      
        return(
        <>           
        <Route path="/" component={DetailAutoPage} exact/>
        <Route path="/myAuto" component={Autopage} exact/>
        </>
        )
    }
}

export default Routs