import  React from "react";
import Footersocial from "./footersocial";


function Footer (){
      return (
      <>
      <footer>
        <div className="footer__wrapper">
            <span>© SkillDrive Inc. 2020</span>
            <Footersocial/>
        </div>
    </footer>
      </>
    );  
}

export default Footer