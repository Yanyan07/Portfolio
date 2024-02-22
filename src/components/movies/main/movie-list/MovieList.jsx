import { useState, useEffect,useRef } from "react";
import './MovieList.css';
import MovieNotFound from '../movie-not-found/MovieNotFound';
import { useNavigate } from "react-router-dom";

export default function MovieList(props) {
  const [genres,setGenres] = useState(props.data.types);
  const [movies,setMovies] = useState(props.data.movies);
  const [genresObj,setGenresObj] = useState({
    action: [],
    comedy: [],
    drama: [],
    fantasy: [],
    horror: [],
    mystery: [],
    romance: []
  })
  const [indexObj, setIndexObj] = useState({
    action: 0,
    comedy: 0,
    drama: 0,
    fantasy: 0,
    horror: 0,
    mystery: 0,
    romance: 0
  });
  const [imgError,setImgError] = useState(false);
  const movieList = useRef({});
  const navigate = useNavigate();


  useEffect(() => {
    initMoviesGenres(movies, genres);
  }, [])
  useEffect(()=>{
    if(genres.length > 0){
      genres.forEach((g) => {
        if(movieList.current[g.name]) {
          const children = movieList.current[g.name].children;
          movieList.current[g.name].style.width = 240*children.length + "px";
        }
      })
    }
  },[genres,genresObj])
  useEffect(()=>{
    if(genres.length > 0){
      genres.forEach((g) => {
        if(movieList.current[g]) {
          const children = movieList.current[g].children;
          movieList.current[g].style.width = 240*children.length + "px";
        }
      })
    }
  },[genres,genresObj])

  const getMoviesByGenres = (movies, genres)=> {
    const res = [];
    movies.forEach((movie) => { 
      movie.genres.includes(genres) && res.push(movie);
    })
    return res;
  }
  const initMoviesGenres = (movies, genres)=>{
    let actionMovies = [];
    let comedyMovies = [];
    let dramaMovies = [];
    let fantasyMovies = [];
    let horrorMovies = [];
    let mysteryMovies = [];
    let romanceMovies = [];
    genres.forEach((g) => {
      switch(g) {
        case 'action':
          actionMovies = getMoviesByGenres(movies,'action');
          break;
        case 'comedy':
          comedyMovies = getMoviesByGenres(movies,'comedy');
          break;
        case 'drama':
          dramaMovies = getMoviesByGenres(movies,'drama');
          break;
        case 'fantasy':
          fantasyMovies = getMoviesByGenres(movies,'fantasy');
          break;
        case 'horror':
          horrorMovies = getMoviesByGenres(movies,'horror');
          break;
        case 'mystery':
          mysteryMovies = getMoviesByGenres(movies,'mystery');
          break;
        case 'romance':
          romanceMovies = getMoviesByGenres(movies,'romance');
          break;
        default:
          break;
      }
    })
    setGenresObj(genresObj => ({
      ...genresObj, action:actionMovies
    }))
    setGenresObj(genresObj => ({
      ...genresObj, comedy:comedyMovies
    }))
    setGenresObj(genresObj => ({
      ...genresObj, drama:dramaMovies
    }))
    setGenresObj(genresObj => ({
      ...genresObj, fantasy:fantasyMovies
    }))
    setGenresObj(genresObj => ({
      ...genresObj, horror:horrorMovies
    }))
    setGenresObj(genresObj => ({
      ...genresObj, mystery:mysteryMovies
    }))
    setGenresObj(genresObj => ({
      ...genresObj, romance:romanceMovies
    }))
  }

  const getPrev = (dire, genresName)=>{
    const styles = getComputedStyle(movieList.current[genresName]);
    const movieListLeft = styles.left;
    const leftValue = parseInt(movieListLeft);
    const children = movieList.current[genresName].children;
    const newIndexObj = Object.assign({}, indexObj);
    if(dire==="pre" && children.length-indexObj[genresName]>5){
      movieList.current[genresName].style.left = leftValue - 240 + "px";
      newIndexObj[genresName] = indexObj[genresName] + 1;
    }
    if(dire==="next" && indexObj[genresName]>0){
      movieList.current[genresName].style.left = leftValue + 240 + "px";
      newIndexObj[genresName] = indexObj[genresName] - 1;
    }
    setIndexObj(newIndexObj);
  }
    
  const showDetail = (movieId)=>{
    navigate(`/detail/${movieId}`);
  }


  return (
    <div className="movie-container">
      {
        genres.length === 0 ?
        <MovieNotFound /> :
        genres.map((g,index) => {
          return <div className="genres clearfix" key={index}>
            <div className="genres-name">{g}</div>
            <ul ref={(node)=>{movieList.current[g] = node;}} className="movie-ul">
              {
                genresObj[g].length===0 ?
                <MovieNotFound /> :
                genresObj[g].map((movie)=>{
                  return <li key={movie.id} className="movie-list" onClick={()=>showDetail(movie.id)} >
                    <img src={(!imgError)? require(`../../../../images/movies/${movie.img_url}`) : require(`../../../../images/movies/clover.png`)} 
                        alt="movie-pic"
                        onError={()=>setImgError(true)}
                    />
                    <div>{movie.name}</div>
                  </li>
                })
              }
            </ul>
            <div>
              <div className="pre-arrow arrow" onClick={()=>{getPrev("pre", g)}}>
                <img src={require("../../../../images/movies/arrow.jpeg")} alt="movie-pic" />
              </div>
              <div className="post-arrow arrow" onClick={()=>{getPrev("next", g)}}>
                <img src={require("../../../../images/movies/arrow.jpeg")} alt="movie-pic" />
              </div>
            </div>
          </div>
        })
      }   
    </div>
  )
}
