import React, {useState} from 'react';
import './App.css';
import {According} from './components/according/According';
import {Rating} from './components/rating/Rating';
import {UncontrolledOnOff} from './components/onOff/UncontrolledOnOff';
import {UncontrolledAccording} from './components/according/UncontrolledAccording';
import {UncontrolledRating} from './components/rating/UncontrolledRating';
import {OnOff} from './components/onOff/OnOff';
import {RenderMovie} from './components/useMemo/RenderMovie';

function App() {
    console.log('App rendering');
    const [value, setValue] = useState<boolean>(false);
    const numberOfStars: number[] = [1, 2, 3, 4, 5];
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const changeCollapsed = (c: boolean) => {
        setCollapsed(!c);
    }
    return (
        <div className="App">
            <TitleApp title={'Component App1'}/>
            <Rating value={4} countStars={numberOfStars}/>
            <According title={'list of books'}
                       collapsed={collapsed}
                       changeCollapsed={changeCollapsed}/>
            {/*<Rating value={0} countStars={numberOfStars}/>*/}

            <UncontrolledAccording title={'any list'}/>
            {/*  <UncontrolledRating countStars={numberOfStars}/>*/}
            <UncontrolledRating countStars={numberOfStars}/>
            <UncontrolledOnOff/>
            <OnOff value={value} setValue={setValue}/>
            {/*    <OnOff value={false}/>*/}
            //example how React.memo() work
        <RenderMovie/>
        </div>
    );
}

type TitleAppType = {
    title: string;
}

function TitleApp(props: TitleAppType) {
    console.log('TitleApp rendering')
    return <div>{props.title}</div>

}


export default App;
