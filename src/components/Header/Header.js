import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <nav>
                {/* set website name  */}
                <h2>MeetUp</h2>
                <div className="link-container">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/inviteCelebrity">Invite</NavLink>
                    <NavLink to="./inviteReview">Review</NavLink>
                    <NavLink to="./contact">Contact</NavLink>
                    <NavLink to="./book">Book Ticket</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;