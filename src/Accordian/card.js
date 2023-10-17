import React from 'react'
import styles from './styles.module.css'
function Card({onSquareClick,item,active}) {
    
  return (
    <div className={styles.card_div}>
    <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
            {item?.card}
        </div>
        <button onClick={onSquareClick}>&#9660;</button>
    </div> 
    {active?( 
        <div>
            {item?.value}
        </div>  
   ):null} 
   
  </div>
  )
}

export default Card;