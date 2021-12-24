import React, {useCallback, useState} from 'react';

export default {
    title: 'UseCallback',
}
export const Example03 = () => {
    console.log({Example03})
    const [value,setValue]=useState('');
    return (
        <div>
            <input type="text" value={value}
                   onChange={(e)=>setValue(e.currentTarget.value)}
            />
            <Parent/>
        </div>
    )
};

const Parent = () => {
    console.log({Parent})
    const [value, setValue] = useState(false);
    const callback = useCallback(() => setValue(!value),[setValue,value]);
    return (<>

        <Child callback={callback}/>
    </>)
};
const Child = ({callback}: { callback: () => void }) => {
    console.log({Child})
    return (<div>
        <button onClick={callback}>change state from child</button>
    </div>)
};

