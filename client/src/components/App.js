import  React from "react";
import Header from "./header/header"
import Aboutpage from "./pages/about/aboutPage"
import Mainpage from "./pages/main/mainPage"
import Faq from "./pages/faq/Faq"
import Registpage from "./pages/registr/registPage"
import {Route, BrowserRouter, Switch} from "react-router-dom"

function App () {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route path="/" component={Mainpage} exact/>
    <Route path="/about" component={Aboutpage} exact/>
    <Route path="/registr" component={Registpage}/>
    <Route path="/faq" component={Faq}/>    
    </Switch>    
    </BrowserRouter>  
  ) 
          
    
}

export default App;