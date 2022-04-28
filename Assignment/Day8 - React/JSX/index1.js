const animals = ["Lion", "Tiger", "Cheetah", "Deer"];
const animal = ( 
<ul>
    {animals.map((animal, index)=>{
    return <li key = {index}>{animal}</li>;
})}
</ul>);
ReactDOM.render(animal, document.getElementById("root"));