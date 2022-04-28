const names = ["Vignesh", "Gokul", "Dinesh", "rajan"];
const name = ( 
<ul>
    {names.map((n, index)=>{
    return <li key = {index}>{n}</li>;
})}
</ul>);
ReactDOM.render(name, document.getElementById("root"));