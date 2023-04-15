import React from 'react'
import { useState, useEffect } from "react";


function Button(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("click-django.onrender.com/click_edit/63603faa-dbcf-452c-b295-40a5621ca0f9/");
      const data = await response.json();
      setCount(parseInt(data.count));
    }
    fetchCount();
  }, []);

  const incrementCount = async () => {
    props.locationSubmit()
    await fetch("click-django.onrender.com/click_edit/63603faa-dbcf-452c-b295-40a5621ca0f9/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        count: parseInt(count + 1)
      })
    });
    setCount(parseInt(count + 1));
  };

  return (
    <div>
      <p className='text'> Count: {count}</p>
      <button onClick={incrementCount}>Click Me!</button>
    </div>
  );
}

export default Button;





