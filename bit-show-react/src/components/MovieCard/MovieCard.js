import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MovieCard.css'

const MovieCard = (props) => {
    return (

        <div className="MovieCard__wrapper col-lg-4">
            <img id="MovieCard__image" src={props.image} alt={props.name}></img>

            <h4 className="MovieCard__title"> {props.name}</h4>
        </div>
    )
}

export { MovieCard };