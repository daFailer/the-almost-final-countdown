import { useState, useRef } from 'react';

import ResultModal from './ResultModal';

const TimeChallenge = ({title, targetTime}) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  let buttonLabelPrefix = 'Start';
  let timerStatusSuffix = 'inactive';

  if (timerIsActive) {
    buttonLabelPrefix = 'Stop'
    timerStatusSuffix = 'is running';
  }

  const handleStart = (() => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => {
        return prevTimeRemaining - 10;
      })
    }, 10)
  })

  const handleStop = (() => {
    dialog.current.open();
    clearInterval(timer.current);
  })

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  }

  if (timeRemaining <= 0) {
    handleStop(true);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime === 1 ? '' : 's'} 
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>{buttonLabelPrefix} Challenge</button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          Timer {timerStatusSuffix}
        </p>
      </section>
    </>
  )
}

export default TimeChallenge;