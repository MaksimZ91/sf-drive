import React from "react"


function Person (props){
   return (
        <div className={props.el.id}>
        <img className="team__img" src={props.el.img} alt={props.el.name}></img>
        <img className="team_img-mobile" src={props.el.imgMobile} alt={props.el.name}></img>
        <p className="team__name">{props.el.name}</p>
        <p className="team__position">{props.el.teamPosition}</p>
        </div>
        )
    }
    
    export default Person