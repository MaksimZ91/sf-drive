import React, { useState, useEffect } from "react"
import Logo from "./logo"
import Navbar from "./navbar"


function Header (){
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
     }, []);
     
      return (
      <>
        <header className={scroll < 90 ? "header" : "header active"}>
          <Logo/>
          <Navbar/>
          <img className="header__mobile_menu" src="../src/img/mobile_menu.svg" alt="mobile_menu"></img>
        </header>
      </>
    );  
}

export default Header