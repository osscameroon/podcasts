import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/podcasts_list/Button';
import PodcastList from './components/podcasts_list/PodcastList';

function App() {
    return (
        <div className="App">
            <Header/>
            <Button/>
            <PodcastList/>
        </div>

    );
}

export default App;
