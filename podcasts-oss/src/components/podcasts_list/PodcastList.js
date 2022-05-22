import React, {useContext} from "react";
import './PodcastList.css'
import Player from "../Player/Player";
import AppContext from "../AppContext/AppContext";


export const PodCastComponent = ({track, onClick}) => (
    <li className={"trackContainer " + track.active} onClick={onClick}>
        <div>
            <div className="float-start">
                <i className="fa fa-microphone-lines fa-5x"/>
            </div>
            <div className="mx-auto align-center">
                <span className="track-title">
                    {track.id}- {track.title}
                </span><br/>
                <span className="track-podcast-name text-black-50">
                {track.podName}
            </span>
                <div className="float-end">
                    <a href={track.fileUrl} className="border-light bg-transparent text-dark"
                       type="download">
                        <i className="fa-solid fa-down-to-bracket" aria-hidden="true"/>
                    </a>
                </div>
            </div>
        </div>
    </li>
)

export default function PodcastList({list}) {
    const {trackIndex, setTrackIndex} = useContext(AppContext);
    return (
        <>
            <ul>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8 mx-auto">
                            {list.map((track) => <PodCastComponent track={track} onClick={function () {
                                setTrackIndex(Number(track.id) - 1);
                            }}/>)}
                        </div>
                    </div>
                </div>
            </ul>
            <Player/>
        </>
    )
}