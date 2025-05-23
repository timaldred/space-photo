import { useState, useEffect } from 'react';
import React from 'react'
import NavBar from './NavBar'
import BigPhoto from './BigPhoto'
import Header from './Header';

export default function PhotoSelector() {
    const [currentDate, setCurrentDate] = useState(null);
    const [yesterdayDate, setYesterdayDate] = useState(null);
    const [lastYearDate, setLastYearDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {

        // this bit sets the dates up (ie, today, yesterday)

        const initialize = async () => {
          try {
            // get the initial info from the nasa api
            const apiKey = process.env.REACT_APP_NASA_API_KEY;
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await response.json();
            
            // find today's date (according to nasa)
            const currentDate = data.date;
            
            // from today's date, calculate yesterday's date
            const yesterday = new Date(currentDate);
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayFormatted = yesterday.toISOString().split('T')[0];
            
            // calculate last year's date
            const lastYear = new Date(currentDate);
            lastYear.setFullYear(lastYear.getFullYear() - 1);
            const lastYearFormatted = lastYear.toISOString().split('T')[0];
            
            // set those dates as usable variables
            setCurrentDate(currentDate);
            setYesterdayDate(yesterdayFormatted);
            setLastYearDate(lastYearFormatted);
            
            // use today's date as the default so that there's a picture to load to begin with
            setSelectedDate(currentDate);

          } finally {
            setInitializing(false);
          }
        };
        
        initialize();
      }, []);

      // this bit picks a random date from the nasa databse

      const handleDateSelect = (date) => {
        if (date === "random") {

          const startDate = new Date('1995-06-16');
          const endDate = new Date(); 
          
          const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
          const randomDate = new Date(randomTime);
          const randomDateFormatted = randomDate.toISOString().split('T')[0];
          
          setSelectedDate(randomDateFormatted);
        } else {
          setSelectedDate(date);
        }
      };
      
      // this bit finds the photo that relates to the date chosen

      useEffect(() => {
        if (initializing || !selectedDate) return;
      
        const fetchPhoto = async () => {
          setIsLoading(true);
          try {
            const apiKey = process.env.REACT_APP_NASA_API_KEY;
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}`);
            const data = await response.json();
            setPhoto(data);
          } catch (error) {
            console.error('Error fetching photo:', error);
          } finally {
            setIsLoading(false);
          }
        };
        
        fetchPhoto();
      }, [selectedDate, initializing]);
      
      // scroll to top when photo changes
      
      useEffect(() => {
        if (!initializing && photo) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, [photo, initializing]);
            
      // loading page

      if (initializing) {
        return <div>Loading...</div>;
      }

  return (
    <div>
      
      <BigPhoto 
        photo={photo} 
        isLoading={isLoading}  />

      <Header
        title={"See more pictures"} />

      <NavBar    
        currentDate={currentDate}
        yesterdayDate={yesterdayDate}
        lastYearDate={lastYearDate}
        selectedDate={selectedDate} 
        onDateSelect={handleDateSelect} />

    </div>
  )
}
