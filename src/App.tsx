import React from 'react';
import './App.css';
import {According} from './components/According/According';
import {Rating} from './components/Rating/Rating';

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <TitleApp title={'Component App1'}/>
            <Rating value={4}/>
            <According title={'list of books'} collapsed={true}/>
            <Rating value={0}/>
            <According title={'list to buy'} collapsed={false}/>
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

