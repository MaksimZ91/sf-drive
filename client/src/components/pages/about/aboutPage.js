import  React, {useContext} from "react";
import About from "./about"
import Contact from "./contact"
import Team from "./team"
import Footer from "../../footer/footer"
import Authorpage from '../autn/authorPgae'
import Recovery from "../autn/recoveryPage";
import { FormContex } from '../../contextApp'

function Aboutpage (){ 
  const {openAuthor, setOpenAuthor, recovery, setRecovery} = useContext(FormContex)

  
  return(
    <>
    <main className={(recovery||openAuthor)?'activeMain':''}>
    {openAuthor?<Authorpage value={{recov:setRecovery,closeAuthor:setOpenAuthor}}/>:""}
    {recovery?<Recovery value={{recov:setRecovery,backStep:setOpenAuthor}}/>:""} 
    <About/>
    <Contact/>
    <Team/>
    </main> 
    <Footer/>
    </>
  )
}

export default Aboutpage