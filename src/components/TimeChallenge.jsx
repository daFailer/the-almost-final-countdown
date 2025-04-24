import { useState, useRef } from 'react';

import ResultModal from './ResultModal';

const TimeChallenge = ({title, targetTime}) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();

  let buttonLabelPrefix = 'Start';
  let timerStatusSuffix = 'inactive';

  if (timerStarted) {
    buttonLabelPrefix = 'Stop'
    timerStatusSuffix = 'is running';
  }

  const handleStart = (() => {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      handleStop(true);
    }, targetTime * 1000)
  })

  const handleStop = ((isExpired = false) => {
    setTimerStarted(false);
    setTimerExpired(isExpired);

    clearTimeout(timer.current);
  })

  return (
      <section className="challenge">
        <h2>{title}</h2>
        {(!timerStarted && timerExpired) && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? '' : 's'}
        </p>
        <p>
          <button onClick={timerStarted ? () => handleStop(false) : handleStart}>{buttonLabelPrefix} Challenge</button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          Timer {timerStatusSuffix}
        </p>
      </section>
  )
}

export default TimeChallenge;