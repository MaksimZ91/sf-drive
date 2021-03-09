import React from "react"
import Person from "./person"


function Teammen (){
  const teammen = [{name:"Иван Иванов", img :"../src/img/IvanI.svg", imgMobile:"../src/img/IvanI_mobile.svg", teamPosition:"CEO", id:"team__IvanI"},
                {name:"Алексей Смирнов", img :"../src/img/AlekseyS.svg", imgMobile:"../src/img/AlekseyS_mobile.svg", teamPosition:"Frontend-разработчик", id:"team_AleksS"},
                {name:"Денис Ярцев", img :"../src/img/DenisYa.svg", imgMobile:"../src/img/DenisYa_mobile.svg", teamPosition:"Backend-разработчик", id:"team_DenisYa"},
                {name:"Николай Морозов", img :"../src/img/NikolaM.svg", imgMobile:"../src/img/NikolaM_mobile.svg", teamPosition:"Дизайне",id:"team__NikolaM"}
                
              ]      
            
  return (
  <div className="team__men">
    {teammen.map(el => <Person  key={el.id} el={el}/>  )}
  </div>
  )
}

export default Teammen



