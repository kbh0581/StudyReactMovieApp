import React from 'react';
import {Link} from 'react-router-dom'
import PropsType from 'prop-types'
import "./Movie.css"



const Movie = ({id,year,title,summary,poster,genres}) => {
    return (
    <Link to={{
        pathname : `/movie/${id}`,
        state:{
            year,
            title,
            summary,
            poster,
            genres
        }

    }}>
    <div className ="movie">
        <img src={poster} alt = {title} title = {title} />
        
        <div className="movies__data">   
            <h3 className="movie__title"> {title}</h3>
            <h4 className="movie__year"> {year}</h4>
            <ul className="movie__genres">
                {
                  genres.map( (item,index)=> <li key={index} className="geners_gener"> {item} </li>)  
                }
            </ul>
            <p className="movie_summary"> {summary.slice(0,140)}...</p>


        </div>
    </div>
    </Link>
    )
}
    

Movie.propTypes = {
    id : PropsType.number.isRequired,
    year : PropsType.number.isRequired,
    title : PropsType.string.isRequired,
    summary : PropsType.string.isRequired,
    poster : PropsType.string.isRequired,
    genres: PropsType.arrayOf(PropsType.string).isRequired
}

export default Movie;