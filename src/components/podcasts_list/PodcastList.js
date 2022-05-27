import React, {useContext} from "react";
import './PodcastList.css'
import Player from "../Player/Player";
import AppContext from "../AppContext/AppContext";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const PodCastComponent = ({track, onClick}) => (
    <li className={"trackContainer " + track.active} onClick={onClick}>
        <div>
            <div className="float-start">
                <FontAwesomeIcon icon={faMicrophoneLines} style={{fontSize: "3.3em"}} />
            </div>
            <div className="">
                <span className="track-title">
                    {track.id}- {track.title}
                </span><br/>
                <span className="track-podcast-name text-black-50">
                {track.podName} {track.date}
            </span>
                <div className="float-end" id="download">
                    <a href={track.fileUrl} className="border-light bg-transparent text-dark"
                       type="download">
                        <i className="fa-solid fa-down-to-bracket"  aria-hidden="true"/>
                    </a>
                </div>
            </div>
        </div>
    </li>
)

export default function PodcastList({list}) {
    const {setTrackIndex} = useContext(AppContext);
    return (
        <>
            <ul>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8 mx-auto">
                            {list.map((track, i) => <PodCastComponent
                                    key={i}
                                    track={track}
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


