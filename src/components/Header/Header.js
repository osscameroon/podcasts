import React, {useState, useEffect, useContext} from 'react';
import './Header.css';
import podcast_logo from '../../assets/podcast_logo.png';
import {track_oss} from '../../tracks/tracks';
import PodcastList from '../podcasts_list/PodcastList';
import AppContext from "../AppContext/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';


export const Header = () => {

    const [title, setTitle] = useState('');

    //search result
    const {podCastItems, setPodcastItems} = useContext(AppContext);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = track_oss.filter((podcast) => {
                return podcast.title.toLowerCase().includes(keyword.toLowerCase());
            });
            setPodcastItems(results);
        } else {
            setPodcastItems(track_oss);
        }
        setTitle(keyword);
    };
   //sort function
    const sortHandler = () => {

        const sortedItems = track_oss.map((t) => {
            t.dateObj = new Date(t.date)
            return t;
        }).sort((a, b) => {
            return a.dateObj - b.dateObj;
        });
        setPodcastItems(sortedItems);
    }
    const [navSize, satnavSize] = useState("5rem");
    const [navColor, satnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? satnavColor("rgb(119,96,248)") : satnavColor("transparent");
        window.scrollY > 10 ? satnavSize("5rem") : satnavSize("5rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <>
            <div className="header" style={{
                backgroundColor: navColor,
                height: navSize,
                transition: "all 1s"
            }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="header_logo">
                            <a href="/">
                                <img src={podcast_logo} alt="Podcasts" className="header_logo_image"/>
                            </a>
                        </div>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span>
                                <i className="fa fa-search"/>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <div>
                                    <form className="no_submit ">
                                        <input
                                            className="no_submit col-xs-4 px-3 input-sm"
                                            type="search"
                                            value={title}
                                            placeholder="Search podcasts..."
                                            onChange={filter}
                                        />
                                        <span className="sort"
                                            onClick={sortHandler}
                                        >
                                        <FontAwesomeIcon icon={faSortAmountDownAlt} />
                                    </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <PodcastList id="podcast-list" list={podCastItems}/>
        </>
    );
};
