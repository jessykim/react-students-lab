const Score = (props) => {
  return ( 
    <div className="score-info">
      <p>Score: {props.score.score}</p>
      <p>Date: {props.score.date}</p>
    </div>
  );
}

export default Score;