import { useState, useEffect } from "react"
import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NavBarOld({ currentDate, yesterdayDate, lastYearDate, selectedDate, onDateSelect }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [descriptionOpen, setDescriptionOpen] = useState(false);
  
  const toggleDescription = () => {
    setDescriptionOpen(!descriptionOpen);
  };
  
  const minDate = new Date(1995, 5, 16);
  const maxDate = new Date();

  const formatDateToYYYYMMDD = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (

        
    <div className="navbar">

    <h1>
          See more pictures
        </h1>

        


      {!isMobile && (
        <div className="navbar2">
          <div className="box2">
            <button 
              className={selectedDate === currentDate ? 'active' : 'todaybutton'}
              onClick={() => onDateSelect(currentDate)}
              disabled={!currentDate}
            >
              Today
            </button>
          </div>
          <div className="box2">
            <button 
              className={selectedDate === yesterdayDate ? 'active' : 'yesterdaybutton'}
              onClick={() => onDateSelect(yesterdayDate)}
              disabled={!yesterdayDate}
            >
              Yesterday
            </button>
          </div>
          <div className="box2">
            <button 
              className={selectedDate === lastYearDate ? 'active' : 'lastyearbutton'}
              onClick={() => onDateSelect(lastYearDate)}
              disabled={!lastYearDate}
            >
              Last Year
            </button>
          </div>
          <div className="box2">
            <button 
              className='randombutton'
              onClick={() => onDateSelect("random")}
            >
              Random
            </button>
          </div>
          <div className="box2">
            <div className="datepicker">
              Heading <br />
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
        </div>
      )}

      {isMobile && (
        <div>
          <button
            onClick={toggleDescription}
            className="toggle-mobile"
          >
            <p>{descriptionOpen ? "Hide this menu" : "Show more photos"}</p>
          </button>

          {descriptionOpen && (
            <div className="navbar3">
              <div className="box2">
                <button 
                  className={selectedDate === currentDate ? 'active' : 'todaybutton'}
                  onClick={() => { 
                    onDateSelect(currentDate);
                    setDescriptionOpen(false);
                  }}
                  disabled={!currentDate}
                >
                  Today
                </button>
              </div>
              <div className="box2">
                <button 
                  className={selectedDate === yesterdayDate ? 'active' : 'yesterdaybutton'}
                  onClick={() => { 
                    onDateSelect(yesterdayDate);
                    setDescriptionOpen(false);
                  }}
                  disabled={!yesterdayDate}
                >
                  Yesterday
                </button>
              </div>
              <div className="box2">
                <button 
                  className={selectedDate === lastYearDate ? 'active' : 'lastyearbutton'}
                  onClick={() => { 
                    onDateSelect(lastYearDate);
                    setDescriptionOpen(false);
                  }}
                  disabled={!lastYearDate}
                >
                  Last Year
                </button>
              </div>
              <div className="box2">
                <button 
                  className='randombutton'
                  onClick={() => { 
                    onDateSelect('random');
                    setDescriptionOpen(false);
                  }}
                >
                  Random
                </button>
              </div>
              <div className="box2">
                <div className="date-picker">
                  Heading <br />
                  <DatePicker
                    selected={selectedDate}
                    showFiveRowMonthYearPicker
                    fixedHeight
                    onChange={(date) => onDateSelect(formatDateToYYYYMMDD(date))}
                    minDate={minDate}
                    maxDate={maxDate}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

    </div> 
  )
}