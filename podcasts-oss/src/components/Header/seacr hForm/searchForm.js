import React from 'react';
import './searchForm.css';

class SearchForm extends React.Component {
    render() {
        return (
            <div>
                <form className="no_submit mx-5">
                    <input
                        className="no_submit col-xs-4 px-5 input-sm"
                        type="search"
                        placeholder="Search podcasts..."
                    />
                </form>
            </div>
        );
    }
}

export default SearchForm;