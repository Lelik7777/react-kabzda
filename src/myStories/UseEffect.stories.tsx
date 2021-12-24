import React, {useEffect, useState} from 'react';
export default {
    title:'useEffect demo',
};
export const Example = () => {
 const [value,setValue]=useState(0);
 const [count,setCount]=useState(0);
 useEffect(()=>{
     console.log('useEffect without [] of dependences')
 });
 useEffect(()=>{
     console.log('useEffect with empty [] of dependences')
 },[]);
 useEffect(()=>{
     console.log('useEffect with [value]');
 },[value]);
  return(
      <div>
          <button onClick={()=>setValue(value+1)}>add</button>
          {value}
          <br/>
          <button onClick={()=>setCount(count+1)}>+</button>
          {count}
      </div>
  )
}