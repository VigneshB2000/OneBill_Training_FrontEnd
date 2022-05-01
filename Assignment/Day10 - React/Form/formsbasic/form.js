function Form() {
  const [uname, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [comments, setComments] = React.useState("");

  const update = (e) => {
    e.preventDefault();
    alert(uname + "s details has been entered");
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <fieldset>
          <legend>
            <b>Enter Your Details</b>
          </legend>
          <label>Name</label>
          <br />
          <input
            name="name"
            value={uname}
            type="text"
            onChange={(uname) => {
              setName(uname.target.value);
            }}
            required
          />
          <br />
          <label>Email</label>
          <br />
          <input
            name="email"
            value={email}
            type="email"
            onChange={(email) => {
              setEmail(email.target.value);
            }}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            name="password"
            value={password}
            type="password"
            onChange={(password) => {
              setPassword(password.target.value);
            }}
            required
          />
          <br />
          <label>Comments</label>
          <br />
          <textarea
            name="comments"
            value={comments}
            type="textarea"
            onChange={(comments) => {
              setComments(comments.target.value);
            }}
          />
          <br />
          <input type="submit" value="Submit" onClick={update} />
          <br />
        </fieldset>
      </form>
    </div>
  );
}

ReactDOM.render(<Form />, document.getElementById("root"));
