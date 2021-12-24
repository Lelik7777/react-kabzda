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