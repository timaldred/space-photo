import React, { useState, useEffect } from 'react';

export default function BigPhoto({ photo, isLoading }) {

    // this bit hides the photo description to begin with

    const [descriptionOpen, setDescriptionOpen] = useState(false);

    const toggleDescription = () => {
      setDescriptionOpen(!descriptionOpen);
    };

    // this bit shows a loading screen while the data and photo are loaded

    if (isLoading) {
      return <div className="photobox">Searching space for a cool photo for you</div>;
    }
  
    if (!photo) {
      return <div className="photobox">Houston, we have a problem...</div>;
    }

  return (
    <div className="photobox">
    
      <div>
         <img src={photo.url} />
      </div>

      <div className="big-photo-description">
        <p><strong>{photo.title}</strong></p>
        <p>Date: {photo.date}</p>

        <div className="spacer"></div>

        <div>
          <button
            onClick={toggleDescription}
            className="toggle-desc" >

          <p>{descriptionOpen ? "Hide more information" : "Show more information"}</p>
          </button>
            
          {descriptionOpen && (
            
          <div className="explanation">
            <p>{photo.explanation}</p>
          </div>
          )}
        </div>

        <div className="spacer"></div>
        
        <p>
         <a href={photo.hdurl} target="new_window"  rel="noopener noreferrer">View in high resolution</a>
        </p>

      </div>
    </div>
  )
}
