import React, {useContext} from "react";
import './PodcastList.css'
import Player from "../Player/Player";
import AppContext from "../AppContext/AppContext";
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

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
                <div className="float-end" >
                    <a href={track.fileUrl} className="border-light bg-transparent text-dark"
                       type="download">
                        <FontAwesomeIcon icon={faDownload} style={{color: "dark", fontSize: "1em",}} />
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
                    <div className="side-bar col-3 col-md-3">
                            <span className="">
                                <p id="content">In just a click on the plane below, Join the <span id="Logname">OSS Community</span> <br/> now!</p>
                                <hr id="line"/>
                                <span>
                               <a href="https://t.me/+O7SQfusW8XVmOTFi" className="fa-5x">
                               <FontAwesomeIcon icon={faTelegramPlane} style={{fontSize: "1em"}} id="telegram"/>
                              </a> 
                            </span>
                            </span>
                        </div>
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
