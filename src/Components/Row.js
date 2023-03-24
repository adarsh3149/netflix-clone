
import { Box, IconButton } from '@mui/material'
import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import axios from './axios'
// import requests from './Request'
import './Row.css'
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Scroll } from "./Scroll";

function Row({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    const scrollRef = Scroll();
    const [trailerUrl, setTrailerUrl] = useState("")
    // const trailerUrls = "https://www.youtube.com/watch?v="
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchURL])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        } else {
            movieTrailer(movie?.title || " " )
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"))
                }).catch((error) => console.log(error))
        }
    }
    // async function fetchData() {
    //     const data = await fetch(fetchURL);
    //     const response = await data.json();
    //     setMovies(response.data.results)
    // }
    // console.log(movies)
    return (
        <>
            <div className="row"  >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2>{title}</h2>
                    <IconButton>
                        {/* <ChevronRightIcon sx={{color:"white"}}></ChevronRightIcon> */}
                    </IconButton>
                </Box>
                <div className="row_posters" ref={scrollRef}>
                    {movies?.map(movie => (
                        ((isLargeRow && movie.poster_path) || 
                        (!isLargeRow && movie.backdrop_path)) && (
                            <div className='card' key={movie.id}>
                            <img
                                onClick={() => handleClick(movie)}
                                className={`row_poster ${isLargeRow && "row_largePoster"}`}

                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`} alt={movie.title} />
                        
                            <h5 className='title'>{movie.title}</h5>
                        </div>
                        )

                        
                    ))}
                </div>

                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
        </>
    )
}

export default Row