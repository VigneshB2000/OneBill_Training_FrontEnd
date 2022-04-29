// function MyApp() {

//     const[name, setName] = React.useState('Allen');


//     const updateChanges = () =>{
//         console.log(name);
//         setName("Smith");
//     }
//     return (<div>
//         <h1>{name}</h1>
//         <button onClick={updateChanges}>Update</button>
//     </div>);
// }
// ReactDOM.render(<MyApp />, document.getElementById('root'));

/* Passing Objects */
function MyApp() {

        const[name, setName] = React.useState({fname:"Vignesh", lname:"Udhaya"});
    
    
        const updateChanges = () =>{
            console.log(name);
            setName({
                ...name, /* Spread Operator
                Without the use of Spread Operator, only updated values
                will get printed, The other values remain hidden */
                lname:'Bhaskaran'
            });
        }
        return (<div>
            <h1>{name.fname}</h1>
            <h1>{name.lname}</h1>
            <button onClick={updateChanges}>Update</button>
        </div>);
    }
    ReactDOM.render(<MyApp />, document.getElementById('root'));
    
