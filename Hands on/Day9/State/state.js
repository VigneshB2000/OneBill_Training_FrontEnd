class Welcome extends React.Component {
     //state exists only in class component not fc
    //class component is stateful    
    state = {
            name: "Gokul",
       };

        changeName(){
            // set statement is Asynchronous in nature
            this.setState({
                name:"Rajan"
            })
        }
        render() {
            return(
            <div>
          <h1> {this.state.name} </h1>
          <button onClick = {()=>this.changeName()}>Click here</button>
          </div>
            );
        }
    }
    ReactDOM.render(<Welcome />, document.getElementById("root"));