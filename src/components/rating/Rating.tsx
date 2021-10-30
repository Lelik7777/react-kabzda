import React from 'react';

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4;
    countStars: number[];
}

export function Rating(props: RatingType) {
    //debugger
    console.log(`Rating rendering`);
    let count = props.value;
    const mappedStars = props.countStars.map(x => {
        --count;
        return count >= 0 ? <Star selected={true}/> : <Star selected={false}/>
    });
    return (
        <div>
            {mappedStars}
        </div>
    );
}

type StarType = {
    selected: boolean;
}

function Star(props: StarType) {
    return (
        props.selected ?
            <b><span> Star </span></b> :
            <span> Star </span>
    )


    console.log('Star rendering')
    /*if (props.selected)
        return <b><span> Star </span></b>
    else
        return <span> Star </span>
*/
}