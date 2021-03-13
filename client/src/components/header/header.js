import React, { useState, useEffect,useContext, useCallback } from "react"
import { FormContex } from '../contextApp'
import Logo from "./logo"
import Navbar from "./navbar"


function Header (){
  const [scroll, setScroll] = useState(0);
  const {setOpenAuthor,recovery, openAuthor} = useContext(FormContex)   
  const open= setOpenAuthor
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
console.log(recovery,openAuthor)


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
     }, []);
     
      return (
      <>
        <header className={((scroll < 90)||(recovery||openAuthor)) ? "header" : "header active"}>
          <Logo/>
          <Navbar value={{openAuth:open, diss:openAuthor, rec:recovery}} />
          <img className="header__mobile_menu" src="../src/img/mobile_menu.svg" alt="mobile_menu"></img>
        </header>
      </>
    );  
}

export default Header