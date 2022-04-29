
//Parent Component
//collects data and passes into the child component
function App(props){
    return <div>
        <Home appName = "Netflix" userName = {props.userLoggedIn} />
    </div>
}

//Child Component
function Home(props){
    return <div>
        <h1>{props.appName}</h1>
        <h1>{props.userName}</h1>
    </div>
}

ReactDOM.render(<App userLoggedIn = "Lucifer"/>, document.getElementById("root"));