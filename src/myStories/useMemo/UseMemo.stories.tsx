import React, {ChangeEvent, useMemo, useState} from 'react';

export default {
    title: ' hoc ReactMemo demo'
}
//using useMemo() for difficult counting
export const ExpOfUseMemo = () => {
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
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setNum1(+e.currentTarget.value);
    const onChange1 = (e: ChangeEvent<HTMLInputElement>) => setNum2(+e.currentTarget.value);
    return <div style={{display: 'flex'}}>

        <div>
            <input type="text" value={num1} onChange={onChange}/>
            <div>{res1}</div>
        </div>

        <div>
            <input type="text" value={num2} onChange={onChange1}/>
            <div>{res2}</div>
        </div>

    </div>
}

//using useMemo() for pass array.filter in props
const Child = React.memo(({data}: { data: string[] }) => {
    console.log('render child');
    return <>
        {data.map((x, i) => <div key={i}>{x}</div>)}
    </>
});

const Parent = () => {
    console.log('render parent')

    const [data, setData] = useState<string[]>(['tom', 'alex', 'ann', 'toby']);
    const [value, setValue] = useState('');

    const changingData = useMemo(() => {
        console.log('use memo')
        return data.filter(x => x);
    }, [data]);
    return (
        <div>

            <Child data={changingData}/>
            <button onClick={()=>setData([...data,'new user'])}>add user</button>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
        </div>
    );
}
export const Exp2 = () => {
    return <>
        <Parent/>
    </>
}

