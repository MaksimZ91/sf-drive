import  React, { useState } from "react";
import Table from "./table"



function Calendarb (props) {
const curentDate = new Date()
const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']    
const [dateMon, setDateMon]=useState(curentDate)
const month = dateMon.getMonth()
const year = dateMon.getFullYear()


  function handelMonthDown  (month, year){
    const date = new Date(year, month - 1)
    setDateMon(date)
  }

const selectCurentMonthDown = () => handelMonthDown(month, year)

  function handelMonthUp  (month, year){  
  const date = new Date(year, month + 1)  
  setDateMon(date)
  }

  const selectCurentMonthUp = () => handelMonthUp(month, year, curentDate)
  
   function handelYearDown (year){
      const date = new Date(year - 1, month)
      setDateMon(date)
   }

    const selectCurentYearDown = () => handelYearDown(year)

    function handelYearUp (year){
      const date = new Date(year + 1, month)
      setDateMon(date)
    }

      const selectCurentYearUp = () => handelYearUp(year, curentDate)

  
   return(   
     <div className={`${props.value.calendName}`}>
       <div className={`${props.value.calendName}_date`}>
      <div className={`${props.value.calendName}_date_mons`} ><img  src="./src/img/chevron-left.svg" onClick={selectCurentMonthDown}/><span>{months[props.value.month]}</span><img src="./src/img/chevron-right.svg" onClick={selectCurentMonthUp}/></div>
       <div className={`${props.value.calendName}_date_year`}><img  src="./src/img/chevron-left.svg" onClick={selectCurentYearDown}/><span>{dateMon.getFullYear()}</span><img  src="./src/img/chevron-right.svg"onClick={selectCurentYearUp}/></div>
      </div>
      <Table value={{month:props.value.month, year:dateMon.getFullYear(), name:props.value.name, tableName:props.value.calendName, isHide:props.value.setHied}}/>
      </div>
  )
}

export default Calendarb
