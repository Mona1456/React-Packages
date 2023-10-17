import { React, useCallback, useMemo, useState } from 'react';
import ChildComponent from './childComponent'

function CallBack() {
  const [num, setNum] = useState(0);

  const handleUpdateNum = useCallback(() => {
    //some code
  }, []);
  //   Now, if we try to click on the Addition button, 
//   we can see child component rendered on a console. So, useMemo won’t help out in this situation.

// Because every time the parent component gets re-rendered, handleUpdateNum function got re-created.

// There useCallback comes into the picture which returns us memoized function.

// Let’s wrap the handleUpdateNum function by 
// useCallback hook and see the result. So the code in parent component will look like this,

  const getChildComp = useMemo(
    () => <ChildComponent handleUpdateNum={handleUpdateNum} />,
    [handleUpdateNum]
  );

  return(
    <div>
      <h1>{num}</h1>
      {getChildComp}
      <button onClick={() => setNum(num + 1)}> Addition </button>
    </div>
  );
}
export default CallBack;