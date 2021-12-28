import React, {useState} from 'react';

export default {
    title: 'InputChild',
};
export const Example = () => {
    const [value, setValue] = useState(0);
   return <InputMy value={value} setValue={setValue}/>
}
const InputMy = ({value, setValue}: { value: number; setValue: (n: number) => void }) => {
    return <div>
        <input type="number" onChange={(event => setValue(event.currentTarget.valueAsNumber))} value={value}/>
    </div>
}