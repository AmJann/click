
import React from 'react'
import { useState, useEffect } from "react";


function Location() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      fetch("https://api.ipdata.co/?api-key=b9d50f3dce9339757c8ae0f3036e689d991ebfe829c4869dacf3660a")
        .then(response => response.json())
        .then(data => {
          setLocation({
            city: data.city,
            country: data.country_name,
            state: data.region
          });
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    const locationSubmit = (e) => {

        e.preventDefault();
        const url = process.env.REACT_APP_API_URL + `location_create/`;
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({city:location.city,state:location.state, country:location.country}),
        };
        fetch(url, opts)
          .then((res) => res.json())
          .then((data) => {
              console.log(data)
              return data
            })
          .then((data) => setLocation(data))
          .finally(
            <div>        {location && (
                <div>
                  <p>City: {location.city}</p>
                  <p>State: {location.state}</p>
                  <p>Country: {location.country}</p>
                </div>
              )}
              s</div>
          )

    
      };


  
    return (
      <div>
        {location && (
          <div>
            <p>City: {location.city}</p>
            <p>State: {location.state}</p>
            <p>Country: {location.country}</p>
          </div>
        )}
        <button onClick={locationSubmit}>Location</button>
      </div>
    );
  }
  

export default Location