import React, { useEffect, useRef } from 'react'

function UserefInHooks() {
  
  const input = useRef(null);

  useEffect(()=>{
      input.current.focus();
  },[])
    return (
    <div>
        <input ref = {input} type = "text" />
    </div>
  )
}

export default UserefInHooks