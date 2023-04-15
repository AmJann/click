import React from 'react'
import { useState, useEffect } from "react";


function Button(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("https://ekkblykhielmnvufqelz.supabase.co/click_edit/6e170058-bc58-4a8b-a33e-2c53c4ea14b6/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVra2JseWtoaWVsbW52dWZxZWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MTk5ODIsImV4cCI6MTk5NzA5NTk4Mn0.K0hZHBg52yPGu8NwT3wlT7lN2dsdcQI11q7m5sqxH60");
      const data = await response.json();
      setCount(parseInt(data.count));
    }
    fetchCount();
  }, []);

  const incrementCount = async () => {
    props.locationSubmit()
    await fetch("https://ekkblykhielmnvufqelz.supabase.co/click_edit/6e170058-bc58-4a8b-a33e-2c53c4ea14b6/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVra2JseWtoaWVsbW52dWZxZWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE1MTk5ODIsImV4cCI6MTk5NzA5NTk4Mn0.K0hZHBg52yPGu8NwT3wlT7lN2dsdcQI11q7m5sqxH60", {
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





