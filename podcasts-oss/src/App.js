import React from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/GoogleSans-Bold-v1.27.ttf';
import './fonts/GoogleSans-Medium-v1.27.ttf';
import './fonts/GoogleSans-Regular-v1.27.ttf';
import { Button } from './components/Button/Button';
import Player from "./components/Player/Player";


function App() {
    return (
        <div className="App">
            <Header/>
            <Button/>
            <Player/>
        </div>

    );
}

export default App;