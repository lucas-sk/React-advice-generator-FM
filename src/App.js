import React, { useState } from 'react';
import dividerMobile from '../src/assets/pattern-divider-mobile.svg'
import dividerDesktop from '../src/assets/pattern-divider-desktop.svg'
import dice from '../src/assets/icon-dice.svg'
import api from './services/api'

function App() {
  const [advice, setAdvice] = useState("Click the dice to  generate one advice");
  const [id, setId] = useState(0);
  const handleClick = async ()=>{
    const slip =  await api();
    const {advice, id} = slip
    setAdvice(advice)
    setId(id)
  }

  return (
    <div className="App">
      <div className="container">
        <p>ADVICE #{id}</p>
        <q>{advice}</q>
        <picture>
          <source srcset={dividerDesktop} media="(min-width: 1120px)"/>
          <img src={dividerMobile} alt="divider" />
        </picture>        
        <button className="btn" aria-label="generate advice" onClick={() => handleClick()}>
          <img src={dice} alt="" />
        </button>
      </div> 
    </div>
  );
}

export default App;
