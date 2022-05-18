import React, {useRef, useState} from "react";
import './Player.css';
import {track_oss} from "../../tracks/tracks";

export default function Player() {
    const audioPlayer = useRef(0);
    const [currentTime, setCurrentTime] = useState(0);
    let [seekValue, setSeekValue] = useState(0);
    const [trackIndex, setTrackIndex] = useState(1);
    const [volume, setVolume] = useState(0);

    const Truncate = (str, val) => {
        return str.length > 20 ? str.substring(0, val) + "..." : str;
    }

    const stopOrPlay = () => {
        audioPlayer.current.currentTime = 0;
    };

    let index = 0;

    const toPrevTrack = () => {
        setSeekValue(0);
        if (trackIndex < (track_oss.length - 1)) {
            setTrackIndex(trackIndex - 1);
            audioPlayer.current.play();
            if (trackIndex <= 0) {
                setTrackIndex(0);
            }
        } else {
            setTrackIndex(0);
            audioPlayer.current.play();
        }
    }
    const toNextTrack = () => {
        setSeekValue(0);
        if (trackIndex < (track_oss.length - 1)) {
            audioPlayer.current.play()
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
            audioPlayer.current.play()
        }
    }

    const volumeUp = () => {
        if (volume < 1) {
            setVolume(volume + 0.1);
            audioPlayer.current.volume = volume + 0.1;
        }
    }

    const volumeDown = () => {
        if (volume > 0) {
            setVolume(volume - 0.1);
            audioPlayer.current.volume = volume - 0.1;
            if ((volume - 0.1) === 0) {
                setVolume(0);
            }
        }
    }

    const volumeMute = () => {
        if (volume > 0) {
            setVolume(0);
            audioPlayer.current.volume = 0;
        } else {
            setVolume(1);
            audioPlayer.current.volume = 1;
        }
    }

    const onPlaying = () => {
        if (audioPlayer.current.currentTime ===
            audioPlayer.current.duration) {
            audioPlayer.current.currentTime = 0;
            seekValue = 0
            toNextTrack();
            setCurrentTime(audioPlayer.current.currentTime);
            setSeekValue(
                (audioPlayer.current.currentTime /
                    audioPlayer.current.duration) * 100
            );
        } else {
            setCurrentTime(audioPlayer.current.currentTime);
            setSeekValue(
                (audioPlayer.current.currentTime /
                    audioPlayer.current.duration) * 100
            );
        }
    };

    const isNew = () => {
        if (isNaN(audioPlayer.current.duration)) {
            return "--: -- : --";
        } else {
            return new Date(audioPlayer.current.duration * 1000).toISOString().slice(11, 19);
        }
    }
    const weEnd = () => {
        if (isNaN(audioPlayer.current.duration)) {
            return "--: -- : --";
        } else {
            return resultStart;
        }
    }

    const playPause = () => {
        if (!isActive || audioPlayer.current.currentTime === 0) {
            setActive(!isActive);
            audioPlayer.current.play();
        } else {
            setActive(!isActive);
            audioPlayer.current.pause();
        }
    };
    const resultStart = new Date(currentTime * 1000).toISOString().slice(11, 19);
    const [isActive, setActive] = useState(false);
    return (
        <>

            <div className="mt-4 player">
                <div className={"d-flex justify-content-center mt-5"}>
                    <p className={"text-white mx-5 h4 fixed"}>
                        {weEnd()}
                    </p>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={seekValue}
                        onChange={(e) => {
                            audioPlayer.current.currentTime =
                                audioPlayer.current.duration * (+e.target.value / 100);
                            setSeekValue(e.target.value);
                        }}
                        className={"w-75 audio-range"} align={"center"}
                    />
                    <p className={"text-white mx-5 h4"}>
                        {isNew()}
                    </p>
                </div>
                <audio
                    src={track_oss[trackIndex].fileUrl}
                    ref={audioPlayer}
                    onTimeUpdate={onPlaying}
                >
                </audio>
                <div className="w-100 d-flex">
                    <div className={"flex-fill fixed"}>
                        <span>
                            <i className="fa fa-microphone-lines
                            text-blue fa-5x mt-4 m-3 mb-4"/>
                        </span>
                        <span className={"text-white display-none h2"}>
                                {track_oss[trackIndex].id} -
                            {Truncate((track_oss[trackIndex].title), 40)}
                        </span>
                        <span className={"text-light h5 mb-0 " +
                            "display-none row mx-3 align-center"}>
                                {track_oss[trackIndex].podName}
                        </span>
                    </div>
                    <span className="d-flex text-white w-25 flex-fill
                     mb-0 play-commands justify-content-center fixed">
                        <button className="round-button-none
                         gradient-border-none px-2 mx-2 my-4"
                                onClick={toPrevTrack} onDoubleClick={null}>
                            <i className="fas fa-step-backward fa-2x"/>
                        </button>
                        {
                            !isNaN(audioPlayer.current.duration) ?
                                <button onClick={playPause} onDoubleClick={stopOrPlay}
                                        className="round-button
                                round-button_small gradient-border my-4">

                                    <i className={isActive ? "fa fa-pause fa-2x mb-3" :
                                        "fa fa-play fa-2x mb-3"}/>
                                </button> :
                                <button onClick={playPause} onDoubleClick={stopOrPlay}
                                        className="round-button fa-beat-fade
                                round-button_small gradient-border my-4">

                                    <i className={"fa fa-play fa-2x mb-3"}/>
                                </button>
                        }
                        <button className="round-button-none
                        gradient-border-none px-2 mx-2 my-4"
                                onClick={toNextTrack} onDoubleClick={null}>
                            <i className="fas fa-step-forward fa-2x"/>
                        </button>
                    </span>
                    <span className={"flex-fill text-white mb-0 last-group"}>
                        <button className={"mx-3 my-4 border-none"}>
                            <div className="dropup">
                                <button className="dropbtn">
                                    <i className={"fa fa-volume-up fa-2x text-white"}/>
                                </button>
                                <div className="dropup-content mb-4">
                                    <span className={"volume-tip float start"}>
                                        {Math.round(volume * 100)}
                                    </span>
                                    <p className={"vol volume-up mt-3"} onClick={volumeUp}>
                                        <i className={"fa fa-volume-up fa-2x"}/>
                                    </p>
                                    <p className={"vol volume-down mt-3"} onClick={volumeDown}>
                                        <i className={"fa fa-volume-down fa-2x"}/>
                                    </p>
                                    <p className={"vol volume-down mt-3"} onClick={volumeMute}>
                                        <i className={"fa fa-volume-mute fa-2x"}/>
                                    </p>
                                </div>
                            </div>
                        </button>
                        <a href={track_oss[trackIndex].fileUrl}
                           download={track_oss[index].title}
                           className={"mx-3 my-4 border-none"}>
                            <i className="fa fa-down-to-bracket fa-3x text-white"/>
                        </a>
                        <button className={"mx-3 my-4 border-none"}>
                            <div className="dropup">
                                <button className="dropbtn">
                                    <i className="fa-solid fa-share-from-square fa-2x text-white"/>
                                </button>
                                <div className="dropup-content share-items mb-4">
                                    <a href={"/podcasts"} className={"share"} onClick={volumeUp}>
                                        <i className={"fab fa-facebook fa-2x"}/>
                                    </a>
                                    <a href={"/podcasts"} className={"share"} onClick={volumeDown}>
                                        <i className={"fab fa-twitter fa-2x"}/>
                                    </a>
                                    <a href={"/podcasts"} className={"share"} onClick={volumeMute}>
                                        <i className={"fab fa-linkedin fa-2x"}/>
                                    </a>
                                    <a href={"/podcasts"} className={"share"} onClick={volumeMute}>
                                        <i className={"fab fa-whatsapp fa-2x"}/>
                                    </a>
                                    <a href={"/podcasts"} className={"share"} onClick={volumeMute}>
                                        <i className={"fab fa-github fa-2x"}/>
                                    </a>
                                </div>
                            </div>
                        </button>
                    </span>
                </div>
            </div>
        </>
    );
}