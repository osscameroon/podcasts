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
                        <div className="col-xs-12 col-sm-6 col-md-6 mx-auto">
                            {track_oss.map((track, i) => (
                                    <li className="trackContainer">
                                        <div className="track_play">
                                            <i className="fa fa-microphone-lines fa-3x"/>
                                        </div>
                                        <div className="track_playlist">
                                            <span className="track_title">{track.title}</span><br/>
                                            <span className="track_name">{track.podName}</span>
                                        </div>
                                        <div className="download_pod">
                                            <button className="podcastlist_but" type="download">
                                                <i className="fa fa-down-to-bracket" aria-hidden="true"/>
                                            </button>
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