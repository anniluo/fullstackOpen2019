import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Tee Unicafelle verkossa toimiva palautesovellus. 
// Vastausvaihtoehtoja olkoon vain kolme: hyvä, neutraali ja huono.
 
const Statistics = (props) => {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good reviews: {props.reviews[0]}</p>
            <p>Neutral reviews: {props.reviews[1]}</p>
            <p>Bad reviews: {props.reviews[2]}</p>
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
                <Statistics reviews={[good, neutral, bad]}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

