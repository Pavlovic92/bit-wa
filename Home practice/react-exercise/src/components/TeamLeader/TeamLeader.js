import React from 'react';

const TeamLeader = (props) => {
    return (
       <div className="TeamLeader__wrapper">
           <img className="TeamLeader__img" src={props.img}></img>
           <h4 className="TeamLeader__name">{props.name}</h4>
           <p className="TeamLeader__desc">{props.desc}</p>
       </div>
    )
}

export { TeamLeader }