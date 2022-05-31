import React, {useState, useEffect, useContext} from 'react';
import './Header.css';
import podcast_logo from '../../assets/podcast_logo.png';
import {track_oss} from '../../tracks/tracks';
import PodcastList from '../podcasts_list/PodcastList';
import AppContext from "../AppContext/AppContext";
import {
    faSearch,
    faBars,
    faSortAmountAsc,
    faClose
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
    const [navSize, setNavSize] = useState("6rem");
    const [navColor, setNavColor] = useState("transparent");
    const [swapClass, setSwapClass] = useState(true);
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setNavColor("rgb(119,96,248)") : setNavColor("transparent");
        window.scrollY > 10 ? setNavSize("6rem") : setNavSize("6rem");
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
                    <div className="container-fluid" style={{padding:'6px'}}>
                        <div className="header_logo">
                            <a href="/">
                                <img src={podcast_logo} alt="Podcasts" className="header_logo_image"/>
                            </a>
                        </div>
                        <button type="button" className="navbar-toggler float-end" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span style={{
                                transition: "all 1s"
                            }}
                                onClick={function () {
                                setSwapClass(!swapClass)}}>
                                <FontAwesomeIcon icon={swapClass ? faBars : faClose}/>

                            </span>
                        </button>
                        <div className="collapse navbar-collapse col col-md-6  col-sm-10 "
                             id="navbarCollapse">
                            <input id='search'
                                className="w-75  px-3"
                                type="search"
                                value={title}
                                placeholder="Search podcasts..."
                                onChange={filter}
                            />
                            <FontAwesomeIcon icon={faSearch} viewBox={"900 0 512 512"}/>
                        </div>
                        <div className=" d-none d-sm-none d-md-none d-lg-block">
                            <span className=" btn d-none d-sm-none d-md-none d-lg-block"
                                  onClick={sortHandler}>
                                <FontAwesomeIcon icon={faSortAmountAsc} style={{margin:'0px'}}/>
                            </span>
                        </div>
                        <div className={"col col-4 d-none d-sm-none d-md-none d-lg-block"}></div>
                    </div>
                </nav>
            </div>
            <PodcastList id="podcast-list" list={podCastItems}/>
        </>
    );
};
