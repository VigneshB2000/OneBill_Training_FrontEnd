import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [fetchData, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Axios Get</h1>
      {fetchData.map((v, i) => {
        return (
          <li key={i}>
            {v.id} ......... {v.title}
          </li>
        );
      })}
    </div>
  );
};

export default FetchData;
