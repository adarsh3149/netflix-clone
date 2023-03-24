const API_KEY = "da8e64d9a9a0a4bd8cdfb41e4f89bdff";

const requests = {
    fetchTrending:`/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&withnetworks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}
export default requests;