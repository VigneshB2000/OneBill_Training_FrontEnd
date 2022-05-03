import axios from "axios";
import React, { Component } from "react";

class PostData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault(); //to avoid page refresh
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <h1>Post Data</h1>
        <div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
            <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
            <br />
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}></input>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostData;
