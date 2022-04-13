import React from 'react';
import './Header.css';
import Logo from "./Logo/Logo";
import SearchForm from "./seacr hForm/searchForm";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo/>
                <SearchForm/>
                <i className=" fab fa-telegram">
                </i>
            </header>
        );
    }
}

export default Header;