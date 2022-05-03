import React from "react";
//import useContext, { useConsumer } from "../context/Context";

function ComponentC(props) {
  // const context = {props.uname}
  return (
    <div>
      {/* {props.uname} //props drilling */}
      {/* <useConsumer>
        {" "}
        {(data) => {
          return <p> {data} </p>;
        }}
      </useConsumer>{" "}
      {props.uname} */}
      Data:{props.uname}
    </div>
  );
}

export default ComponentC;
