import { useState } from 'react';
import '../App.css';
import Square from './square'

function calculateWinner(squares){
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c]=lines[i];
    if(squares[a]&&squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}
function Board({xIsNext, squares, onPlay}) {
  
  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)){
      return ;
    }
    const nextSquare= squares.slice();
    xIsNext ? nextSquare[i]='X': nextSquare[i]='O';
    onPlay(nextSquare);
  }
  
  const winner=calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
    <div>{status}</div>
    <div>
        <Square  value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
   </div>
      <div>
      <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
      <Square  value={squares[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div>
      <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
   </>
  );
}

export default Board;
// The export JavaScript keyword makes this function accessible outside of this file. 
// The default keyword tells other files using your code that it’s the main function in your file
// The return JavaScript keyword means whatever comes after is returned as a value to the caller of the function
/* <button> is a JSX element. A JSX element is a combination of 
JavaScript code and HTML tags that describes what you’d like to display.  */

/* The first two CSS selectors (* and body) define the style of large parts of your app while the .
square selector defines the style of any component where the className property is set to square */

// “escape into JavaScript” from JSX, you need curly braces


