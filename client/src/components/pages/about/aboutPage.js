import  React, {useContext} from "react";
import About from "./about"
import Contact from "./contact"
import Team from "./team"
import Footer from "../../footer/footer"
import Authorpage from '../main/authorPgae'
import Recovery from "../main/recoveryPage";
import { FormContex } from '../../contextApp'

function Aboutpage (){ 
  const {openAuthor, setOpenAuthor, recovery, setRevocery} = useContext(FormContex)

  
  return(
    <>
    <main className={(recovery||openAuthor)?'activeMain':''}>
    {openAuthor?<Authorpage value={{recov:setRevocery,closeAuthor:setOpenAuthor}}/>:""}
    {recovery?<Recovery value={{recov:setRevocery,backStep:setOpenAuthor}}/>:""} 
    <About/>
    <Contact/>
    <Team/>
    </main> 
    <Footer/>
    </>
  )
}

export default Aboutpage