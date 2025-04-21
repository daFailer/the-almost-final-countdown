import { useState } from 'react';

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const target = e.target;

    setEnteredPlayerName(target.value)
  }

  const handleClick = (() => {
    setSubmitted(true)
  })

  return (
    <section id="player">
      <h2>Welcome { submitted && enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
