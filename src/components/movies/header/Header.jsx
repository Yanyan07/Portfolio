import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';

export default function Header(props) {
  const [selectValue,setSelectValue] = useState('all');
  const [inputValue,setInputValue] = useState('');
  const [userMovies,setUserMovies] = useState([]);
  const [users,setUsers] = useState(props.data.users);
  const [currentUser,setCurrentUser] = useState(props.data.currentUser);
  const navigate = useNavigate();

  useEffect(()=>{
    setCurrentUser(props.data.currentUser);
    setUsers(props.data.users);
    setUserMovies(currentUser.favoriteMovies);
  },[currentUser, users, props])

  const goHome = ()=>{
    navigate('/')
  }
  const handleSelect = (e)=>{
    setSelectValue(e.target.value);
  }
  const handleInput = (e)=>{
    setInputValue(e.target.value);
  }
  const handleClick = ()=>{
    selectValue==='all' ? navigate('/') :
    (selectValue==='genres') ? navigate(`/genres/${inputValue}`) :
    selectValue==='keywords' ? navigate(`/keywords/${inputValue}`) :
    navigate('*');
    setInputValue('');
  }
  const handleKeyDown = (e)=>{
    if(e.keyCode === 13) {
      handleClick();
    }
  }
  const showUserMovies = ()=>{
    navigate('/user/movies');
  }
  const handleSignIn = () => {
    navigate("/signin");
  }
  const handleLogout = () => {
    navigate("/logout");
  }

  return (
    <div className='header'>
      <div className="logo-container" onClick={goHome}>
        <img className="logo" src={require('../../../images/movies/clover.png')} alt="clover"/>
        <span className="logo-span">Clover App</span>
      </div>

      <select value={selectValue} onChange={handleSelect}>
        <option value="all">all</option>
        <option value="genres">genres</option>
        <option value="keywords">keywords</option>
      </select>
      <input className="search" placeholder="Search Movies" value={inputValue} onChange={handleInput} onKeyDown={handleKeyDown} />
      <button className="logo-search" onClick={handleClick}>
        <img className="search-img" src={require('../../../images/movies/search.png')} alt="search"/>
      </button>

      <span className="cart sign-container" >Cart</span>
      {
        currentUser && userMovies &&
        <span className="count" onClick={showUserMovies}>{userMovies.length}</span>
      }
      <img className="cart-img sign-container" src={require('../../../images/movies/cart.png')} alt="cart" onClick={showUserMovies} />
      {
        !currentUser.username ?
          <span className="sign sign-container" onClick={handleSignIn}>Sign In</span> :
        <span>
          <span className="logout sign-container" onClick={handleLogout}>💚Logout</span> 
          <span className="sign-container">Hi, {currentUser.username.charAt(0).toUpperCase()+currentUser.username.substring(1)}</span>
        </span>
      } 
    </div>
  )
}

