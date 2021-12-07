import React, {useMemo, useState} from 'react';

export default {
    title: ' useMemo demo'
}

export const Exp = () => {
    const [num1, setNum1] = useState<number>(1);
    const [num2, setNum2] = useState<number>(1);

    let res1 = 1;
    let res2 = 1;
    res1 = useMemo(() => {
        let res = 1;
        for (let i = 1; i <= num1; i++) {
            let a = 0;
            while (a < 100000000) {
                a++;
                Math.random();
            }
            res *= i;

        }
        return res;
    }, [num1])


    for (let i = 1; i <= num2; i++) {
        res2 *= i;
    }
    return <div style={{display: 'flex'}}>

        <div>
            <input type="text" value={num1} onChange={(e) => setNum1(+e.currentTarget.value)}/>
            <div>{res1}</div>
        </div>

        <div>
            <input type="text" value={num2} onChange={(e) => setNum2(+e.currentTarget.value)}/>
            <div>{res2}</div>
        </div>

    </div>
}