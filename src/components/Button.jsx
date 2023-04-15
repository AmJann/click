import React from 'react'
import { useState, useEffect } from "react";


function Button(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchCount() {
      const response = await fetch("https://ekkblykhielmnvufqelz.supabase.co/click_edit/6e170058-bc58-4a8b-a33e-2c53c4ea14b6/");
      const data = await response.json();
      setCount(parseInt(data.count));
    }
    fetchCount();
  }, []);

  const incrementCount = async () => {
    props.locationSubmit()
    await fetch("https://ekkblykhielmnvufqelz.supabase.co/click_edit/6e170058-bc58-4a8b-a33e-2c53c4ea14b6/", {
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





