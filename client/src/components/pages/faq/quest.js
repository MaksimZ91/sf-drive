import React, { useState } from "react"



function Quest (props) {

 const [open, setOpen]= useState (false) 
  const click = () => {
    setOpen (!open)
  }   

  return(  
    <>
    <div className={!open?"question_quest": "question_quest active"}
    onClick={click}>
      <p>{props.e.quest}</p>
      <img
        className="question_quest-arrow" 
        src="../src/img/arrow.svg"
        alt="arrow">
      </img>
      <img
        className="question_quest_arrow-answer"
        src="../src/img/arrow_revers.svg"
        alt="arrow">
      </img>
    </div>
    <div
      className={!open?"question_answer": "question_answer active"}>
        <p>{props.e.answer}</p>
    </div>
    </>
  )

}
export default Quest




