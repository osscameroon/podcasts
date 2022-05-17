import React, { useState, useEffect }from 'react';
import './Header.css';
import '../Header/searchForm/searchForm.css';
import podcast_logo from '../../assets/podcast_logo.png';
import { track_oss } from '../../tracks/tracks';
import { PodcastList } from '../podcasts_list/PodcastList';

export const Header = () => {

    const sortHandler = () => {
        console.log("Clicked");
        const sortedt = track_oss.map((t) => {
            t.dateObj = new Date(t.date)
            return t;
        }).sort((a, b) => {
            return b.dateObj - a.dateObj;
        });
        console.log(sortedt)
        //console.log(track_oss.sort((a,b)=> new Date(a.date) > new Date(b.date)))
    }
    

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


    const [navSize, satnavSize] = useState("10rem");
    const [navColor, satnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? satnavColor("rgb(119,96,248)") : satnavColor("transparent");
        window.scrollY > 10 ? satnavSize("10rem") : satnavSize("10rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return <>
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
                                 <form className="no_submit mx-5">
                                    <input
                                        className="no_submit col-xs-4 px-5 input-sm"
                                        type="search"
                                        value={title}
                                        placeholder="Search podcasts..."
                                        onChange={filter}
                                    />
                                    <span className="fa fa-sort-amount-asc sort btn"
                                        onClick={sortHandler()}>
                                    </span>
                                </form>
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
                            <a href="/podcasts">
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

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <PodcastList list={podCastItems}/>
    </>;
}