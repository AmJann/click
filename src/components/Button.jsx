import React from 'react'
import { useEffect, useState } from "react";

function Button() {
const [counter, setCounter] = useState(0);
const [taco,setTaco] =useState([])
const [formData, setFormData] = useState({
    count: ""
  });

  function getData() {
    const url = process.env.REACT_APP_API_URL + "click_edit/6e170058-bc58-4a8b-a33e-2c53c4ea14b6/";
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          return data
        })
      .then((data) => setTaco(data))
      .finally(console.log())
      
     
  }

  useEffect(() => {
    getData();
    
  }, []);

  


 
    
    
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value, });
    console.log(formData)
  };

  const increase = () => {
    setCounter(parseInt(taco.count) + 1);
    console.log(counter)
    setFormData({count:counter})

  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + `click_edit/6e170058-bc58-4a8b-a33e-2c53c4ea14b6/`;
    const opts = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
          console.log(data)
          return data
        })
      .then((data) => setTaco(data))
      .finally(<h1>{taco ? <p>{taco.count}</p> : ""}</h1> )

  };



  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit()
  }

  return (
    <div>
        <h1>{taco ? <p>{taco.count}</p> : ""}</h1> 
    
            {/* <button name ='count' type="submit" value="Submit" onClick={increase}>
            Click me
            </button> */}
            <form onSubmit={handleSubmit}> 
            <button className ="submit button" type="submit" value="Submit" onClick={increase} >click</button>
            </form>
      
    </div>
  )
}

export default Button