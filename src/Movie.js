import React from 'react';
import PropsType from 'prop-types'


const Movie = ({id,yaer,title,summary,poster}) => {
    return <h5> {title}</h5>
}
    

Movie.propsTypes = {
    id : PropsType.number.isRequired,
    year : PropsType.number.isRequired,
    title : PropsType.string.isRequired,
    summary : PropsType.string.isRequired,
    poster : PropsType.string.isRequired,
}

export default Movie;