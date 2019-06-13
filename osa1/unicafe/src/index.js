import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Tee Unicafelle verkossa toimiva palautesovellus. 
// Vastausvaihtoehtoja olkoon vain kolme: hyvä, neutraali ja huono.

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            code here
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

