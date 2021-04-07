import React,{ useState } from "react";
import { format } from "date-fns";
import { DateRange, Calendar } from "react-date-range";
import { ru } from "react-date-range/dist/locale";

export default function CustomCalendar(props) {
  const { multiple } = props;
  const [rangeDate, setRangeDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      color:'#61A199',
      key: "selection",
      
    }
  ]);
  console.log(rangeDate.date)
  if (
    format(rangeDate[0].startDate, "yyyy-MM-dd") !==
    format(rangeDate[0].endDate, "yyyy-MM-dd")
  ) {
    console.log("Начало периода: " + rangeDate[0].startDate);
    console.log("Конец периода: " + rangeDate[0].endDate);
  }
  return multiple ? (
    <DateRange
      onChange={(item) => setRangeDate([item.selection])}
      showMonthAndYearPickers={false}
      showMonthArrow={false}
      showDateDisplay={false}
      moveRangeOnFirstSelection={false} // отвечает за обнуление startDate
      months={2}
      ranges={rangeDate}
      direction="horizontal"
      locale={ru}
      
    />
  ) : (
    <Calendar
      onChange={(item) => console.log("Выбранная дата: " + item)}
      date={new Date()}
      locale={ru}
    />
  );
}
