//import Header from "components/Header/Header";

const Course = ({ course }) => {
  console.log(course.name)
    return (
      <ul>
        {course.map(note => 
          <li key={note.id}>
            {note.name}
            {' '+note.exercises}
          </li>
        )}
      </ul>
    )
  }
  export default Course;
