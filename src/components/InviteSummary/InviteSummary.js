import React from 'react';
import './InviteSummary.css'

const InviteSummary = (props) => {
    console.log(props.inviteCelebrities)
    const reducer = (previousValue, celebrity) => {
        return previousValue + celebrity.salary;
    }
    const totalAmount = props.inviteCelebrities.reduce(reducer, 0)
    return (
        <div>
            <h3>invited celebrities summary</h3>
            <p>Total Amount :{totalAmount}</p>
            <div>
                <h4>A list Of celebrities to invite</h4>
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