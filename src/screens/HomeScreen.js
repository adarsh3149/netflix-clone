import React from 'react'
import Banner from '../Components/Banner'
import './HomeScreen.css'
import Nav from '../Components/Nav'
import Row from '../Components/Row'
import requests from '../Components/Request'
const HomeScreen = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='TRENDING NOW'
        fetchURL={requests.fetchTrending}
      />
      <Row
        title='TOP RATED'
        fetchURL={requests.fetchTopRated}
      />
      <Row
        title='ACTION MOVIES'
        fetchURL={requests.fetchActionMovies}
      />
      <Row
        title='COMEDY MOVIES'
        fetchURL={requests.fetchComedyMovies}
      />
      <Row
        title='HORROR MOVIES'
        fetchURL={requests.fetchHorrorMovies}
      />
      <Row
        title='ROMANCE MOVIES'
        fetchURL={requests.fetchRomanceMovies}
      />
      <Row
        title='DOCUMENTARIES'
        fetchURL={requests.fetchDocumentaries}
      />
    </>

  )
}

export default HomeScreen