import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Laajenna sovellusta siten, että siihen tulee nappi, jota painamalla
// sovellus näyttää satunnaisen ohjelmistotuotantoon liittyvän anekdootin
const App = (props) => {
    const [selected, setSelected] = useState(0)

    const handleClick = () => {
        // randomize a number between 0 and the length of the anecdotes array
        let randomNumber = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomNumber)
        console.log('button clicked', randomNumber)
    }

    return (
        <div>
            {props.anecdotes[selected]}
            <br/>
            <button onClick={handleClick}>Change the anecdote</button>
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

