import React from 'react';
import { NavLink } from 'react-router-dom';
import Person from '../Person/Person';
import './InviteSummary.css';

const InviteSummary = (props) => {
    // console.log(props.inviteCelebrities)
    const { totalAddCelebrities } = props;
    const reducer = (previousValue, celebrity) => {
        return previousValue + celebrity.salary;
    }
    const totalAmount = props.inviteCelebrities.reduce(reducer, 0)
    return (
        <div>
            <h2>invited celebrities summary</h2>
            <h4>Total Invite :{totalAddCelebrities} </h4>
            <p>Total Amount :{totalAmount}</p>

            <div className="child-container">
                <h3>A list Of celebrities to invite</h3>
                <div>
                    {
                        props.inviteCelebrities.map(celebrity => <Person key={celebrity.id} celebrity={celebrity}></Person>)
                    }
                </div>
                <NavLink to="/inviteReview" className="see-invite-person">See Details</NavLink>
            </div>
        </div>
    );
};

export default InviteSummary;