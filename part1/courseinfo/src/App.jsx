const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = props => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = props => {
  const content = props.content;
  console.log(content)
  return (
    <>
      <Part part={content[0].part} exercise={content[0].exercise} />
      <Part part={content[1].part} exercise={content[1].exercise} />
      <Part part={content[2].part} exercise={content[2].exercise} />
    </>
  )
}

const Total = props => {
  const exercises = props.exercises
  console.log(exercises)
  return (
    <>
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
    </>
  )
}

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data"
  const exercises2 = 7;
  const part3 = "State of a Component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course}/>
      <Content content={[
        { part: part1, exercise: exercises1 },
        { part: part2, exercise: exercises2 },
        { part: part3, exercise: exercises3 },
      ]}/>
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )

}

export default App
