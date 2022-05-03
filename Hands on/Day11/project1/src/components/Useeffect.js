import React, { useState, useEffect } from "react";

function Useeffect() {
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
  });
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clicked {count}</button>
    </div>
  );
}

export default Useeffect;
