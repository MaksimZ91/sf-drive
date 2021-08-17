import React from "react"
import Quest from "./quest"


function Question (){
  const quest =[
  {quest:"Могу ли я отменить бронь?", answer:"answer",id:"1"},
  {quest:"Могу ли я вернуть деньги, если не подошёл автомобиль?", answer:"answer",id:"2"},
  {quest:"Что делать, если случилось ДТП?", answer:"answer", id:"3"},
  {quest:"Могу ли я оставить автомобиль в удобном для меня месте?", answer:"Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.",id:"4"},
  {quest:"Что делать, если собственник просит заплатить ему напрямую?", answer:"answer",id:"5"},
  {quest:"Что делать, если собственник просит заплатить ему напрямую?", answer:"answer",id:"6"}
]
   return (
  <section className="question">
    {quest.map (e => <Quest e={e} key= {e.id}/>)}
  </section>  
  )
}

export default Question