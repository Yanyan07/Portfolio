import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import './MovieDetail.css';

export default function MovieDetail(props) {
  const [movies,setMovies] = useState(props.data.movies);
  const [movie,setMovie] = useState();
  const [currentUser,setCurrentUser] = useState(props.data.currentUser)
  const [imgError,setImgError] = useState(false);
  const [isDelete,setIsDelete] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    movies.forEach((m) => {
      if(params && m.id===params.mid*1) {
        setMovie(m)
      }
    })
  },[])

  const handleAdd = ()=>{
    const username = currentUser.username;
    if(!username) {
      navigate("/signin");
    }else {
      let included = false;
      for(let i=0; i<currentUser.favoriteMovies.length; i++) {
        if(currentUser.favoriteMovies[i].id === movie.id) {
          included = true;
        }
      }
      if(!included) {
        currentUser.favoriteMovies.push(movie);
        props.onfavoriteMovies(currentUser.favoriteMovies);
        setCurrentUser(currentUser);
      }
    }
  }
  // const handleNew = ()=>{
  //   navigate('/add');
  // }
  const handleUpdate = ()=>{
    navigate(`/update/${movie.id}`);
  }
  const handleDelete = ()=>{
    setIsDelete(true);
  }
  const deleteProcess = ()=>{
    props.onDeleteMovie(movie.id);
    navigate('/');
  }


  return (
    movie && 
    <div className="movie-detail">
      <h2 className="title">{movie.name}</h2>
      <div className="clearfix">
        <div className="year">{movie.released_year} -</div>
        <div className="minutes">{movie.minutes}m</div>
        <div className="rate">
          <div>rating:</div>
          <div>⭐️ <span>
          {
            movie.rate.toString().length<2 ?
            movie.rate+".0" :
            movie.rate
          }
          </span>/10</div>
        </div>
      </div>
      <div className="movie-img">
        <img src={(!imgError)? require(`../../../../images/movies/${movie.img_url}`) : require(`../../../../images/movies/clover.png`)}
             alt="movie-pic"
             onError={()=>setImgError(true)}
         />
      </div>
      <div className="detail-genres">
        {
          movie.genres.map((genres,index) => {
            return <button key={index}>
              {genres}
            </button>
          })
        }
      </div>
      <div className="desc">{movie.description}</div>
      <button className="pin" onClick={handleAdd}>Add to Cart</button>
      {
        currentUser && currentUser.role==='admin' &&
        <span>
          {/* <button className="pin" onClick={handleNew}>New Movie</button> */}
          <button className="pin update" onClick={handleUpdate}>Update</button>
          <button className="pin delete" onClick={handleDelete}>Delete</button>
          {
            isDelete &&
            <button className="pin delete" onClick={deleteProcess}>Are you sure to delete?</button> 
          }
        </span>
      }
    </div>
    
  )
}
