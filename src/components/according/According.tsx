import React from 'react';

type AccordingType = {
    title: string;
    collapsed: boolean;
    changeCollapsed: (c: boolean) => void;
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
            <TitleAccording
                title={props.title}
                callBack={props.changeCollapsed}
                collapsed={props.collapsed}
            />
            {props.collapsed && <BodyAccording/>}
        </div>
    )

}

type AccordingTitleType = {
    title: string;
    callBack: (c: boolean) => void;
    collapsed: boolean;
}

function TitleAccording(props: AccordingTitleType) {
   // console.log('TitleAccording rendering')
    return (
        <h2 onClick={() => props.callBack(props.collapsed)}>{props.title}</h2>
    )
}

function BodyAccording() {
    //console.log('BodyAccording rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}