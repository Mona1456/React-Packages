import React, { useRef, useState } from 'react'

function Ref() {
    const refElement = useRef("");
    const [name, setName] = useState("Mona")
    
    function handleReset(){
        setName("")
        refElement?.current?.focus(); 
    }
    function handleInput(){
        refElement.current.style.color="Green"
        refElement.current.value="Mohit"
    }
console.log(refElement,'refElement');
  return (
      <>
        
        <input ref={refElement} type="text" value={name} 
              onChange={(e)=>setName(e.target.value)} style={{marginLeft:'20px'}}/>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleInput}>handle Input</button>
    </>
  )
}

export default Ref;