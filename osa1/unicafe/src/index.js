import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// 1.8: unicafe step3, component for Statistics
const Statistics = ({reviews}) => {

    const allReviews = reviews.good + reviews.neutral + reviews.bad
    const positiveReviews = (reviews.good / allReviews) * 100
    const averageReviews = ( ( reviews.good * 1 ) + ( reviews.neutral * 0 ) + ( reviews.bad * (-1) ) ) / allReviews 

    return (
        <div>
            <h2>Statistics</h2>
            <p>Good reviews: {reviews.good}</p>
            <p>Neutral reviews: {reviews.neutral}</p>
            <p>Bad reviews: {reviews.bad}</p>
            <p>All reviews: {allReviews}</p>
            <p>Average of reviews: {averageReviews}</p>
            <p>Positive reviews: {positiveReviews}%</p>
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodReviewClick = () => {
        setGood(good + 1)
    }

    const handleNeutralReviewClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadReviewClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h2>Give Feedback</h2>
            <div>
                <Button handleClick={handleGoodReviewClick} text='Good'/>
                <Button handleClick={handleNeutralReviewClick} text='Neutral'/>
                <Button handleClick={handleBadReviewClick} text='Bad'/>
            </div>
            <div>
                <Statistics reviews={{'good': good, 'neutral': neutral, 'bad': bad}}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

