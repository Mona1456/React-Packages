import React, { useEffect, useState } from 'react'
import {Data} from './data';
function SearchBar() {

const [inputValue,setInputValue]=useState('');
const [dataList,setDataList]=useState();


useEffect(() => {
    setDataList(Data);
}, [])


useEffect(() => {
   const res= Data?.filter((item)=>item?.title?.includes(inputValue))
   setDataList(res);
}, [inputValue])


  return (
      <>
    <input 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        type="text"
        style={{margin:'50px',width:'200px'}}
     />
     {/* {inputValue!==''?(
        dataList?.map((item)=> {
        const val= item?.title?.includes(inputValue);
            if(val){
                return <div>{item?.title}</div>
            }
        }
        )
    ):null} */}
    {inputValue!==''?(
        dataList?.map((item)=>
            <div>{item?.title}</div>
        )
    ):null}
     </>
  )
}

export default SearchBar;