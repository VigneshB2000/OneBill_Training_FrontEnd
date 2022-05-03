class Parent extends React.Component{
    constructor(props){
        super(props);
        console.log("1. Constructor initializing the state");
        this.state = {
            name: "Dinesh",
        };
    }

    shouldComponentUpdate(){
        console.log("3. Component Should Update");
        return true; //Dinesh will Change Mohan
    } // If return False Dinersh will not Change
updateState = () =>{
    console.log("At Updating Phase");
    this.setState({
        name:"Mohan"
    });
};
render(){
    console.log("2. Render the State");
    return(
        <div>
            <h1>Hello Me. {this.state.name}</h1>
            <button onClick = {this.updateState}>Change</button>
        </div>
    );
}

getSnapShotBeforeUpdate(prevProps, prevState){
    console.log("4. Get SnapShot Before update" + prevState);
    return prevState.name;
}

componentDidUpdate(prevprops, prevState, SnapShot){
    console.log("5. ComponentDidUpdate() with prevState : "+SnapShot);
}
}
/* constructor(props){

} */

ReactDOM.render(<Parent />, document.getElementById("root"));