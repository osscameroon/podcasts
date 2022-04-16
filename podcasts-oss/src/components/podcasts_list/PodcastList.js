import React from "react";
import './PodcastList.css';
import { track_oss } from "../../tracks/tracks";
class PodcastList extends React.Component {
    render(){
        return(
             <div className="PodcastList">
             <ul className="loi">
                {track_oss.map((track, i)=>(
                    <li className="trackContainer">
                        <div className="track_play">
                            <i className="fas fa-microphone fa-3x"></i>
                        </div>
                        <div className="track_playlist">
                            <span className="tracktitle">{track.title}</span><br/>
                            <span className="trackname">{track.podName}</span>
                        </div>
                        <div className="download_pod">
                            <button className="podcastlist_but" type="download">
                                <i className="fas fa-download" aria-hidden="true"></i>
                            </button>
                        </div>
                    </li>
                ))}
             </ul>
            </div>
        )
    }
}
export default PodcastList;