class Parent extends React.Component{

    state={
        a:"Parent"
    }
render(){
    return <div>
         <h1>{this.state.a}</h1>
         <Child action={this.getChildData.bind(this)} />
    </div>
        }
getChildData(c){
    console.log(c);
    this.setState({
        a : c
    })
}

}

function Child(props){
    const b = "Child"
    return <div>
         <button onClick ={()=>props.action(b)} >Update</button>
    </div>
}

ReactDOM.render(<Parent />, document.getElementById("root"));