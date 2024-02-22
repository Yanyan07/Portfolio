import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './mv.css';
import Footer from './footer/Footer'
import Header from './header/Header'
import MovieList from "./main/movie-list/MovieList";
import MoviesByGenres from "./main/movies-genres/MoviesByGenres";
import MoviesByKeywords from "./main/movies-keywords/MoviesByKeywords";
import MoviesByUser from "./main/movies-user/MoviesByUser";
import MovieDetail from "./main/movie-detail/MovieDetail";
import MovieUpdate from "./main/movie-change/MovieUpdate";
import MovieAdd from "./main/movie-change/MovieAdd";
import SignIn from "./main/register/SignIn";
import SignUp from "./main/register/SignUp";
import Logout from "./main/register/Logout";
import MovieError from "./main/movie-not-found/MovieError";
import MovieNotFound from "./main/movie-not-found/MovieNotFound";
import genresInit from './GenresInit';
import moviesInit from './MoviesInit';
import usersInt from './UsersInit';

export default function MovieApp(props) {
  const [genres,setGenres] = useState(genresInit);
  const [movies,setMovies] = useState(moviesInit);
  const [users,setUsers] = useState(usersInt);
  const [currentUser,setCurrentUser] = useState({});

  const signin = (user) => {
    setCurrentUser(user);
  }
  const signup = (user) => {
    user.id = users.length + 1;
    user.favoriteMovies = [];
    users.push(user);
    setUsers([...users]);
  }
  const logout = () => {
    setCurrentUser({});
  }
  const updateFavoriteMovies = (movies) => {
    setCurrentUser({...currentUser, favoriteMovies:movies});
    for(let i=0; i<users.length; i++) {
      if(users[i].id === currentUser.id) {
        users[i] = currentUser;
        break;
      }
    }
    setUsers([...users]); 
  }
  const deleteFavoriteMovie = (movieId) => {
    const moviesAfterDeleted = []
    for(let i=0; i<currentUser.favoriteMovies.length; i++) {
      if(currentUser.favoriteMovies[i].id !== movieId) {
        moviesAfterDeleted.push(currentUser.favoriteMovies[i]);
      }
    }
    updateFavoriteMovies(moviesAfterDeleted);
  }
  const updateMovie = (m) => {
    for(let i=0; i<movies.length; i++) {
      if(movies[i].id === m.id) {
        movies[i] = m;
        break;
      }
    }
    setMovies([...movies]);
    if(currentUser && currentUser.favoriteMovies) {
      for(let i=0; i<currentUser.favoriteMovies.length; i++) {
        if(currentUser.favoriteMovies[i].id === m.id) {
          currentUser.favoriteMovies[i] = m;
          break;
        }
      }
      updateFavoriteMovies(currentUser.favoriteMovies);
    }
  }
  const deleteMovie = (mid) => {
    for(let i=0; i<movies.length; i++) {
      if(movies[i].id === mid) {
        movies.splice(i,1)
        break;
      }
    }
    setMovies([...movies]);
    if(currentUser && currentUser.favoriteMovies) {
      for(let i=0; i<currentUser.favoriteMovies.length; i++) {
        if(currentUser.favoriteMovies[i].id === mid) {
          currentUser.favoriteMovies.splice(i,1)
          break;
        }
      }
      updateFavoriteMovies(currentUser.favoriteMovies);
    }
  }

  const closeShow = ()=>{
    props.onShow()
  }

  return (
    <div className="mv-container">
      <Header data={{users:users, currentUser:currentUser}} />

      <Routes>
        {/* <Route path='/' element={<MovieList data={{types:genres, movies:movies}} />}  /> */}
        {['/','/Portfolio'].map((path,index) => <Route key={index} path={path} element={<MovieList data={{types:genres, movies:movies}} />} />)}
        <Route path='/' element={<MovieList data={{types:genres, movies:movies}} />}  />
        <Route path='/genres/:myinput' element={<MoviesByGenres data={{movies:movies}}/>}  />
        <Route path='/keywords/:myinput' element={<MoviesByKeywords data={{movies:movies}}/>}  />
        <Route path='/user/movies' element={<MoviesByUser data={{userMovies:currentUser.favoriteMovies}} onDeleteFavMovie={deleteFavoriteMovie} />}  /> 
        <Route path='/detail/:mid' element={<MovieDetail data={{movies:movies, users:users, currentUser:currentUser}} onfavoriteMovies={updateFavoriteMovies} onDeleteMovie={deleteMovie} />}  />
        <Route path='/update/:mid' element={<MovieUpdate data={{movies:movies,genres:genres}} onUpdateMovie={updateMovie} />}  />
        <Route path='/add' element={<MovieAdd />}  />
        <Route path='/signin' element={<SignIn data={{users:users}} onSignIn={signin} />}  />
        <Route path='/signup' element={<SignUp data={{users:users}} onSignup={signup} />}  />
        <Route path='/logout' element={<Logout data={{currentUser:currentUser}} onLogout={logout}/>}  />
        <Route path='/error' element={<MovieError />}  />
        <Route path='*' element={<MovieNotFound />}  /> 
      </Routes>
      
      <Footer />
      <div className='close' onClick={closeShow}>
        <img src={require('../../images/error.png')} alt='profile'/> 
      </div>
    </div>
  )
}