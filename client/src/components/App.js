import  React from "react";
import Header from "./header/header"
import Routs from './Routs'
import { BrowserRouter, Switch} from "react-router-dom"
import {FormProvider} from './contextApp'


function App () {
  
  return (  
    <FormProvider>
    <BrowserRouter>
    <Header/>
    <Switch> 
    <Routs/>
    </Switch> 
    </BrowserRouter>  
    </FormProvider>   
    
  ) 
          
    
}

export default App;