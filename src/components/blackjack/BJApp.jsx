import { useState } from 'react';
import './bj.css';
import Card from './Card';
import Play from './Play';

export default function BJApp(props) {
  const [isStart,setIsStart] = useState(true);

  const initDeck = ()=>{
    setIsStart(false);
  }
  const getStart = ()=>{
    setIsStart(true);
  }


  const closeShow = ()=>{
    props.onShow()
  }
  return (
    <div className="bj-container">
      <div className="bgc">BLACK JACK</div>
      {
        isStart ? <Card onInit={initDeck}/> : <Play onStart={getStart} />
      } 
      <div className='close' onClick={closeShow}>
        <img src={require('../../images/error.png')} alt='profile'/> 
      </div>
    </div>
  )
}

