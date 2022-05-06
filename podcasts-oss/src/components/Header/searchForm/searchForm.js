import React, { useState } from 'react';
import './searchForm.css';
import { track_oss } from '../../../tracks/tracks';



function SearchForm(){
        
        const [ title, setTitle] = useState('');
        
        //search result
        const [  setPodcast] = useState( track_oss)

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
                 <form className="no_submit mx-5">
                    <input
                        className="no_submit col-xs-4 px-5 input-sm"
                        type="search"
                        value={title}
                        placeholder="Search podcasts..."
                        onChange={filter}
                        
                    />
                </form> 
            </div>
        );
    }
    //export function SearchForm();
export default SearchForm;