import React, {useEffect, useState} from 'react';

export default {
    title: 'Clock'
}

export const Clock = () => {
    console.log('re-render')

    let [time, setTime] = useState(new Date().toUTCString());
    let [count, setCount] = useState(0);
    //  let interval: ReturnType<typeof setInterval>

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

    // useEffect(() => {
    //     // console.log(1)
    //
    //     return () => interval && clearInterval(interval);
    // }, [])
    return (<div>
        {time}
        <br/>
        {count}
    </div>)
}