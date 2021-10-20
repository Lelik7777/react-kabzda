import React from 'react';

export function According(props:any) {
    console.log('According rendering')
    return (
        <div>
            <TitleAccording title={props.title}/>
            <BodyAccording/>
        </div>
    )
}

function TitleAccording(props:any) {
    console.log('TitleAccording rendering')
    return (
        <h2>{props.title}</h2>
    )
}

function BodyAccording() {
    console.log('BodyAccording rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}