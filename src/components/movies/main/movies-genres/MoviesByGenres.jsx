import './MoviesByGenres.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MovieNotFound from '../movie-not-found/MovieNotFound';

export default function MoviesByGenres(props) {
  const [movies,setMovies] = useState(props.data.movies);
  const [genresMovies,setGenresMovies] = useState([]);
  const [imgError,setImgError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const gMovies = getMoviesByGenres(movies, params.myinput);
    setGenresMovies(gMovies);
  }, [params.myinput])

  const showDetail = (movieId)=>{
    navigate(`/detail/${movieId}`);
  }
  const getMoviesByGenres = (movies, genres)=> {
    const res = [];
    movies.forEach((movie) => { 
      movie.genres.includes(genres.toLowerCase()) && res.push(movie);
    })
    return res;
  }

  return (
    <div className="movie-genres">
      {
        genresMovies.length===0 ? 
        <MovieNotFound /> :
        <div>
          <div className="list-genres">{params.myinput.charAt(0).toUpperCase() + params.myinput.substring(1)} Movies</div>
          <div className="movie-top clearfix">
            <span>Title</span>
            <span>Rating</span>
          </div>
          {
            genresMovies.map((movie,index) => {
              return <div className="movie-item" key={movie.id} onClick={()=>showDetail(movie.id)}>
                <img className="movie-info" src={(!imgError)? require(`../../../../images/movies/${movie.img_url}`): require('../../../../images/movies/clover.png')}
                    alt="movie-pic"
                    onError={()=>setImgError(true)}
                />
                
                <div className="movie-info title">{index+1}. {movie.name}</div>
                <div className="movie-info year">({movie.released_year})</div>
                <div className="movie-info rate">⭐️&nbsp;  
                  {
                    movie.rate.toString().length<2 ?
                    movie.rate+".0" :
                    movie.rate
                  }
                </div>
              </div>
            }) 
          }
        </div>
      }
    </div>
  )
}