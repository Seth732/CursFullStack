const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part = {props.parts[0].name} excercise = {props.parts[0].excercises}/>
      <Part part = {props.parts[1].name} excercise = {props.parts[1].excercises}/>
      <Part part = {props.parts[2].name} excercise = {props.parts[2].excercises}/>
    </div>
  )
}
                       
const Total = (props) =>{
  return(
    <p>
      Number of Exercises: {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}
    </p>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.excercise}
      </p>
    </div>  
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:[
      {
        name: 'Fundametals of React',
        excercises: 10
      },
      {
        name: 'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of components',
        excercises: 14
      }
    ]
  }
 
  return(
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App
