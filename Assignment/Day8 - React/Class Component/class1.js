class Class1 extends React.Component {
    render() {
        return <h1> Hello {this.props.name} , </h1>
    }
}

class Class2 extends React.Component {
    render(){
        return <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vitae unde est eaque quam cumque molestias accusamus voluptatibus aperiam odio deserunt soluta, aut libero et rem reiciendis laudantium, recusandae hic corporis. Pariatur fuga debitis eaque veniam in ab? Inventore ullam, beatae distinctio delectus totam reiciendis possimus illo fugiat atque perspiciatis?</p>
    }
}

ReactDOM.render(<div>
    <Class1 name = "Vicky" />
    <Class2 />
</div>, document.getElementById("root"));