import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NavBar({ currentDate, yesterdayDate, lastYearDate, selectedDate, onDateSelect }) {

  // set the boundaries for the date picker

  const minDate = new Date(1995, 5, 16);
  const maxDate = new Date();

  // change what the date picker gives out to match nasa's formatting

  const formatDateToYYYYMMDD = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="navbar">
    
      <div className="navbar-inner">
  
        <button onClick={() => onDateSelect(currentDate)}> Today </button>
        <button onClick={() => onDateSelect(yesterdayDate)}> Yesterday </button>
        <button onClick={() => onDateSelect(lastYearDate)}> Last Year </button>
        <button onClick={() => onDateSelect("random")}> Random </button>
      
      </div>
    
    <p>Or pick a specific date:</p>
    <div className="spacer"></div>

      <div className="bottomnav">
      
        <DatePicker
          selected={selectedDate}
          showFiveRowMonthYearPicker
          fixedHeight
          onChange={(date) => onDateSelect(formatDateToYYYYMMDD(date))}
          minDate={minDate}
          maxDate={maxDate}
          dateFormat="MMMM d, yyyy"
          className="form-control"
            />
       </div>
</div>
  )
}