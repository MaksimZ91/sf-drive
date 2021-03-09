import React, {useContext, useState} from "react"
import {monthDay} from './calc'
import { FormContex } from './formContex'





function Table (props) {
  const {fixDate} =useContext(FormContex)
  const calen = monthDay(props.value.year, props.value.month)
  const name = props.value.name  


  return(
    <>
    <table className={`${props.value.tableName}_table`}>
    <tbody>
        <tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>
        {calen.map((week, index)=> <tr key={index}>{week.map((day, index) => day ? <td key={index}><input type ='button' onClick={() =>fixDate(day)} name={name} defaultValue={day.getDate()}/></td>:<td key={index}></td>)}</tr>)}
    </tbody>
      </table>   
    </>
  )
}

export default Table