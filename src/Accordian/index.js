import React, { useState } from 'react'
import Card from './card'
import { cardData } from './constant'
function Accordian() {
    const [openCard, setOpenCard] = useState([2])


//state of array of index that is opened default will be empty
// onclicking of card it will check if card is open or not 
// to check if open we have to find the click index in the openCard state array
//found to be open then we have to closed it and to closed it we have to remove that clicked index from the openCard state array
//if founded to close then we have to opened the card
// to open a card we have to add the  clicked index in the openCard state array

    const handleClick=(value)=>{
        let prevOpenCard=[...openCard];

       if(prevOpenCard.includes(value)){
        const indexVal= prevOpenCard.indexOf(value)
        prevOpenCard.splice(indexVal,1);
       }else{
        prevOpenCard.push(value);
       }
       setOpenCard(prevOpenCard);
    }
   
   
  return (
      <div >
        {cardData?.map((item,value)=> (
            <Card item={item} onSquareClick={()=>handleClick(value)} active={openCard.includes(value)}/>
        ))}
     </div>
  )
}

export default Accordian;