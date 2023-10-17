import { useState } from "react";

function Square({value,onSquareClick}){

    return <button style={{padding:'20px'}} onClick={onSquareClick} >{value}</button>
  }
export default Square;