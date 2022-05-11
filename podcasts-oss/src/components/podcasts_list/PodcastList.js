import React from "react";
import './PodcastList.css'

const PodCastComponent = ({track}) => (
    <li className={"trackContainer " + track.active}>
            <div className="float-start">
                <i className="fa fa-microphone-lines fa-5x"/>
            </div>
            <div className="mx-auto align-center">
                <span className="track-title"> {track.id}- {track.title}</span><br/>
                <span className="track-podcast-name text-black-50">{track.podName}</span>
                <div className="float-end">
                    <a href="/" className="border-light bg-transparent text-dark" type="download">
                        <i className="fa-solid fa-down-to-bracket" aria-hidden="true"/>
                    </a>
                </div>
            </div>
        </li>
)

export const PodcastList = ({list}) => (
    <ul>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 mx-auto">
                    {list.map((track) => <PodCastComponent track={track}/> )};
                </div>
            </div>
        </div>
    </ul>
);