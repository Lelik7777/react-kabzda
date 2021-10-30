import React from 'react';
import o from './OnOff.module.css';

type PropsType = {
    value: boolean;
}
export const OnOff = ({value}: PropsType) => {
    const styleTrue = {
        'backgroundColor': 'green',
    };
    const styleFalse = {
        backgroundColor: 'red',
    }
    return (
        <div className={o.on_off}>
            {/* {value ?
                <>
                    <div className={`${o.box} ${o.box1}`}>on</div>
                    <div className={`${o.box} `}>off</div>
                    <div className={`${o.circle} ${o.circle1}`}></div>
                </> :
                <>
                    <div className={`${o.box}`}>on</div>
                    <div className={`${o.box} ${o.box2} `}>off</div>
                    <div className={`${o.circle} ${o.circle2}`}></div>
                </>
            }*/}
            <div className={`${o.box}`} style={value ? styleTrue : undefined}>on</div>
            <div className={`${o.box} `} style={value ? undefined : styleFalse}>off</div>
            <div className={`${o.circle} `} style={value ? styleTrue : styleFalse}></div>
        </div>
    )
}