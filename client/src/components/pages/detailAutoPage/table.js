import React, { useEffect, useState }  from "react"
import { monthDay, areEqual } from '../../../js/calc'






function Table (props) {
  const [startDate, setStartDate]=useState('')
  const [endDate, setEndDate]=useState('')
  const curentDay= new Date() 
  const calen = monthDay(props.value.year, props.value.month)
  const name = props.value.name

  const selectRangeDate = day => {
   if (!startDate) {
      return setStartDate(day)
    }else if (!endDate) {
      return setEndDate(day)
    }else if (startDate&&endDate){
      setStartDate(day)
      setEndDate('')
    }    
  }
  console.log(startDate, endDate)


  return(
    <>
    <table className={`${props.value.tableName}_table`}>
    <tbody>
        <tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>
        {calen.map((week, index)=> <tr key={index}>{week.map((day, index) => day ? <td key={index} ><input className={areEqual(day,curentDay)?`${props.value.tableName}_table_curentDay`:''}type ='button'  onClick={()=>selectRangeDate(day)} name={name} defaultValue={day.getDate()}/></td>:<td key={index}></td>)}</tr>)}
    </tbody>
      </table>   
    </>
  )
}

export default Table