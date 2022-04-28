function Function1(props) {
    return <h1> Hello { props.name } </h1>
}

function Function2(props){
    return <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos tempore culpa, quasi nulla temporibus minima adipisci cumque corporis ipsam quidem mollitia enim. Veniam sunt eveniet, reprehenderit consequuntur et, exercitationem maxime nemo ex dignissimos non hic quae? Quas blanditiis voluptas impedit? Nisi fuga, magnam non excepturi corporis deserunt eligendi? Officiis, aspernatur?</p>
}

function Function3(props){
    return <p>Thank You, {props.name}</p>
}

reactDOM.render(<div>
    <Function1 name = "Vicky"/>
    <Function2 />
    <Function3 name = "Vignesh" />

</div>, document.getElementById("root"));