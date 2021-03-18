import  React, {useContext} from "react";
import Header from "./header/header"
import Aboutpage from "./pages/about/aboutPage"
import Mainpage from "./pages/main/mainPage"
import Faq from "./pages/faq/Faq"
import Registpage from "./pages/registr/registPage"
import Newpage from './pages/new/newPage'
import {Route, BrowserRouter, Switch} from "react-router-dom"
import {FormProvider} from './contextApp'
import { FormContex } from './contextApp'



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
        <Route path="/" component={Newpage} exact/>
        </>
        )
    }
}

export default Routs