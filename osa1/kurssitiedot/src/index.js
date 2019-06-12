import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.courseName}</h1>
        </div>
    )
}

const Part = (props) => {
    return <p>{props.partName} {props.partAmount}</p>
}

const Content = (props) => {
    return (
        <div>
            <Part partName={props.parts[0].name} partAmount={props.parts[0].exercises}/>
            <Part partName={props.parts[1].name} partAmount={props.parts[1].exercises}/>
            <Part partName={props.parts[2].name} partAmount={props.parts[2].exercises}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <p>Number of exercises {props.partOnetasks + props.partTwoTasks + props.partThreeTasks}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header courseName={course}/>
            <Content parts={[part1, part2, part3]}/>
            <Total partOnetasks={part1.exercises} partTwoTasks={part2.exercises} partThreeTasks={part3.exercises}/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))