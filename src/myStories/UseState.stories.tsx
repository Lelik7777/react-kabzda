import React, {useState} from 'react';
export default {
    title:'useState'
};
export const Count = () => {
  const [count,setCount]=useState(0);
  const changeCount = (s:number) => {
    return s+1;
  }
    return(
      <div>
          <button onClick={()=>setCount(changeCount)}>+</button>
          {count}
          <br/>
          <button onClick={()=>setCount((s)=>s+1)}>+</button>
          {count}
      </div>
  )
}
//variant when useState accept function reference
export const ExampleWithFunRef = () => {
  const [value,setValue]=useState(sum(4,5));
    function sum(a:number,b:number) {
      return a+b;
  }
  return(
      <div>
<button onClick={()=>setValue(value+1)}>add</button>
          <input type="text" value={value}/>
      </div>
  )
}
