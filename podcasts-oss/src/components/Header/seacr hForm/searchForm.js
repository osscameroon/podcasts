import React from 'react';
import './searchForm.css';

class SearchForm extends React.Component {
    render() {
        return (
            <div className="float-start py-5 mx-2">
                <form className="no_submit">
                    <input className="no_submit" type="search" placeholder="Search podcasts..."/>
                </form>
            </div>
        );
    }
}

export default SearchForm;