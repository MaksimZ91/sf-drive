import React from "react"
import Person from "./person"

function Women (){
  const teamwomen = [{name:"Ирина Деева", img :"../src/img/IrinaD.svg", imgMobile:"../src/img/IrinaD_mobile.svg", teamPosition:"Копирайтер", id:"team__IrinaD"},
                  {name:"Мария Стрелкова", img :"../src/img/MariyaS.svg", imgMobile:"../src/img/MariyaS_mobile.svg", teamPosition:"Frontend-разработчик", id:"team__MariyaS"},
                ]      
            
  return (
  <>
  <div className="team__women">
    {teamwomen.map(el => <Person  key={el.id} el={el}/>  )}
  </div>
  
  </>
  

  )
}

export default Women



