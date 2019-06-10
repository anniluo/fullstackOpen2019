import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return <h1>{props.courseName}</h1>
}

const Content = (props) => {
    return <p>{props.partName} {props.exerciseAmount}</p>
}

const Total = (props) => {
    return <p>Number of exercises {props.partOnetasks + props.partTwoTasks + props.partThreeTasks}</p>
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Usig props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header courseName={course}/>
            <Content partName={part1} exerciseAmount={exercises1}/>
            <Content partName={part2} exerciseAmount={exercises2}/>
            <Content partName={part3} exerciseAmount={exercises3}/>
            <Total partOnetasks={exercises1} partTwoTasks={exercises2} partThreeTasks={exercises3}/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))