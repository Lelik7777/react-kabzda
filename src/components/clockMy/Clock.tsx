import React, {useEffect, useState} from 'react';
import imgClock from '../img/background of clock.png';
import imgSec from '../img/second arrow.jpg';
import s from './Clock.module.css';
// @ts-ignore
import AnalogClock from 'analog-clock-react';

const addZeroToNumber = (num: number) => {
    return num < 10 ? '0' + num : num;
}
export const ClockMy = ({type}: { type: boolean }) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    }, []);
    let options = {
        width: '300px',
        border: true,
        borderColor: '#2e2e2e',
        baseColor: '#17a2b8',
        centerColor: '#459cff',
        centerBorderColor: '#ffffff',
        handColors: {
            second: '#d81c7a',
            minute: '#ffffff',
            hour: '#ffffff'
        }
    };

    return (
        type
            ? <div className={s.wrapper}>

                <AnalogClock {...options}/>
            </div>
            : <div>
                <span>{addZeroToNumber(time.getHours())}:</span>
                <span>{addZeroToNumber(time.getMinutes())}:</span>
                <span>{addZeroToNumber(time.getSeconds())}</span>
            </div>
    )
}