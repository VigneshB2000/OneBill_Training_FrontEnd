class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "Mounting Phase",
    };
    console.log("Constructor executed");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Executed");
    console.log(state);
  }

  render() {
    console.log("render method executed");
    return <div>{this.state.txt}</div>;
  }

  componentDidMount() {
    console.log("ComponentDidMount method Executed");
  }
}
ReactDOM.render(<Parent />, document.getElementById("root"));
