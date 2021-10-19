import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">

            <Rating/>
            <According/>
        </div>
    );
}

function Rating() {
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
    return (
        <div>Star</div>
    )
}

function According() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default App;

