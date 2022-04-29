import React from "react";
import './PodcastList.css';
import {track_oss} from "../../tracks/tracks";
import 'font-awesome/css/font-awesome.min.css';
import '../Header/seacrhForm/searchForm.js'
import { foundPodcast } from "../Header/seacrhForm/searchForm.js";

class PodcastList extends React.Component {
    render() {
        return (
            <ul className="">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8 mx-auto">
                        {foundPodcast && foundPodcast.length > 0 ? (
                            foundPodcast.map((track, i) => (
                                    <li className={"trackContainer" + " " + track.active}>
                                        <div className="float-start">
                                            <i className="fa fa-microphone-lines fa-5x"/>
                                        </div>
                                        <div className="mx-auto align-center">
                                            <span className="track-title"> {track_oss.id}- {track.title}</span><br/>
                                            <span className="track-podcast-name text-black-50">{track_oss.podName}</span>
                                            <div className="float-end">
                                                <a className="border-light bg-transparent text-dark" type="download">
                                                    <i className="fa-solid fa-down-to-bracket" aria-hidden="true"/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ),
                            )
                        ) : (
                            <h3>No result</h3>
                        )}
                        </div>
                    </div>
                </div>
            </ul>
        )
    }
}

export default PodcastList;