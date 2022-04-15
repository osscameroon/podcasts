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
                            <i className="fas fa-play"></i>
                        </div>
                        <div className="track_playlist">
                            <span className="tracktitle">{track.title}</span>
                            <span className="trackname">{track.podName}</span>
                        </div>
                        <div className="podcastlist_btn_group">
                            <button className="fav_song podcastlist_btn">
                                <i className="far fa-heart fa-lg"></i>
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