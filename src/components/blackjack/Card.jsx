import './Card.css';

export default function Card(props) {
  const startDeck = ()=>{
    props.onInit();
  }
  return (
    <div className="deck">  
      <button className="start btn" onClick={startDeck}>Start</button>
    </div>
  )
}