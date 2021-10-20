import React from 'react';
import './App.css';
import {According} from './components/According/According';
import {Rating} from './components/Rating/Rating';

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <TitleApp/>
            <Rating value={1}/>
            <According title={'list of books'}/>
            <Rating value={0}/>
            <According title={'list to buy'}/>
        </div>
    );
}

function TitleApp() {
    console.log('TitleApp rendering')
    return <>Component App</>

}


export default App;

