function Function1() {
    var a1 = "Hello";
    const block = (a) => {
      a1 = a;
      console.log(a1);
    };
    return (
      <div>
        <h1>{a1}</h1>
        <button onClick={block("User")}>Click here</button>
      </div>
    );
  }
  
  ReactDOM.render(<Function1 />, document.getElementById("root"));
  