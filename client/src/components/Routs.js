import  React, { useContext } from "react";
import Aboutpage from "./pages/about/aboutPage"
import Mainpage from "./pages/main/mainPage"
import Faq from "./pages/faq/Faq"
import Registpage from "./pages/registr/registPage"
import { Route } from "react-router-dom"
import { FormContex } from './contextApp'
import Autopage from './pages/autoList/Autopage'
import Newpage from './pages/autoList/autoListPage'
import DetailAutoPage from './pages/detailAutoPage/detailAutoPage'
import Addautopage from './pages/addAuto/addAutoPage'
import Optionsautopage from './pages/addAuto/optionsauto'
import Addautophoto from './pages/addAuto/addautophoto'
import AddDocumentPhoto from './pages/addAuto/addocumentphoto'
import Confirmation from "./pages/addAuto/confirmation";
import ArendaPage from "./pages/arendaPage/arendaPage";
import BookingPage from "./pages/bookingPage/BookingPage";
import BookingCart from "./pages/bookingPage/bookingCart";





function Routs (){
    const {isAuthen} = useContext(FormContex)
    if (!isAuthen){ 
        return(
        <>
        <Route path="/" component={ Mainpage } exact/>
        <Route path="/about" component={ Aboutpage } exact/>
        <Route path="/registr" component={ Registpage }/>
        <Route path="/faq" component={ Faq }/>  
        </>
        )
    }else{
      
        return(
        <>           
        <Route path="/" component={ Newpage } exact/>
        <Route path="/auto" component= { DetailAutoPage } exact/>
        <Route path="/myAuto" component={ Autopage } exact/>
        <Route path="/addauto" component={ Addautopage } exact/>
        <Route path="/confirm" component={ Confirmation } exact/>
        <Route path="/addauto/options" component={ Optionsautopage } exact/>
        <Route path="/addauto/photo" component={ Addautophoto } exact/>
        <Route path="/addauto/documentphoto" component={ AddDocumentPhoto } exact/>
        <Route path="/auto/arenda" component= { ArendaPage } />
        <Route path="/booking" component = { BookingPage } />
        <Route path="/cart" component = { BookingCart } />
        </>
        )
    }
}

export default Routs