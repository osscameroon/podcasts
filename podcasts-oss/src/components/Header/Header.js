import React from 'react';
import './Header.css';
import Items from "./Items/Items";
import Logo from "./Logo/Logo";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Logo/>
                <Items/>
            </header>
        );
    }
}

export default Header;