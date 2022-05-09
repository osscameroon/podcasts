import React, { useState } from 'react';
import './searchForm.css';
import { track_oss } from '../../../tracks/tracks';
import { PodcastList } from '../../podcasts_list/PodcastList';


export const SearchForm = () => {

    const [title, setTitle] = useState('');

    //search result
    const [podCastItems, setPodcastItems] = useState(track_oss)

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !==''){
            const results = track_oss.filter((podcast) =>{
                return podcast.title.toLowerCase().includes(keyword.toLowerCase());
            });
            setPodcastItems(results);
        } else {
            setPodcastItems(track_oss);
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
            <PodcastList list={podCastItems}/>
        </div>
    );
}
