import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from "./NavBar";

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            // eslint-disable-next-line 
            const res = await fetch ('https://api.nasa.gov/planetary/apod?api_key=EEN6Wbe9O99yQUA10N9jJJGrdyXGHw1jjskuGJRY'           
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if(!photoData) return <div />;

    return(
        <>
        <NavBar />
        <div>
            {photoData.media_type === "image" ? (
            <img 
                src={photoData.url} 
                alt={photoData.title} 
                className="photo"
            />
            ) : (
                <iframe 
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                />
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
            </div>
        </div>

    </>
    )
}