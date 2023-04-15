import './App.css';
import Button from './components/Button';
import Location from './components/Location';
import { useState, useEffect} from "react";
import initialState from 'react'
import '../src/index.css'




function App() {
    const [location, setLocation] = useState(initialState);
    const [locations, setLocations] = useState([]);

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

    
        const url =  `https://click-django.onrender.com/location_create/`
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
 

    
      };

      function allLocations(){
        fetch(supabase + '/location/')
        .then(response => response.json())
        .then(data => setLocations(data))
        .catch(error => console.log(error));
}
allLocations()

   const table = {
    locations
   }   

      
  return (
    <div className="App">
      <Button locationSubmit = {locationSubmit}/>
      <h2>Your current location</h2>
      {location && (
          <div>
            <p>City: {location.city}</p>
            <p>State: {location.state}</p>
            <p>Country: {location.country}</p>
          </div>
        )}
{locations ? (
<table>
      <thead>
        <tr>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {locations.map(location => (
          <tr key={location.id}>
            <td>{location.city}</td>
            <td>{location.state}</td>
            <td>{location.country}</td>
          </tr>
        ))}
      </tbody>
    </table>) : ''
} 
    </div>
  );
}

export default App;
