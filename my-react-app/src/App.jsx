import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
import { useEffect } from "react";

const cardImages = [
  { src: "/img/1.png", matched: false },
  { src: "/img/2.png", matched: false },
  { src: "/img/3.png", matched: false },
  { src: "/img/4.png", matched: false },
  { src: "/img/5.png", matched: false },
  { src: "/img/6.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);

  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
       setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };
  //console.log(cards, turns);
  useEffect(() => {
    shuffleCards()
  }, [])
  return (
    <div className="App">
      <h1>Start</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched} />
          ))}
      </div>
      <p>Turns: {turns}</p>
          <button onClick={shuffleCards}>Shuffle</button>
    </div>
  );
}

export default App;
