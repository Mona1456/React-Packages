import React, { createContext } from 'react'
import ChildA from './ChildA';

const  data=createContext();
const data1=createContext();
function UseContext() {
    // create, provider,useContext
   
    const name = "Mona"
    const gender = "Female"
  return (
      <data.Provider value={name}>
          <data1.Provider value={gender}>
              <ChildA/>
          </data1.Provider>
    </data.Provider>
  )
}

export default UseContext;
export {data,data1};