import React from 'react';
import './App.css';
import {According} from './components/according/According';
import {Rating} from './components/rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UncontrolledAccording} from './components/according/UncontrolledAccording';
import {UncontrolledRating} from './components/rating/UncontrolledRating';

function App() {
    console.log('App rendering');
    const numberOfStars: number[] = [1, 2, 3, 4,5];
    return (
        <div className="App">
            <TitleApp title={'Component App1'}/>
            <Rating value={4} countStars={numberOfStars}/>
            <According title={'list of books'} collapsed={true}/>
            {/*<Rating value={0} countStars={numberOfStars}/>*/}
            <According title={'list to buy'} collapsed={false}/>
            <UncontrolledAccording title={'any list'}/>
          {/*  <UncontrolledRating countStars={numberOfStars}/>*/}
            <UncontrolledRating countStars={numberOfStars}/>
            <OnOff/>
            {/*    <OnOff value={false}/>*/}
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
