import React from 'react';
import './App.css';
import {log} from 'util';

function App() {
    console.log('App rendering')
    return (
        <div className="App">
            <TitleApp/>
            <Rating/>
            <According/>
        </div>
    );
}

function Rating() {

    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {

    console.log('Star rendering')
    return (
        <div>Star</div>
    )
}

function TitleApp() {
    console.log('TitleApp rendering')
    return <>Component App</>

}

function According() {
    console.log('According rendering')
    return (
        <div>
            <TitleAccording/>
            <BodyAccording/>
        </div>
    )
}

function TitleAccording() {
    console.log('TitleAccording rendering')
    return <h2>Menu</h2>
}

function BodyAccording() {
    console.log('BodyAccording rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>

        </div>)
}

export default App;

