import React, {useRef, useState} from "react";
import './Player.css';
import {track_oss} from "../../tracks/tracks";

export default function Player() {
    const audioPlayer = useRef(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [seekValue, setSeekValue] = useState(0);

    const Truncate = (str) => {
        return str.length > 20 ? str.substring(0, 18) + "..." : str;
    }

    const stopOrPlay = () => {
        audioPlayer.current.currentTime = 0;
    };

    let index = 0;

    const onPlaying = () => {
        if (audioPlayer.current.currentTime === audioPlayer.current.duration) {
            audioPlayer.current.currentTime = 0;
            setCurrentTime(audioPlayer.current.currentTime);
            setSeekValue(
                (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
            );
        }else{
            setCurrentTime(audioPlayer.current.currentTime);
            setSeekValue(
                (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
            );
        }
    };

    const nextTrack = () => {
        index ++;
        if (index === track_oss.length) {
            index = 0;
        }
    }

    const volumeVal = audioPlayer.current.volume === 1;

    const playPause = () => {
        if (!isActive || audioPlayer.current.currentTime === 0){
            setActive(!isActive);
            audioPlayer.current.play();
        } else {
            setActive(!isActive);
            audioPlayer.current.pause();
        }
    };
    const resultStart = new Date(currentTime * 1000).toISOString().slice(11, 19);
    // const resultDuration = new Date(audioPlayer * 1000).toISOString().slice(11, 19);
    const [isActive, setActive] = useState(false);
    return (
        <>

            <div className="mt-4 player">
                <div className={"d-flex justify-content-center mt-5"}>
                    <p className={"text-white mx-5 h4 fixed"}>{resultStart}</p>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={seekValue}
                        onChange={(e) => {
                            audioPlayer.current.currentTime = audioPlayer.current.duration * (+e.target.value / 100);
                            setSeekValue(e.target.value);
                        }}
                        className={"w-75"} align={"center"}
                    />
                    <p className={"text-white mx-5 h4"}>
                        {/*{resultDuration}*/}
                    </p>
                </div>
                <audio
                    src={track_oss[index].fileUrl}
                    ref={audioPlayer}
                    onTimeUpdate={onPlaying}
                >
                </audio>
                <div className="w-100 d-flex">
                    <div className={"flex-fill"}>
                        <span>
                            <i className="fa fa-microphone-lines
                            text-blue fa-5x mt-4 m-3 mb-4"/>
                        </span>
                        <span className={"text-white display-none h2"}>
                                1- {Truncate("Working on VCS as a beginner")}
                        </span>
                        <span className={"text-light h5 mb-0 display-none row mx-3 align-center"}>
                                The OSS Community - 02/04/2022
                        </span>
                    </div>
                    <span className="d-flex text-white w-25 flex-fill mb-0 play-commands justify-content-center">
                        <button className="round-button-none gradient-border-none px-2 mx-2 my-4">
                            <i className="fas fa-step-backward fa-2x"/>
                        </button>
                        <button onClick={playPause} onDoubleClick={stopOrPlay}
                                className="round-button round-button_small gradient-border my-4">
                            <i className={isActive ? "fa fa-pause fa-2x mb-3" : "fa fa-play fa-2x mb-3"}/>
                        </button>
                        <button className="round-button-none gradient-border-none px-2 mx-2 my-4"
                        onClick={nextTrack}>
                            <i className="fas fa-step-forward fa-2x"/>
                        </button>
                    </span>
                    <span className={"flex-fill text-white mb-0 last-group"}>
                        <button className={"mx-3 my-4 border-none"}>
                            <i className={ volumeVal ? "fa fa-volume-up fa-3x text-white":
                                "fa fa-volume-mute fa-3x text-white"}/>
                        </button>
                        <a href="https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3"
                           className={"mx-3 my-4 border-none"}>
                            <i className="fa fa-down-to-bracket fa-3x text-white"/>
                        </a>
                        <button className={"mx-3 my-4 border-none"}>
                            <i className="fa-solid fa-share-from-square fa-3x text-white"/>
                        </button>
                    </span>
                </div>
            </div>
        </>
    );
}