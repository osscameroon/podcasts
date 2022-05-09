import React from 'react';
import './Header.css';
import { SearchForm } from "./searchForm/searchForm";

export const Header = () => (
    <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="header_logo">
                    <a href="/">
                        <img alt="Podcasts" className="header_logo_image"/>
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
                        <SearchForm/>
                        <a href="" className="nav-item nav-link active">
                            <i className="fa fa-sort-amount-asc sort"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);
