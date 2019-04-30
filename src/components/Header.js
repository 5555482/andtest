import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return <header>
            <div className="container">
                <h3 className="header">Hacker News</h3>
            </div>
        </header>
    }
}

export default Header;