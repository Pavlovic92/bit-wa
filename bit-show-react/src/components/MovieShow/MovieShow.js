import React from 'react';
import { MovieCard } from "../MovieCard/MovieCard";
import { GetData } from "../Data/Data";
import './MovieShow.css';

class MovieShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: []
        };
    }

    componentDidMount() {
        GetData().then(data => {
            console.log(data);
            this.setState({ shows: data });
        });
    }

    render() {
        return (
            <div className="Movie__container container">
                <div className="MovieShow__wrapper row">
                    {this.state.shows.map(movie => (
                        <MovieCard key={movie.id} image={movie.image.original} name={movie.name} />
                    ))}
                </div>
            </div>
        )
    }

}
export { MovieShow };