import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
      <div>{props.student.name}</div>
      <div>{props.student.bio}</div>
      <Score />
    </>
  );
}

export default Student;