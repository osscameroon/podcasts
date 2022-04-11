import React from 'react';
import './Items.css';

const MenuItems = [
    {
        'item_name': 'Courses',
        'item_url': '#courses',
        'separation': '|',
    },
    {
        'item_name': 'Podcasts',
        'item_url': '#podcasts',
        'separation': '|',
    },
    {
        'item_name': 'Blog',
        'item_url': '#blog',
        'separation': '',
    }
]

class Items extends React.Component {
    render() {
        return (
            <div className="items">
                <ul className="item">
                    {
                        MenuItems.map((item, index) => {
                                return (
                                    <li>
                                        <a href={item.item_url} key={index}>{item.item_name}</a>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.separation}&nbsp;&nbsp;&nbsp;&nbsp;
                                    </li>
                                )
                            }
                        )
                    }
                </ul>
                <p className="btn btn-outline-light rounded-circle mx-5 my-4 p-mx-2">EN</p>
            </div>
        )
    }
}

export default Items;