import React, {useContext, useRef, useState} from "react";
import './Player.css';
import {track_oss} from "../../tracks/tracks";
import AppContext from "../AppContext/AppContext";
import {
    faVolumeUp,
    faVolumeDown,
    faVolumeMute,
    faShareFromSquare,
    faDownload,
    faForwardStep,
    faPlay,
    faBackwardStep,
    faPause,
    faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faWhatsapp,
    faGithub
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Player() {
    const audioPlayer = useRef(0);
    const {currentTime, setCurrentTime} = useContext(AppContext);
    let {seekValue, setSeekValue} = useContext(AppContext);
    const {trackIndex, setTrackIndex} = useContext(AppContext);
    const [volume, setVolume] = useState(audioPlayer.volume | 1);

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
        if (volume < 0.9) {
            setVolume(volume + 0.1);
            audioPlayer.current.volume = volume + 0.1;
        }
    }

    const volumeDown = () => {
        if (volume > 0.1) {
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
                <div className={"d-flex justify-content-center mt-4"}>
                    <p className={"text-white mx-3 h4 fixed"}>
                        {weEnd()}
                    </p>
                    {
                        !isNaN(audioPlayer.current.duration) ?
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
                                className={"w-75 audio-range"}
                                align={"center"}
                            /> :
                            <input
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                value={0}
                                className={"w-75 audio-range"}
                                align={"center"}
                            />}
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
                    <div className={"flex-fill fixed d-none d-sm-none d-md-none d-lg-block"}>
                        <span>
                            <FontAwesomeIcon icon={faMicrophoneLines}
                                             /*className={"text-blue fa-5x mt-4 m-3 mb-4"}*//>
                        </span>
                        <span className={"text-white display-none h5"}
                              style={{position: "absolute", bottom: "1.2em", left: "4.9%"}}>
                                {track_oss[trackIndex].id} -
                            {Truncate((track_oss[trackIndex].title), 20)}
                        </span>
                        <span className={"text-light h5 mb-0 " +
                            "display-none row mx-3 align-center"}>
                                {track_oss[trackIndex].podName}
                        </span>
                    </div>
                    <span className="d-flex text-white w-25 flex-fill
                     mb-0 play-commands justify-content-center fixed">
                        <button className="round-button-none
                         gradient-border-none px-2 mx-2"
                                onClick={toPrevTrack} onDoubleClick={null}>
                            <FontAwesomeIcon icon={faBackwardStep} style={{fontSize: "1.5em"}}/>
                        </button>
                        {
                            !isNaN(audioPlayer.current.duration) ?
                                <button onClick={playPause} onDoubleClick={stopOrPlay}
                                        className="round-button
                                round-button_small gradient-border">
                                    <FontAwesomeIcon
                                        icon={isActive ? faPause : faPlay}
                                        style={{marginBottom: "3px", marginLeft: "3px", fontSize: "1.5em"}}/>
                                </button> :
                                <button onClick={playPause}
                                        onDoubleClick={stopOrPlay}
                                        className="round-button fa-beat-fade round-button_small
                                        gradient-border">
                                    <FontAwesomeIcon
                                        icon={faPlay}
                                        style={{marginBottom: "3px", marginLeft: "3px", fontSize: "1.5em"}}/>
                                </button>
                        }
                        <button className="round-button-none gradient-border-none px-2 mx-2"
                                onClick={toNextTrack} onDoubleClick={null}>
                            <FontAwesomeIcon icon={faForwardStep} style={{fontSize: "1.5em"}}/>
                        </button>
                    </span>
                    <span className={"flex-fill text-white mb-0 last-group"}>
                        <span className={"mx-3 my-4 border-none d-none d-sm-none d-md-none d-lg-inline"}>
                            <div className="dropup">
                                <button className="dropbtn">
                                    <FontAwesomeIcon icon={faVolumeUp} style={{fontSize: "2em"}}/>
                                </button>
                                <div className="dropup-content mb-4">
                                    <span className={"volume-tip float-start"}>
                                        {Math.round(volume * 100)}
                                    </span>
                                    <p className={"vol volume-up mt-3"} onClick={volumeUp}>
                                        <FontAwesomeIcon icon={faVolumeUp} style={{fontSize: "1.5em"}}/>
                                    </p>
                                    <p className={"vol volume-down mt-3"} onClick={volumeDown}>
                                        <FontAwesomeIcon icon={faVolumeDown} style={{fontSize: "1.5em"}}/>
                                    </p>
                                    <p className={"vol volume-down mt-3"} onClick={volumeMute}>
                                        <FontAwesomeIcon icon={faVolumeMute} style={{fontSize: "1.5em"}}/>
                                    </p>
                                </div>
                            </div>
                        </span>
                        <a href={track_oss[trackIndex].fileUrl}
                           download={track_oss[index].title}
                           className={"mx-3 my-4 border-none"}>
                            <FontAwesomeIcon icon={faDownload} style={{color: "white", fontSize: "2em"}}/>
                        </a>
                        <span className={"mx-3 my-4 border-none"}>
                            <div className="dropup">
                                <button className="dropbtn">
                                    <FontAwesomeIcon icon={faShareFromSquare} style={{fontSize: "2em"}}/>
                                </button>
                                <div className="dropup-content share-items mb-4">
                                    <a href={"/"} className={"share"}>
                                        <FontAwesomeIcon icon={faFacebook} style={{fontSize: "1.5em"}}/>
                                    </a>
                                    <a href={"/"} className={"share"}>
                                        <FontAwesomeIcon icon={faTwitter} style={{fontSize: "1.5em"}}/>
                                    </a>
                                    <a href={"/"} className={"share"}>
                                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize: "1.5em"}}/>
                                    </a>
                                    <a href={"/"} className={"share"}>
                                        <FontAwesomeIcon icon={faWhatsapp} style={{fontSize: "1.5em"}}/>
                                    </a>
                                    <a href={"/"} className={"share"}>
                                        <FontAwesomeIcon icon={faGithub} style={{fontSize: "1.5em"}}/>
                                    </a>
                                </div>
                            </div>
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}


