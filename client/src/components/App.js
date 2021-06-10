import  React from "react";
import Header from "./header/header"
import Routs from './Routs'
import { BrowserRouter, Switch} from "react-router-dom"
import {FormProvider} from './contextApp'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from "../js/apollo-client.ts";


function App () {
    
  return (  
    <ApolloProvider client={ apolloClient }>
    <FormProvider>
    <BrowserRouter>
    <Header/>
    <Switch> 
    <Routs/>
    </Switch> 
    </BrowserRouter>  
    </FormProvider> 
    </ApolloProvider>  
    
  ) 
          
    
}

export default App;