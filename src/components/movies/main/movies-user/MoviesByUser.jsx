import { useState,useEffect,useRef } from "react";
import MovieNotFound from "../movie-not-found/MovieNotFound";
import "./MoviesByUser.css";
import { useNavigate } from "react-router-dom";

export default function MoviesByUser(props) {
  const [userMovies,setUserMovies] = useState(props.data.userMovies);
  const [imgError, setImgError] = useState(false);
  const movieListRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if(userMovies && userMovies.length>0){
      const len = movieListRef.current.children.length;
      if(len < 6) {
        movieListRef.current.style.height = 900 + "px";
      }
    }
  },[userMovies])

  const deleteMovie = (movieId) => {
    for(let i=0; i<userMovies.length; i++) {
      if(userMovies[i].id === movieId) {
        userMovies.splice(i,1);
        setUserMovies([...userMovies]);
      }
    }
    props.onDeleteFavMovie(movieId);
  }

  return (
    <div className="movie-genres">
      {
        userMovies===undefined || userMovies.length === 0 ? 
        <MovieNotFound /> : 
        <div>
          <div className="list-genres">Favorite Movies</div>
          <div className="movie-top clearfix">
            <span>Title</span>
            <span>Rating</span>
          </div>
          <div ref={movieListRef} className="keywords-list">
          {
              userMovies.map((movie,index) => {
                return <div className="movie-item" key={movie.id}>
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
                  <button className="remove-btn" onClick={()=>deleteMovie(movie.id)}>remove</button>
                </div>
              })    
            }
          </div>
        </div>
      }
    </div>
  )
}
