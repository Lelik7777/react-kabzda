import React from 'react';

type AccordingType = {
    title: string;
    collapsed: boolean;
}

export function According(props: AccordingType) {
    //console.log('according rendering')
    /* if (props.collapsed) {
         {
             return <TitleAccording title={props.title}/>
         }
     }
     return (
         <div>
             <TitleAccording title={props.title}/>
             <BodyAccording/>
         </div>
     )*/
// by ternary operator
    /* return (
         props.collapsed ?
             <TitleAccording title={props.title}/> :
             <div>
                 <TitleAccording title={props.title}/>
                 <BodyAccording/>
             </div>

     )*/
    return (
        <div>
            <TitleAccording title={props.title}/>
            {props.collapsed && <BodyAccording/>}
        </div>
    )

}

type AccordingTitleType = {
    title: string;
}

function TitleAccording(props: AccordingTitleType) {
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