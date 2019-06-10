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
            <Part partName={props.partNames[0]} partAmount={props.exerciseAmounts[0]}/>
            <Part partName={props.partNames[1]} partAmount={props.exerciseAmounts[1]}/>
            <Part partName={props.partNames[2]} partAmount={props.exerciseAmounts[2]}/>
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
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <div>
            <Header courseName={course}/>
            <Content partNames={[part1, part2, part3]} exerciseAmounts={[exercises1,exercises2,exercises3]}/>
            <Total partOnetasks={exercises1} partTwoTasks={exercises2} partThreeTasks={exercises3}/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))