import React from "react";
import './PodcastList.css';
import {track_oss} from "../../tracks/tracks";
import 'font-awesome/css/font-awesome.min.css';

class PodcastList extends React.Component {
    render() {
        return (
            <ul className="">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8 mx-auto">
                            {track_oss.map((track, i) => (
                                    <li className="trackContainer">
                                        <div className="float-start">
                                            <i className="fa fa-microphone-lines fa-3x"/>
                                        </div>
                                        <div className="mx-auto align-center">
                                            <span className="track-title">{track.title}</span><br/>
                                            <span className="track-podcast-name">{track.podName}</span>
                                            <div className="float-end">
                                                <button className="" type="download">
                                                    <i className="fa fa-down-to-bracket" aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ),
                            )
                            };
                        </div>

                    </div>
                </div>
            </ul>
        )
    }
}

export default PodcastList;