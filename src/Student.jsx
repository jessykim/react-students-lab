import Score from "./Score";

const Student = (props) => {
  return ( 
    <div className="student-container">
      <div>{props.student.name}</div>
      <div>Bio: {props.student.bio}</div>
      {props.student.scores.map((score, index) =>
        <Score key={`score-${index}`} score={score} />
      )}
    </ div>
  );
}

export default Student;