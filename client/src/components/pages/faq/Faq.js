import  React, {useContext} from "react";
import Titelfaq from "./titelFaq"
import Question from "./question"
import Footer from "../../footer/footer"
import Authorpage from '../main/authorPgae'
import Recovery from "../main/recoveryPage";
import { FormContex } from '../../contextApp'




function Faq (){
  const {openAuthor, setOpenAuthor, recovery, setRevocery} = useContext(FormContex)
  return(
    <>
    <main className={(recovery||openAuthor)?'activeMain':''}>
    {openAuthor?<Authorpage value={{recov:setRevocery,closeAuthor:setOpenAuthor}}/>:""}
    {recovery?<Recovery value={{recov:setRevocery,backStep:setOpenAuthor}}/>:""} 
    <Titelfaq/>
    <Question/>
    </main> 
    <Footer/>
    </>
  )
}

export default Faq