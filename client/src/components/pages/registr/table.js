import React, {useContext} from "react"
import { monthDay, areEqual } from '../../../js/calc'
import { RegistContext } from './formContex'





function Table (props) {
  const curentDay= new Date()
  const {fixDate} =useContext(RegistContext)
  const calen = monthDay(props.value.year, props.value.month)
  const name = props.value.name
  
  const handelDate =(day)=>{
    fixDate(day)
    props.value.isHide(false)

  }



  return(
    <>
    <table className={`${props.value.tableName}_table`}>
    <tbody>
        <tr><td>пн</td><td>вт</td><td>ср</td><td>чт</td><td>пт</td><td>сб</td><td>вс</td></tr>
        {calen.map((week, index)=> <tr key={index}>{week.map((day, index) => day ? <td key={index} ><input className={areEqual(day,curentDay)?`${props.value.tableName}_table_curentDay`:''}type ='button'  onClick={() =>handelDate(day)}  name={name} defaultValue={day.getDate()}/></td>:<td key={index}></td>)}</tr>)}
    </tbody>
      </table>   
    </>
  )
}

export default Table