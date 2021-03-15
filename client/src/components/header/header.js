import React, { useState, useEffect,useContext } from "react"
import { FormContex } from '../contextApp'
import Logo from "./logo"
import Navbar from "./navbar"
import Navbarmobile from "./navbarMobile"


function Header (){
  const [openMenu, setOpenMenu]=useState(false)
  const [scroll, setScroll] = useState(0);
  const {setOpenAuthor,recovery, openAuthor} = useContext(FormContex)   
  const open= setOpenAuthor
  const handleScroll = () => {
    setScroll(window.scrollY);
  };


  const handelClick = () =>{
    setOpenMenu(!openMenu)
  }


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
     }, []);
     
      return (
      <>
        <header className={(((scroll < 90)||(recovery||openAuthor)) ? "header" : "header active")}>
         {openMenu?"":<Logo/>}
         <Navbar value={{openAuth:open, diss:openAuthor, rec:recovery, openMobileMenu:openMenu}} />
         {openMenu?<Navbarmobile  value={{openAuth:open, diss:openAuthor, rec:recovery, openMobileMenu:handelClick}}/>:""}
         {openMenu?"":<img className="header__mobile_menu" src="../src/img/mobile_menu.svg" alt="mobile_menu" onClick={handelClick}/>}
        </header>
      </>
    );  
}

export default Header