import React, { useContext } from 'react'
import {data,data1} from '../../../../UseContext-hook'
function ChildC() {
    const firstName=useContext(data);
    const gender=useContext(data1);
  return (
    <div>Hy, my name is {firstName} and my gender is {gender}</div>
  )
}

export default ChildC;