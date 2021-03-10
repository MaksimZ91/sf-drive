let months = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  Novermber: 10,
  December: 11
}

let dayInMons =[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 
let week = [6, 0, 1, 2, 3, 4, 5];

export function areEqual(date, currentDate) {
  if (!date || !currentDate) return false;

  return (
    date.getFullYear() === currentDate.getFullYear() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getDate() === currentDate.getDate()
  );
}



export  function getDayOfWeek(date) {
 const dayOfWeek = date.getDay();
  return week[dayOfWeek]
}

export function leapYear (year){
  return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDayInMonth (date){
  const month = date.getMonth();
  const years = date.getFullYear();
  const daysInMonth = dayInMons[month];
  
  if (leapYear(years) && month === months.February) {
      return daysInMonth + 1;
  } else {   
      return daysInMonth;      
  }
}

 export function monthDay(year, month){
  let date = new Date (year, month)
  let result=[]
  let day=1
   let daysInMonth = getDayInMonth(date)
   let startDay=getDayOfWeek(date)  
   for (let i = 0; i < (daysInMonth+startDay)/7; i++) {
    result[i] = [];
        for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDay) || day > daysInMonth) {
            result[i][j] = undefined;
        } else {
            result[i][j] = new Date(year, month, day++);
        }
      }
    }
    
   return result
  }










