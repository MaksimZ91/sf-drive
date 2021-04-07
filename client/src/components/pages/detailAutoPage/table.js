import React, { useEffect, useState }  from "react"
import { monthDay, areEqual } from '../../../js/calc'
import { useSelector, useDispatch } from 'react-redux'
import { addStartDate, addEndDate } from '../../../../redux/actions/actions'





function Table (props) { 
  const calen = monthDay(props.value.year, props.value.month)
  const name = props.value.tableName
  const state = useSelector((state)=>{
    return state.calen})
const dispatch = useDispatch()



  const selectRangeDate = day => {
   if (!state.startDate)return dispatch(addStartDate(day))     
   if (state.startDate > day){      
      let buff = state.startDate
      dispatch(addStartDate(day))
     return dispatch(addEndDate(buff))}
  if (!state.endDate) return dispatch(addEndDate(day))
  if (state.startDate&&state.endDate){
      dispatch(addStartDate(day))
      dispatch(addEndDate(null))
    }    
  }  


  function setClassName (day, startDate, endDate){
    if (areEqual(day,startDate)) return `${props.value.tableName}_table_startday`
    if (areEqual(day,endDate)) return `${props.value.tableName}_table_endday`  
    if (startDate < day && day < endDate)
      return `${props.value.tableName}_table_inrangeday`
  }
    
    

  


  return(
    <>
    <table className={`${props.value.tableName}_table`} cellSpacing="0" cellPadding="0">
    <tbody>
        <tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>
        {calen.map((week, index)=> <tr key={index}>{week.map((day, index) => day ? <td className={setClassName(day,state.startDate, state.endDate)} key={index} ><input type ='button'  onClick={()=>selectRangeDate(day)} name={name} defaultValue={day.getDate()}/></td>:<td key={index}></td>)}</tr>)}
    </tbody>
      </table>   
    </>
  )
}

export default Table