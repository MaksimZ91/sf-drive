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


