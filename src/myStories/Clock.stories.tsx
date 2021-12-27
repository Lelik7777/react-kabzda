import React, {useEffect, useState} from 'react';
import {ClockMy} from '../components/clockMy/Clock';


export default {
    title: 'Clock',
    component:ClockMy,
}

export const Clock = () => {
    console.log('re-render')

    let [time, setTime] = useState(new Date().toUTCString());
    let [count, setCount] = useState(0);

    useEffect(() => {
        console.log(1)
        let interval: ReturnType<typeof setInterval> = setInterval(() => {
            console.log(2)
            setTime((t) => t = new Date().toUTCString());
            setCount((c) => c + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        };
    }, []);

    return (<div>
        {time}
        <br/>
        {count}
    </div>)
};

export const Example = () => {
    const [toggle,setToogle]=useState(false);
  return(
      <>
          <button onClick={()=>setToogle(!toggle)}>toggle clock</button>
      <ClockMy type={toggle}/>
      </>
  )
}