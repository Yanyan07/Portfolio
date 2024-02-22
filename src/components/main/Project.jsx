
import { useState } from 'react';
import BJApp from '../blackjack/BJApp';
import MovieApp from '../movies/MovieApp';
import BJStack from '../blackjack/BJStack';
import MovieStack from '../movies/MovieStack';

export default function Project() {
  const [showGame, setShowGame] = useState(false)
  const [showGameTech,setShowGameTech] = useState(false);

  const [showMovie, setShowMovie] = useState(false)
  const [showMovieTech, setShowMovieTech] = useState(false);

  const openGame = ()=>{
    setShowGameTech(false);
    setShowGame(true);
  }
  const closeGame = ()=>{
    setShowGame(false);
  }
  const openGameTech = ()=>{
    setShowGame(false);
    setShowGameTech(true);
  }
  const closeGameTech = ()=>{
    setShowGameTech(false);
  }

  const openMovie = ()=>{
    setShowMovieTech(false);
    setShowMovie(true);
  }
  const closeMovie = ()=>{
    setShowMovie(false);
  }
  const openMovieTech = ()=>{
    setShowMovie(false);
    setShowMovieTech(true);
  }
  const closeMovieTech = ()=>{
    setShowMovieTech(false);
  }


  return (
    <div className="project">
      <div>Projects</div>

      <div>
        <div className="blackjack">
          <div className="name">BlackJack</div>
          <img className="pro-img" src={require('../../images/blackjack.png')} alt='pic'/> 
          <div>
            <button onClick={openGame}>live site</button>
            <button onClick={openGameTech}>technology stack used</button>
            <a href="https://github.com/Yanyan07/Blackjack-App" target="_blank" rel="noreferrer">
              <button>source code</button> 
            </a>
          </div>
          {
            showGame && <BJApp onShow={closeGame} />
          }
          {
            showGameTech && <BJStack onTechShow={closeGameTech} />
          }
        </div>

        <div className="movies">
          <div className="name">Movies App</div>
          <img className="pro-img" src={require('../../images/movies.png')} alt='pic'/> 
          <div>
            <button onClick={openMovie}>live site</button>
            <button onClick={openMovieTech}>technology stack used</button>
            <a href="https://github.com/Yanyan07/Movies-App" target="_blank" rel="noreferrer">
              <button>source code</button> 
            </a>
          </div>
          {
            showMovie && <MovieApp onShow={closeMovie} />
          }
          {
            showMovieTech && <MovieStack onTechShow={closeMovieTech} />
          }
        </div>
      </div>
    </div>
  )
}