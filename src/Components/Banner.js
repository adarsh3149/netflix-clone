import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Request'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, [])

    

    // async function fetchData() {
    //     const data = await fetch(requests.fetchNetflixOriginals);
    //     const response = await data.json();
    //     setMovie(
    //         response.data.results[
    //                 Math.floor(Math.random() * response.data.results.length - 1)
    //                 ]
    //             )
    // }
    console.log(movie)
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <>
            <header className='banner'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center ",
                }}

            >
                <div className="banner_contents">
                    <h1 className="banner_titles">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner_buttons">
                        <button className='banner_button'>Play</button>
                        <button className='banner_button'>My List</button>
                    </div>

                    <h1 className="banner_description">
                        {truncate(movie?.overview, 175)}
                    </h1>
                </div>
                <div className="banner--fadebottom" />
            </header>
        </>

    )
}

export default Banner