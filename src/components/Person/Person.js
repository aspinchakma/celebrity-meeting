import React from 'react';
import './Person.css'
const Person = (props) => {
    console.log(props)
    const { celebrity } = props;
    const { img, name, salary } = celebrity;
    console.log(celebrity)
    return (
        <div className="single-person-container">
            <img src={img} alt="" />
            <div>
                <p>{name}</p>
                <p>Salary : ${salary}</p>
            </div>
        </div>
    );
};

export default Person;