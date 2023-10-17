import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
function ProgressBar() {
const [value, setValue] = useState(0);

const refElement=useRef('');

// useEffect(() => {
//     console.log('as');
//     let myInterval;
//     myInterval = setInterval(() => {
//         setValue((prev)=>prev+1);
//     }, 100); 
//     refElement.current= myInterval;
//     handlePause();
// }, [])

useEffect(() => {
    if(value>=100){
        clearInterval(refElement.current);
    }
}, [value])

const handleReset=()=>{
    setValue(0);
    handlePause();
}
const handlePause=()=>{
    clearInterval(refElement.current);
}

const handleResume=()=>{
    let myInterval;
    if(value<100){
    myInterval = setInterval(() => {
        setValue((prev)=>prev+1);
    }, 100); 
    refElement.current= myInterval;
}
}

return (
      <>
        <div className={styles.progress_bar}>
            <div className={styles.progress_bars} style={{width:`${value}%`}}>
            </div>
        </div>
        {value}
        <button style={{margin:'20px'}} onClick={()=>handleReset()}>Reset</button>
        <button style={{marginLeft:'120px'}} onClick={()=>handlePause()}>Pause</button>
        <button style={{marginLeft:'120px'}} onClick={()=>handleResume()}>Resume</button>
    </>
  )
}

export default ProgressBar;