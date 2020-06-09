import React from 'react';
import { TeamLeader } from '../TeamLeader/TeamLeader';


const TeamLeaders = () => {

    const TeamLeadersData = [
        {
            img: require('./img/man_leader.png'),
            name: 'Nick Rogers',
            desc: 'Hello, I am coming from Washington.'
        },
        {
            img: require('./img/man_leader_2.png'),
            name: 'Richard Castle',
            desc: 'Hello, I am coming from New York. Are you ready to work?'
        },
        {
            img: require('./img/woman_leader.png'),
            name: 'Catherine Becket',
            desc:'Hi, I am coming from New Jersey!'
        }
    ]

    return (
        <ul className="TeamLeaders__list">
            {TeamLeadersData.map(leader => <TeamLeader img={leader.img} name={leader.name} desc={leader.desc} />)}
        </ul>
    )
}

export { TeamLeaders }