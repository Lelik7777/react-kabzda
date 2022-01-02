import React, {ChangeEvent, useState} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {ReducerRootType, store1} from '../Store1/Store1';
import {addUser} from '../Store1/Reducer';

export default {
    title: 'Reducer and useSelector()',
}
export const Example = () => {

    return (
        <Provider store={store1}><Parent/> </Provider>
    );
}

const Parent = () => {
    const state = useSelector((state: ReducerRootType) => state.data);
    const dispatch = useDispatch();

    return (
        <>
            <p>names:{state.map((x, i) => <div key={i}>{x.name}</div>)}</p>
            <Input callback={(n: string) => dispatch(addUser(n))}/>
        </>
    );
}
const Input = ({callback}: { callback: (v: string) => void }) => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    const onClick = () => {
        callback(value)
        setValue('');
    };
    return (
        <div>
            <input type="text" title={'enter name'} value={value} onChange={onChange}/>
            <button onClick={onClick}>+</button>
        </div>
    )
}