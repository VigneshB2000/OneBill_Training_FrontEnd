function Header() {
    return <h1>header in functional comp</h1>;
  }
  
  function Content(props) {
      return <h1>Props in functional comp {props.name}</h1>;
    }
//DeStructuring:s instead of putting props in each argument and parameter, this could be followed
function Subject({s1,s2,s3,s4}){
    return <h1>
        {s1} {s2} {s3} {s4}
    </h1>
}

function Footer({person}){
    return <h1>{person.fName} {person.lName}</h1>
}
  
  ReactDOM.render(<div>
      <Header />
      <Content name="Vicky"/>
      <Subject s1="Java" s2="React" s3 = "MySql" s4="JavaScript" />
      <Footer person = {{fName:"Arya", lName:"Stark"}} />  
  </div>, document.getElementById("root"));

// Two Braces , one denoting it is an object whilst the other is for String interpolation