import React, {useState} from 'react';
import o from './OnOff.module.css';

type PropsType = {
    value: boolean;
}
export const OnOff = () => {
    const [value, setValue] = useState<boolean>(false);
    const styleTrue = {
        backgroundColor: value ? 'green' : '#fff',
    };
    const styleFalse = {
        backgroundColor: value ? '#fff' : 'red',
    }
    const styleCircle = {
        backgroundColor: value ? 'green' : 'red',
    }

    let onClick = () => {
        setValue(true)
    };
    const onClick1 = () => {
        setValue(false)
    };
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
            {/* <div className={`${o.box}`} style={value ? styleTrue : undefined}>on</div>
            <div className={`${o.box} `} style={value ? undefined : styleFalse}>off</div>
            <div className={`${o.circle} `} style={value ? styleTrue : styleFalse}></div>*/}
            <div className={o.box} style={styleTrue} onClick={onClick}>on</div>
            <div className={o.box} style={styleFalse} onClick={onClick1}>off</div>
            <div className={o.circle} style={styleCircle}></div>
        </div>
    )
}