import React, { useState, useEffect } from 'react';

export default function BigPhoto() {
    const [photoData, setPhotoData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const apiKey = process.env.REACT_APP_NASA_API_KEY;
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
                
                if (!response.ok) {
                    throw new Error(`NASA API error: ${response.status}`);
                }
                
                const data = await response.json();
                setPhotoData(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching NASA photo:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchPhoto();
    }, []); 

    if (loading) return <div className="photobox">Heading into space to catch a cool photo...</div>;
    if (error) return <div className="photobox">Houston, we have a problem!<br /> {error}</div>;
    if (!photoData) return <div className="photobox">Hmm. Can't find a p</div>; 


  return (
    <div className="photobox">
    
    <div>
            <img src={photoData.url} />
        </div>

        <div className="big-photo-description">
            <p><strong>{photoData.title}</strong></p>
            <p>Date: {photoData.date}</p>
            <p>
            <a href={photoData.hdurl} target="new_window"  rel="noopener noreferrer">View in high resolution</a></p>

        </div>
    
    
    </div>
  )
}
