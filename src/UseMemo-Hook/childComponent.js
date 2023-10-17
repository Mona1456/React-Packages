import { React } from 'react';

function ChildComponent() {
  console.log("child component rendered")
  
  return(
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default ChildComponent;