class Header extends React.Component {
    render(){
        console.log(this.props.uName);
        this.props.uName = "Gokul"; // Throws an Error as Props are immutable
        return this.props.uName;
    }
}

ReactDOM.render(<Header uName = "Rajan" />, document.getElementById("root"));