import  React from "react";
import Titelfaq from "./titelFaq"
import Question from "./question"
import Footer from "../../footer/footer"

function Faq (){
  return(
    <>
    <main>
    <Titelfaq/>
    <Question/>
    </main> 
    <Footer/>
    </>
  )
}

export default Faq