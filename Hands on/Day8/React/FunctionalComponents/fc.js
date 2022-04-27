function Header() {
  return <h1>header in functional comp</h1>;
}

function Content(props) {
    return <h1>Props in functional comp {props.name}</h1>;
  }

ReactDOM.render(<div>
    <Header />
    <Content name="Vicky"/>
</div>, document.getElementById("root"));