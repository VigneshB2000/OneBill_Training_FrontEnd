import React from 'react'
import './Home.css'


//Navigating programatically
function home(props) {
    const goToAbout = ()=>{
        props.history.push('/about')
    }
  
    return (
    <div className = "hom">
        Home
        <button onClick={goToAbout}>Go to About</button>
        </div>

  )
}

export default home