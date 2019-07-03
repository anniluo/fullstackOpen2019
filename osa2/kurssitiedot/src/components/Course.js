import React from 'react';

const Header = ({courseName}) => {
    return (
        <div>
            <h1>{courseName}</h1>
        </div>
    )
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

const Part = ({partName, partExercises}) => {
    return <p>{partName} {partExercises}</p>
}

const Total = ({parts}) => {

    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce( (sum, exercises) => {
        return sum + exercises
    })

    return (
        <div>
            <p>Total number of exercises: {total}</p>
        </div>
    )
}

const Course = ({courses}) => {

    const courseRows = () => courses.map(course => {
        return (
            <div key={course.id}>
                <Header courseName={course.name}/>
                <Content parts={course.parts}/>
                <Total parts={course.parts}/>
            </div>
        )
    })

    return courseRows()
}

export default Course
