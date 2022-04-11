import React from 'react';
import './Items.css';

const MenuItems = [
    {
        'item_name': 'Courses',
        'item_url': '#courses',
    },
    {
        'item_name': 'Podcasts',
        'item_url': '#podcasts'
    },
    {
        'item_name': 'Blog',
        'item_url': '#blog'
    }
]

class Items extends React.Component {
    render() {
        return (
            <div className="items">
                {
                    MenuItems.map((item, index) => {
                            return (
                                <ul className="item" key={index}>
                                    <li><a href={item.item_url}>{item.item_name}</a></li>
                                </ul>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default Items;