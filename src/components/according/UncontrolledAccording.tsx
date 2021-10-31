import React, {useState} from 'react';

type PropsType = {
    title: string;
}

export function UncontrolledAccording({title}: PropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    return (
        <div>
            <TitleAccording
                title={title}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
            />
            {collapsed && <BodyAccording/>}
        </div>
    )

}

type AccordingTitleType = {
    title: string;
    setCollapsed: (c: boolean) => void;
    collapsed: boolean;
}

function TitleAccording({title, setCollapsed, collapsed}: AccordingTitleType) {
    console.log('TitleAccording rendering')
    const onClick = () => setCollapsed(!collapsed);
    return (
        <h2 onClick={onClick}>{title}</h2>
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