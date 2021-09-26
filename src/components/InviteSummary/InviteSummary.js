import React from 'react';
import './InviteSummary.css'

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

            <div>
                <h3>A list Of celebrities to invite</h3>
                <ol>
                    {
                        props.inviteCelebrities.map(celebrity => <li key={celebrity.id}>{celebrity.name}</li>)
                    }
                </ol>
            </div>
        </div>
    );
};

export default InviteSummary;