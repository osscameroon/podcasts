import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button/Button';
import PodcastsList from './components/PodcastsList/PodcastsList';

function App() {
    return (
        <div className="App">
            <Header/>
            <Button/>
            <PodcastsList/>
        </div>

    );
}

export default App;
