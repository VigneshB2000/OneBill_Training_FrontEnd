function ArrayOperation() {
  const [list, setlist] = React.useState([
    { no: 1, Name: "Vignesh", role: "Developer" },
    { no: 2, Name: "Suresh", role: "Developer" },
    { no: 3, Name: "Dinesh", role: "Developer" },
  ]);

  const updateName = () => {
    const data1 = { id: list.length + 1, Name: "Rajan", role: "Beedan" };
    const data2 = list.concat(data1);
    setlist(data2);
  };
  const deleteName = () => {
    const data3 = list.slice(0, -1);
    setlist(data3);
  };

  return (
    <div>
      <h1>Namelist</h1>
      <ol>
        {list.map((obj) => (
          <li key={obj.id}>
            {" "}
            {obj.Name} {obj.role}
          </li>
        ))}
      </ol>
      <button onClick={updateName}>Add Name</button>
      <br />
      <button onClick={deleteName}>Delete Name</button>
    </div>
  );
}
ReactDOM.render(<ArrayOperation />, document.getElementById("root"));
