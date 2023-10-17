import { React, useMemo, useState } from 'react';
import ChildComponent from './childComponent'

function CallBack() {
  const [num, setNum] = useState(0);
  const getChildComp = useMemo(() => <ChildComponent />, []);
  return(
    <div>
      <h1>{num}</h1>
      {getChildComp}
      <button onClick={() => setNum(num + 1)}> Addition </button>
    </div>
  );
}
export default CallBack;
// The main difference between useMemo and useCallback hook is, 
// useMemo returns memoized value and useCallback returns memoised function.