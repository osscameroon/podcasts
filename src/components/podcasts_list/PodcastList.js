import React, {useContext} from "react";
import './PodcastList.css'
import Player from "../Player/Player";
import AppContext from "../AppContext/AppContext";
import {faMicrophoneLines} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const PodCastComponent = ({track, onClick, trunk, trackIndex}) => (
    <li className={trackIndex === track.id - 1 ?
        'active trackContainer' : "trackContainer"}
        onClick={onClick}>
        <div>
            <div className="float-start">
                <FontAwesomeIcon icon={faMicrophoneLines} style={{fontSize: "3.3em"}}/>
            </div>
            <div className="">
                <span className="track-title">
                    {track.id}- {trunk}
                </span><br/>
                <p className="track-podcast-name text-black-50 d-none d-sm-none d-md-none d-lg-block">
                    {track.podName} {track.date}
                </p>
                <div className="float-end" id="download">
                    <a href={track.fileUrl} className="border-light bg-transparent text-dark"
                       type="download">
                        <FontAwesomeIcon icon="fa-solid fa-down-to-bracket" style={{fontSize: "3.3em"}}/>
                    </a>
                </div>
            </div>
        </div>
    </li>
)

export default function PodcastList({list}) {
    const {isActive} = useContext(AppContext);
    const {trackIndex, setTrackIndex} = useContext(AppContext);
    return (
        <>
            <ul>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8 mx-auto">
                            {list.map((track, i) => <PodCastComponent
                                    isActive={isActive}
                                    trunk={track.title}
                                    track={track}
                                    key={track.id}
                                    trackIndex={trackIndex}
                                    onClick={function () {
                                        setTrackIndex(Number(track.id) - 1);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </ul>
            <Player/>
        </>
    )
}
