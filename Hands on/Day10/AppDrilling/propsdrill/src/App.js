import React, {useState} from 'react'
import ComponentA from'./components/ComponentA'
import ComponentC from './components/ComponentC';
import {useProvider} from './context/Context'

function App() {
  const [uname, setUname] = useState("Google");
  return (
    <div classname = "App">
      {/* <ComponentA uname = {uname} /> */}
      <useProvider value ={uname}>
    <ComponentC uname = {uname} />
    <button onClick ={() => setUname("Flipkart")}>Update</button>
      </useProvider>
    </div>
  )
}

export default App