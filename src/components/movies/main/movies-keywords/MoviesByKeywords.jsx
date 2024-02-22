import { useState,useEffect,useRef } from "react";
import { useNavigate,useParams } from "react-router-dom";
import MovieNotFound from '../movie-not-found/MovieNotFound';

export default function MoviesByKeywords(props) {
  const [movies,setMovies] = useState(props.data.movies);
  const [keywordsMovies,setKeywordsMovies] = useState([]);
  const [imgError,setImgError] = useState(false);
  const movieListRef = useRef();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const kMovies = getMoviesByKeywords(movies, params.myinput);
    setKeywordsMovies(kMovies);
  }, [params.myinput])
  useEffect(() => {
    if(keywordsMovies && keywordsMovies.length>0){
      const len = movieListRef.current.children.length;
      if(len < 6) {
        movieListRef.current.style.height = 900 + "px";
      }
    }
  },[keywordsMovies])

  const getMoviesByKeywords = (movies, keywords)=> {
    const res = [];
    movies.forEach((movie) => { 
      movie.name.includes(keywords.toLowerCase()) && res.push(movie);
    })
    return res;
  }
  const showDetail = (movieId)=>{
    navigate(`/detail/${movieId}`);
  }

  return (
    <div className="movie-genres">
      {
        keywordsMovies.length===0 ? 
        <MovieNotFound /> :
        <div>
          <div className="list-genres">Movies with keywords: {params.myinput}</div>
          <div className="movie-top clearfix">
            <span>Title</span>
            <span>Rating</span>
          </div>
          <div ref={movieListRef} className="keywords-list">
            {
              keywordsMovies.map((movie,index) => {
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
        </div>
      }
    </div>
  )
}
