function Parent(props){
    return<div>
<Child b = "Child" c = {props.a} />
    </div>
}

function Child(props){
    return <div>
        <h1>{props.c}</h1>
        <h1>{props.b}</h1>
    </div>
}

ReactDOM.render(<Parent a = "Parent" />, document.getElementById("root"));