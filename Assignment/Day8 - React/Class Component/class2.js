class Class1 extends React.Component {
    render() {
        return <h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, dolore. </h1>
    }
}

class Class2 extends React.Component {
    render(){
        return <p>{this.props.var1} {this.props.var2}</p>
    }
}

ReactDOM.render(<div>
    <Class1/>
    <Class2  var1 = "Hello" var2 = "World"/>
</div>, document.getElementById("root"));