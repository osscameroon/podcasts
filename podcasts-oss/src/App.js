import React, {useRef, useState} from 'react';
import {Header} from './components/Header/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/GoogleSans-Bold-v1.27.ttf';
import './fonts/GoogleSans-Medium-v1.27.ttf';
import './fonts/GoogleSans-Regular-v1.27.ttf';
import {Button} from './components/Button/Button';
import AppContext from "./components/AppContext/AppContext";
import {track_oss} from "./tracks/tracks";


function App() {
    const [podCastItems, setPodcastItems] = useState(track_oss);
    const audioPlayer = useRef(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [isActive, setActive] = useState(false);
    const Truncate = (str, val) => {
        return str.length > 20 ? str.substring(0, val) + "..." : str;
    }
    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    podCastItems, setPodcastItems,
                    seekValue, audioPlayer, currentTime,
                    setCurrentTime, setSeekValue,
                    trackIndex, setTrackIndex, Truncate,
                    isActive, setActive
                }}>
                <Header/>
                <Button/>

            </AppContext.Provider>
        </div>

    );
}

export default App;