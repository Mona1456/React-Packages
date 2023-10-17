import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NamsteJavaScript from './Namste-JavaScript';
import ProgressBar from './ProgressBar';
// import Game from './Tic_Tac_Toe_Game'
import Accordian from './Accordian/index'
import reportWebVitals from './reportWebVitals';
import RestAndSpread from './Rest-and-spread';
import UseContext from './UseContext-hook';
import SearchBar from './SearchBar';
// import CallBack from './UseCallBack-hook';
// import Memo from './UseMemo-Hook'
// import Ref from './UseRef-hook'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* <Game/>*/}
     {/* <Accordian/>  */}
    {/* <CallBack/> */}
    {/* <Memo/> */}
    {/* <Ref/> */}
    {/* <RestAndSpread/> */}
    {/* <UseContext/> */}
    {/* <ProgressBar/> */}
    {/* <NamsteJavaScript/> */}
    <SearchBar/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
