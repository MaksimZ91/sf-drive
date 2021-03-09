import  React from "react";
import Teammen from "./teamMen"
import Teamwomen from "./teamWomen"


function Team (){
  return (
    <>
    <section className="team">
                <h2>Команда</h2>
                <div className="team__content">
                   <Teammen/>
                   <Teamwomen/>
                </div>           
    </section>
    </>
  )
}

export default Team


/* <div className="team__women">
<div className="team__IrinaD">
    <img className="team__img" src="../src/img/IrinaD.svg" alt="Ирина Деева"></img>
    <img className="team_img-mobile" src="../src/img/IrinaD_mobile.svg" alt="Ирина Деева"></img>
    <p className="team__name">Ирина Деева</p>
    <p className="team__position">Копирайтер</p>
</div>
<div className="team__MariyaS">
    <img className="team__img" src="../src/img/MariyaS.svg" alt="Мария Стрелкова"></img>
    <img className="team_img-mobile" src="../src/img/MariyaS_mobile.svg" alt="Мария Стрелкова"></img>
    <p className="team__name">Мария Стрелкова</p>
    <p className="team__position">SMM</p>
</div>*/