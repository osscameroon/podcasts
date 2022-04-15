import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/podcasts_list/Button';
import podcastsList from './components/podcasts_list/podcastsList';

function App() {
    return (
        <div className="App">
            <Header/>
            <Button/>
            <podcastsList/>
        </div>

    );
}

export default App;
