import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/necip-can-karakus-untitled-1.gif"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
