import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// tee sovellus, jonka avulla voit tarkastella eri maiden tietoja
// hae tiedot endpointista 'all'
// näytettävä maa haetaan kirjoittamalla hakuehto etsintäkenttään
// jos ehdon täyttäviä maita on liikaa (yli 10),
// kehoitetaan tarkentamaan hakuehtoa
// jos maita alla 10, mutta yli 1, näytetään kahuehdon täyttävät maat
// kun ehdon täyttäviä maita on 1, näytetään maan perustiedot, lippu sekä puhutut kielet 

ReactDOM.render(<App />, document.getElementById('root'));

