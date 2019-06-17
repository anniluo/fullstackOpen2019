import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => {
    return <button onClick={handleClick}>{text}</button>
}

const VoteDisplay = ({votes}) => {
    return <p>{votes} votes.</p>
}

const TodaysAnecdote = ({anecdote}) => {
    return (
        <div>
            <h2>Today's Anecdote</h2>
            <p>{anecdote}</p>
        </div>
    )
}

const MostVotedAnecdote = ({anecdote, votes}) => {
    // check if all the values in the 'votes' -array are 0
    if (votes.every(vote => { return vote === 0 })) return <p>No voted anecdotes</p>

    return (
        <div>
            <h2>Anecdote with the most votes</h2>
            <p>{anecdote}</p>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [mostVoted, setMostVoted] = useState(0)
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

        if (mostVoted < votesCopy[selected]) {
            setMostVoted(selected)
        }
    }

    return (
        <div>
            <TodaysAnecdote anecdote={anecdotes[selected]}/>
            <VoteDisplay votes={votes[selected]}/>
            <Button handleClick={handleVoteClick} text='Vote this anecdote'/>
            <Button handleClick={handleChangeClick} text='Change the anecdote'/>
            <MostVotedAnecdote anecdote={anecdotes[mostVoted]} votes={votes}/>
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

ReactDOM.render(<App/>, document.getElementById('root'));

