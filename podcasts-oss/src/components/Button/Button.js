import React, { useState, useEffect } from "react";
import { track_oss } from '../../tracks/tracks'


export const Button = () => {
    
    const [ sortPodcast, setSortPodcast] = useState([]);

    const [ sortType, setsortType ] = useState();

    useEffect(() => {
         
        const sortItem = type => {

            const types = { track_oss};

            const sortProperty = types[type];
            const sorted = [ track_oss].sort((a, b)=>
            b[sortProperty] - a[sortProperty]);
            setSortPodcast(sorted);
        };
        sortItem(sortType);
     
      return () => {
        <div>
        <a href="/" className="nav-item nav-link active">
                                
        <i className="fa fa-sort-amount-asc sort" onClick= {(e) => setsortType(e.target.value)}/>
                                </a> 
        
        {sortPodcast.map(track_oss => (
            <div>
            <span className="track-title"> {track_oss.id}- {track_oss.title}</span><br/>
            <span className="track-podcast-name text-black-50">{track_oss.podName}</span>
            </div>
             ))}
        </div>
      };
    }, )

}
