import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function MovieUpdate(props) {
  const params = useParams();
  const [movie, setMovie] = useState();
  const [movieInfo,setMovieInfo] = useState({
    name: '',
    description: '',
    img_url: '',
    minutes: 0,
    released_year: 0,
    rate: 0,
    genres: []
  });
  const navigate = useNavigate();

  
  useEffect(() => {
    const movies = props.data.movies;
    movies.forEach(m => {
      if(m.id === params.mid*1) {
        setMovie(m);
      }
    });
  },[])

  const getInfo = (e,movieData)=>{
    if(movieData === 'genres') {
      const gs = e.target.value;
      movieInfo[movieData] = gs.split(/[ ,]/);
    }else {
      movieInfo[movieData] = e.target.value;
    }
    setMovieInfo({...movieInfo});
  }
  const handleUpdate = () => { 
    for(const key in movieInfo){
      if(!movieInfo[key] || movieInfo[key].length===0) {
        movieInfo[key] = movie[key];
      }
    }
    setMovieInfo(movieInfo);
    props.onUpdateMovie({...movieInfo,id:movie.id});
    navigate(`/detail/${movie.id}`)
  }


  return (
    movie && 
    <div className="sign-in">
      <h1>Update Movie</h1>
      <div>
        <input type="text" placeholder={movie.name} onChange={(e)=>getInfo(e,"name")} />
      </div>
      <div>
        <input type="text-area" placeholder={movie.description} onChange={(e)=>getInfo(e,"description")} />
      </div>
      <div>
        <input type="text" placeholder={movie.img_url} onChange={(e)=>getInfo(e,"img_url")} />
      </div>
      <div>
        <input type="number" placeholder={movie.minutes} onChange={(e)=>getInfo(e,"minutes")} />
      </div>
      <div>
        <input type="number" placeholder={movie.released_year} onChange={(e)=>getInfo(e,"released_year")} />
      </div>
      <div>
        <input type="text" placeholder={movie.rate} onChange={(e)=>getInfo(e,"rate")} />
      </div>
      <div>
        <input type="text" placeholder={movie.genres.map((g)=>{return g})} onChange={(e)=>getInfo(e,"genres")} />
      </div>
      <button className="pin update" onClick={handleUpdate}>Update</button>
    </div>
  )
}

