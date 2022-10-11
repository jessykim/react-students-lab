import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
      <h1>Students</h1>
      {props.students.map(student => 
        <h2>{student.name}: {student.bio}</h2>
      )}
      <Score />
    </>
  );
}

export default Student;