import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
    return <div className="movies__item">
        <h3 className="movies__item__title">- {title}({year})</h3>
        <img className="movies__item__image" src={poster} alt={title} title={title} />
        <div className="movies__item__data">
            <h3 className="movies__item__genre_title">Genre :</h3>
            <ul className="movies__item__genres">{genres.map((genre, index) => (
                <li key={index} className="movies__item__genres__genre">{genre}</li>     
            ))}</ul>
            <p className="movies__item__summary"><b>Summary: </b>{summary.slice(0, 125)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;