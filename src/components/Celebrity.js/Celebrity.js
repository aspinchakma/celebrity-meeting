import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Celebrity.css'

const Celebrity = (props) => {
    const { name, img, age, position, salary } = props.celebrity;
    return (
        <div className="celebrity">
            <img src={img} alt="" />
            <h2>Name : {name}</h2>
            <p>Age : {age}</p>
            <p>Position : {position}</p>
            <p>Salary : ${salary}</p>
            <button onClick={() => props.invitePersonList(props.celebrity)} className="invite-button">Invite <FontAwesomeIcon className="invite-icon" icon={faPlus} /> </button>
        </div>
    );
};

export default Celebrity;