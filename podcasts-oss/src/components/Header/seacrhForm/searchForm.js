import React, { useState } from 'react';
import './searchForm.css';
import { track_oss } from '../../../tracks/tracks';



function SearchForm(){
 
        const [ title, setTitle] = useState('');
        
        //search result
        const [ foundPodcast, setPodcast] = useState( track_oss)

        const filter = (e) => {
            const keyword = e.target.value;

            if (keyword !==''){
                const results = track_oss.filter((podcast) =>{
                    return podcast.title.toLowerCase().includes(keyword.toLowerCase());
                });
                setPodcast(results);
            } else {
                setPodcast(track_oss);
            }
            setTitle(keyword);
        };
        return (
            <div>
                 <form className="no_submit  mx-5">
                    <input
                        className="no_submit col-xs-4 px-5 input-sm"
                        type="search"
                        value={title}
                        placeholder="Search podcasts..."
                        onChange={filter}
                    />
                </form> 
                {/* <ul className="">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-md-8 mx-auto">
                        {foundPodcast && foundPodcast.length > 0 ? (
                            foundPodcast.map((podcast) => (
                                    <li className={"trackContainer" + " " + podcast.active}>
                                        <div className="float-start">
                                            <i className="fa fa-microphone-lines fa-5x"/>
                                        </div>
                                        <div className="mx-auto align-center">
                                            <span className="track-title"> {podcast.id}- {podcast.title}</span><br/>
                                            <span className="track-podcast-name text-black-50">{podcast.podName}</span>
                                            <div className="float-end">
                                                <a className="border-light bg-transparent text-dark" type="download">
                                                    <i className="fa-solid fa-down-to-bracket" aria-hidden="true"/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    ))
                                  ) : (

                                  <h1>No results</h1>
                                 )}
                        </div>
                    </div>
                </div>
                
            </ul> */}
            {/* <h1>No results</h1> */}
            </div>
                
        );
}

export default SearchForm;