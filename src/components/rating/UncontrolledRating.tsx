import React, {useState} from 'react';

type PropsType = {
    countStars: number[];
}
type ValueType = 0 | 1 | 2 | 3 | 4;
export const UncontrolledRating = ({countStars}: PropsType) => {
    const [value, setValue] = useState<ValueType|number>(0);
    return (
        <div>
            {countStars.map((x, i) =>
                <Star selected={value >i}
                setValue={setValue}
                      value={i}
                />)}
        </div>
    )
}

type PropsType2 = {
    selected: boolean;
    setValue: (v: ValueType|number) => void;
    value:ValueType|number;
}
const Star = ({selected,setValue,value}: PropsType2) => {
    return (
        <span onClick={()=>setValue(value+1)}>{selected ? <b>Star</b> : 'Star'}</span>
    );
}