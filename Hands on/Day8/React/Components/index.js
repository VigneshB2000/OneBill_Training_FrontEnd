class Header extends React.Component {
    render() {
        console.log(this.props.name);
        return (<div>
            <h1> Header Class Component </h1>
            <h1> Hello OneBill </h1>
            <p> Good Afternoon </p>
          </div>
        );
    }
}

class Content extends React.Component{
  render(){
  return <h1>Content Component{this.props.fName}{this.props.lName}</h1>
  }
}

class Footer extends React.Component{
  render(){
    return <p>Footer Component</p>
  }
}


ReactDOM.render( <div>< Header name = "Vignesh"/>
<Content fName = "Vicky" lName = "vicky"/>
<Footer/>
 </div>, document.getElementById("root"));