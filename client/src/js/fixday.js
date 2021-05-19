export const fixDate =(date) => {
    const newDate = new Date(date)
    let day =newDate.getDate()
    let month = newDate.getMonth()+1
    if (day<10){ 
      day="0"+ day
    }
    if (month<10){
      month = "0"+ month
    }
   return  day+"."+month+"."+ newDate.getFullYear()
  }