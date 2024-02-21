import React, { useEffect, useState } from 'react'

function Movie () {
    const [movielist, setmovielist] = useState([])

    const getMovie = () => {
        fetch("https://api.themoviedb.org/3/trending/all/week?api_key=6d041dad9572ee4b721003aec0574a6e")
        .then(res => res.json())
        .then(json => {
            console.log(json.results)
            setmovielist(json.results)
        })
    }    

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            {movielist.map((movie) => (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                
            ))}
        </div>
    )
}

export default Movie
