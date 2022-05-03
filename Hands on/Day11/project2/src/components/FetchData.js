import React, { useState, useEffect } from "react";

function FetchData() {
  const [fetchData, setData] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>React Fetch API data</h1>
      {fetchData.map((v, i) => {
        return (
          <li key={i}>
            {v.id} ......... {v.title}
          </li>
        );
      })}
    </div>
  );
}

export default FetchData;
