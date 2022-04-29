function App(){
const [array, setArray] = React.useState(["Apple", "OnePlus", "Mi","Realme"]);

const update = () =>{
    console.log(array);
    setArray([
        ...array,
        array[0]="Poco"
    ]);
}
return (<div>
    <h1>{array}</h1>
    <button onClick = {update}>Update</button>
</div>)
}
ReactDOM.render(<App />, document.getElementById('root'));