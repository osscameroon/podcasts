import React, {Component} from 'react';
import podcast_logo from '../../../assets/podcast_logo.png';
import './Logo.css';

class Logo extends Component {
    render() {
        return (
            <div className="header_logo">
                <img src={podcast_logo} alt="Podcasts" className="header_logo_image"/>
            </div>
        );
    }
}

export default Logo;