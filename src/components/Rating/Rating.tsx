import React from 'react';

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4;
}

export function Rating(props: RatingType) {
    debugger
    console.log('Rating rendering')
    switch (props.value) {
        case 0:
            return <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        case 1:
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            );
            break;
        case 2:
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            );
            break;
        case 3:
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                </div>
            );
            break;
        case 4:
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                </div>
            );
            break;
        default:
            return <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>
    }

}

type StarType = {
    selected: boolean;
}

function Star(props: StarType) {

    console.log('Star rendering')
    if (props.selected)
        return <b><span> Star </span></b>
    else
        return <span> Star </span>

}