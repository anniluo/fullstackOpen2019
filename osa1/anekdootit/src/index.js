import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => {
    return <button onClick={handleClick}>{text}</button>
}

const VoteDisplay = ({votes}) => {
    return <p>{votes} votes.</p>
}

// Laajenna sovellusta siten, että näytettävää anekdoottia on mahdollista äänestää
const App = (props) => {
    const [selected, setSelected] = useState(0)
    // initialize an array filled with value 0
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    const handleChangeClick = () => {
        // randomize a number between 0 and the length of the anecdotes array
        let randomNumber = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomNumber)
    }

    const handleVoteClick = () => {
        // copy the state (state should not be mutated)
        const votesCopy = [...votes]
        votesCopy[selected] += 1
        setVotes(votesCopy)
    }

    return (
        <div>
            {props.anecdotes[selected]}
            <br/>
            <VoteDisplay votes={votes[selected]}/>
            <Button handleClick={handleVoteClick} text='Vote this anecdote'/>
            <Button handleClick={handleChangeClick} text='Change the anecdote'/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));

