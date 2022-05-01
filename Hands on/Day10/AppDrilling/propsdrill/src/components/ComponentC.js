import React from "react";
import { useConsumer } from "../context/Context";

function ComponentC(props) {
  return (
    <div>
      {/* {props.uname} //props drilling */}
      <useConsumer>
        {" "}
        {(data) => {
          return <p> {data} </p>;
        }}
      </useConsumer>{" "}
      {props.uname}
    </div>
  );
}

export default ComponentC;
