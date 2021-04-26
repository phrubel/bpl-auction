import React from 'react';
// import custom Css
import "./Header.css";

const Header = () => {
    return (
        <div className="Nav">
            <nav>
                <a href="/home">Home</a>
                <a href="/players">Players</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;