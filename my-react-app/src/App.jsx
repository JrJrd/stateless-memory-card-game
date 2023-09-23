import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/1.png" },
  { src: "/img/2.png" },
  { src: "/img/3.png" },
  { src: "/img/4.png" },
  { src: "/img/5.png" },
  { src: "/img/6.png" },
];

function App() {
  const [cards, setCards] = useState([]);

  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Game</h1>
      <button onClick={shuffleCards}>New</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card"key={card.id}> 
          <div>
            <img className="front" src={card.src} alt="card front" />
            <img src="" alt="" />
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
