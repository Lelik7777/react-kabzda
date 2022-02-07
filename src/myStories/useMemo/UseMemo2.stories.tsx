import React, {ChangeEvent, useMemo, useState} from 'react';

export default {
    title: 'Using hoc React.memo()',
};

//first case to use useMemo(): for difficult counting
export const ExampleForUseMemo2 = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(5);
    let factorialValue1 = 1, factorialValue2 = 1;

 factorialValue1=useMemo(()=>{
    let factorialValue=1;
    for (let i = 1; i <= value1; i++) {
        for (let j = 0; j < 1000000000; j++) {
            let count = 0;
            count = j * 10 / 4;
        }
        factorialValue *= i;
    }
    return factorialValue;
},[value1]);

    for (let i = 1; i <= value2; i++) {
        factorialValue2 *= i;
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue1(e.currentTarget.valueAsNumber);
    const onChange1 = (e: ChangeEvent<HTMLInputElement>) => setValue2(e.currentTarget.valueAsNumber);
    return (
        <div>
            <input value={value1} type="number" onChange={onChange}/>
            <input value={value2} type="number" onChange={onChange1}/>
            <p>value1: {factorialValue1}</p>
            <p>value2: {factorialValue2}</p>
        </div>
    )
}
//second case using useMemo(): pass