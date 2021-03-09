import  React from "react";
import About from "./about"
import Contact from "./contact"
import Team from "./team"
import Footer from "../../footer/footer"
function Aboutpage (){
  return(
    <>
    <main>
    <About/>
    <Contact/>
    <Team/>
    </main> 
    <Footer/>
    </>
  )
}

export default Aboutpage