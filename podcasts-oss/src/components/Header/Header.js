import React from 'react';
import './Header.css';
import Logo from "./Logo/Logo";
import $ from 'jquery';
import SearchForm from "./seacrhForm/searchForm";


class Header extends React.Component {
    render() {
        return (
            <div>
            <div className="header">
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
                           
                                <a href="" className="nav-item nav-link active">
                                    <i className="fa fa-sort-amount-asc sort"/>
                                </a>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </nav>
            </div>
            <SearchForm/>    
        </div>
        );
    }
}


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("header-on-scroll");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(".header").removeClass("header-on-scroll");
        }
    });
});
export default Header;