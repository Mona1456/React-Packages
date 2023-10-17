import React from 'react'

function RestAndSpread() {
    const Student={
        name:'Mona Singh',
        age: '24',
        hobbies:['dancing','reading']
    }
    const {...rest}=Student; //rest

    const ChangeAge={
        ...Student,// spread
        age:'23',
    }
console.log(ChangeAge,rest);

  return (
 <>hyy</>
  )
}

export default RestAndSpread;