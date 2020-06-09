import React from 'react';
import './Employee.css';

const Employee = (props) => {
    return (
        <sidebar className="Employee__sidebar">
    <div className="Employee__info">
        <img className="Employee__img" src={props.img} />
        <p className="Employee__name">{props.name}</p>
    </div>
    </sidebar>
    )
}

export { Employee }