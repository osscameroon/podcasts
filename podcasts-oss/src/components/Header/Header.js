import React from 'react';
import './Header.css';
import Logo from "./Logo/Logo";
import SearchForm from "./seacr hForm/searchForm";

class Header extends React.Component {
    render() {
        return (
            <div className="m-4">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Logo/>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse">
                            <span>
                                <i className="fa fa-search"/>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <SearchForm/>
                                <a className="nav-item nav-link active">
                                    <i className="fa fa-sort-amount-asc sort"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;