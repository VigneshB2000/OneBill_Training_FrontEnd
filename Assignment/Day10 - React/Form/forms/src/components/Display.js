import React from "react";

function Display(props) {
  return (
    <div>
      <fieldset>
        <legend>Your Details are :</legend>
        <ul>
          <li>Name : {props.name}</li>
          <li>Email: {props.email}</li>
          <li>Comments: {props.comments}</li>
        </ul>
      </fieldset>
    </div>
  );
}

export default Display;
