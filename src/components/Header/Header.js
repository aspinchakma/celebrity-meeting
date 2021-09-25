import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav>
                <h2>Milibong</h2>
                <div className="link-container">
                    <a href="./home">Home</a>
                    <a href="./contact">Contact</a>
                    <a href="./about">About</a>
                    <a href="./book">Book Ticket</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;