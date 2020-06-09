import React from 'react';
import { Employee } from '../Employee/Employee';


const Team = () => {

    const employeeData = [
        {
            img: require('./img/employee_1.jpeg'),
            name: 'John Wick'
        },
        {
            img: require('./img/employee_2.jpeg'),
            name: 'Tony Stark'
        },
        {
            img: require('./img/employee_3.jpeg'),
            name: 'Philippa Sapphire'
        },
        {
            img: require('./img/employee_4.jpeg'),
            name: 'Ella  Harper'
        },
        {
            img: require('./img/employee_5.jpeg'),
            name: 'Connie Fisher'
        },
    ]

    return (
        <ul className="Team__list">
            {employeeData.map(person => <Employee img={person.img} name={person.name} />)}
        </ul>
    )
}

export { Team }