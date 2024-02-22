import { useEffect, useState } from "react";
import allCards from './CardsInit';
import './Play.css';

export default function Play(props) {
  const [cards,setCards] = useState([...allCards]);
  const [dealerCards,setDealerCards] = useState([]);
  const [playerCards,setPlayerCards] = useState([]);
  const [dealerValue,setDealerValue] = useState(0);
  const [dealer2ndValue,setDealer2ndValue] = useState(0);
  const [playerValue,setPlayerValue] = useState(0);

  const [isFlip,setIsFlip] = useState(false);
  const [isDeal,setIsDeal] = useState(true);
  const [isEnd,setIsEnd] = useState(false);
  const [dealerResult,setDealerResult] = useState('');
  const [playerResult,setPlayerResult] = useState('');
  const [dealResult,setDealResult] = useState('');
  const [count,setCount] = useState(0);
  const [isBtnDisabled,setIsBtnDisables] = useState(false);
  const [suitObj, setSuitObj] = useState({
    "hearts": "hearts.png",
    "spades": "spades.png",
    "clubs": "clubs.png",
    "diamonds": "diamonds.png",
    "J": "J.png",
    "Q": "Q.png",
    "K": "K.png"
  });
  const [color, setColor] = useState({
    "hearts": "rgb(204, 0, 0)",
    "diamonds": "rgb(204, 0, 0)",
    "spades": "rgb(51, 51, 51)",
    "clubs": "rgb(51, 51, 51)"
  })


  useEffect(()=>{
    if(count%5 === 0) {
      for(let i=cards.length-1; i>0; i--) {
        const j = Math.floor(Math.random()*(i+1));
        [cards[i],cards[j]] = [cards[j],cards[i]];
      }
      setCards(cards);
    }
  }, [count])

  useEffect(()=>{
    if(dealerCards && dealerCards.length>0) {
      const dealerVal = getCardsValue(dealerCards);
      const dealer2ndVal = getCardsValue([dealerCards[1]])
      setDealerValue(dealerVal);
      setDealer2ndValue(dealer2ndVal);
    }
    if(playerCards && playerCards.length>0) {
      const playerVal = getCardsValue(playerCards);
      setPlayerValue(playerVal);
    }
  }, [dealerCards, playerCards])
  

  useEffect(()=>{
    if(isFlip && dealerValue<=16){
      if(playerResult!=='Player Bust' && playerResult!=='Player Blackjack'){
        setTimeout(()=>{
          const item = cards.pop();
          item ? setDealerCards([...dealerCards, item]) : reStart();
        },500)
      }
    }
    if(isFlip && (dealerValue>=17||playerResult==='Player Bust'||playerResult==='Player Blackjack')){
      calcValue();
      setCount(count+1);
    }
  },[isFlip,dealerValue,dealerResult,playerResult])
  

  useEffect(()=>{ //show result if anyone bust or blackjack
    dealerValue>21 && setDealerResult('Dealer Bust');
    if(playerValue>21){
      setPlayerResult('Player Bust');
      setTimeout(()=>{
        setIsFlip(true);
      },500)
    }
    isBlackjack(dealerCards) && setDealerResult('Dealer Blackjack');
    if(isBlackjack(playerCards)) {
      setPlayerResult('Player Blackjack');
      setTimeout(()=>{
        setIsFlip(true);
      },500)
    }
  },[dealerValue,playerValue,dealerCards,playerCards]);

  useEffect(()=>{ //deal is end, show deal button again and reset state
    if(isEnd){
      setIsBtnDisables(true);
      setTimeout(()=>{
        setDealerCards([]);
        setPlayerCards([]);
        setDealerValue(0);
        setDealer2ndValue(0);
        setPlayerValue(0);
        setDealerResult('');
        setPlayerResult('');
        setDealResult('');
        setIsDeal(true);
        setIsFlip(false);
        setIsEnd(false);
      },5000)
    }
  },[isEnd])

  const reStart = ()=>{
    props.onStart();
  }
  const dealCards = ()=>{
    setIsDeal(false);
    setIsBtnDisables(false);
    const dItems = [];
    const pItems = [];
    for(let i=0; i<4; i++){
      const item = cards.pop();
      if(item){
        i%2===0 ? dItems.push(item) : pItems.push(item);
      }else{
        reStart();
      }
    }
    setDealerCards(dItems);
    setPlayerCards(pItems);
  }
  const hit = ()=>{
    if(!isEnd){
      const item = cards.pop();
      item ? setPlayerCards([...playerCards, item]) : reStart();
    }
  }
  const stand = ()=>{
    setTimeout(()=>{
      setIsFlip(true);
    },500)
    setIsEnd(true);
  }
  const getCardsValue = (cards)=>{
    let countA = 0;
    let sum = 0;
    for(const card of cards) {
      switch(card['rank_val']) {
        case '2':
          sum += 2;
          break;
        case '3':
          sum += 3;
          break;
        case '4':
          sum += 4;
          break;
        case '5':
          sum += 5;
          break;
        case '6':
          sum += 6;
          break;
        case '7':
          sum += 7;
          break;
        case '8':
          sum += 8;
          break;
        case '9':
          sum += 9;
          break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
          sum += 10;
          break;
        case 'A':
          sum += 1;
          countA++;
          break;
        default:
          break;
      }
    }
    for(let i=0; i<countA; i++) {
      if(sum+10 <= 21) {
        sum += 10;
      }
    }
    return sum;
  }
  const calcValue  = ()=>{
    if(playerResult === 'Player Bust'){
      setDealResult('Dealer Win!');
    }else if(dealerResult === 'Dealer Bust'){
      setDealResult('You Win!');
    }else if(dealerResult==='Dealer Blackjack' && playerResult==='Player Blackjack'){
      setDealResult('Push!');
    }else if(dealerResult==='Dealer Blackjack' && playerResult!=='Player Blackjack'){
      setDealResult('Dealer Win!');
    }else if(dealerResult!=='Dealer Blackjack' && playerResult==='Player Blackjack'){
      setDealResult('You Win!');
    }else if(dealerValue > playerValue){
      setDealResult('Dealer Win!');
    }else if(dealerValue === playerValue){
      setDealResult('Push!');
    }else if(dealerValue < playerValue){
      setDealResult('You Win!');
    }  
    setIsEnd(true);
  }
  const isBlackjack = (cards)=>{
    if(!cards || cards.length!==2) {
      return false;
    }
    const sum = getCardsValue(cards);
    return (cards[0].rank_val==='A'||cards[1].rank_val==='A') && sum===21;
  }

  return (
    <div className="player">
      {
        count%5===0&&isDeal && <div className="result shuffle">Shuffling...</div>
      }
      <button className="exit btn" onClick={reStart} >Exit</button>
      {
        isDeal ? <button className="deal btn" onClick={dealCards}>Deal</button> :
        <div>
          {
            isFlip ?
            <div className="dealer-show score"><span>{dealerValue}</span>Dealer</div> :
            <div className="dealer-show score"><span>{dealer2ndValue}</span>Dealer</div>
          }
          <div className="player-show score"><span>{playerValue}</span>Player</div>
          <button className="hit btn" onClick={hit} disabled={isBtnDisabled}>Hit</button>
          <button className="stand btn" onClick={stand} disabled={isBtnDisabled}>Stand</button>
          <div className="dealer-cards cards">
            {
              dealerCards.map((card,index) => {
                if(!isFlip && index===0){
                 return <li key={index}>
                          <img className="bgc-img" src={require('../../images/blackjack/cardback.png')} alt='bgc'/>    
                        </li>
                }else{
                  return <li key={index}> 
                    <div style={{color: color[card.suit]}} >{card.rank_val}</div>
                    <img className="img1" src={require(`../../images/blackjack/${suitObj[card.suit]}`)} alt="pic" />
                    {
                      card.rank_val==="J"||card.rank_val==="Q"||card.rank_val==="K" ? 
                      <img className="img2" src={require(`../../images/blackjack/${suitObj[card.rank_val]}`)} alt="pic" /> : 
                      <img className="img2" src={require(`../../images/blackjack/${suitObj[card.suit]}`)} alt="pic" />
                    }
                  </li> 
                }
              })
            }
          </div>
          <div className="player-cards cards">
            {
              playerCards.map((card,index) => 
                <li key={index}>
                  <div style={{color: color[card.suit]}}>{card.rank_val}</div>
                  <img className="img1" src={require(`../../images/blackjack/${suitObj[card.suit]}`)} alt="pic" />
                  {
                    card.rank==="J"||card.rank==="Q"||card.rank==="K" ? 
                    <img className="img2" src={require(`../../images/blackjack/${suitObj[card.rank_val]}`)} alt="pic" /> : 
                    <img className="img2" src={require(`../../images/blackjack/${suitObj[card.suit]}`)} alt="pic" />
                  }
                </li>
              )
            }
          </div>
          {
            isEnd &&
            <div>
              {
                dealerResult && 
                <div className="dealer-result result">
                  {dealerResult}
                </div>
              }
              {
                playerResult &&
                <div className="player-result result">
                  {playerResult}
                </div>
              }
              {
                dealResult && 
                <div className="final-result result">
                  {dealResult}
                </div>
              }
            </div>
          }  
        </div>
      }

    </div>
  )
}