import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({courseName}) => {
    return (
        <div>
            <h1>{courseName}</h1>
        </div>
    )
}

const Part = (props) => {
    return <p>{props.partName} {props.partExercises}</p>
}

const Content = ({parts}) => {

    const partRows = () => parts.map(part => 
        <Part 
            key={part.id} 
            partName={part.name} 
            partExercises={part.exercises}
        />
    )

    return (
        <div>
            {partRows()}
        </div>
    )
}

const Total = ({parts}) => {

    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((sum, exercise) => sum + exercise, 0)

    return (
        <div>
            <p>{total}</p>
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }
    return (
        <div>
            <Course course={course}/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))