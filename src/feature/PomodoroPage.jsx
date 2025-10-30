import { useState, useEffect, useRef } from 'react'
import { UpdateTotalTime } from '../firebase/PomodoroDB';
import { useAuth } from '../context/AuthContext';

/**
 * Pomodoro component
 * 
 * This component will show a timer which will
 * start at 25 minutes and will count down
 * every second. When the timer reaches 0
 * it will call UpdateTotalTime to update user's
 * stat. The component will also have a start
 * button, pause button and a reset button.
 * When the start button is clicked, the timer
 * will start counting down. When the pause
 * button is clicked, the timer will stop
 * counting down. When the reset button is
 * clicked, the timer will reset to 25 minutes
 * and the user's stat will not be updated.
 * 
 * @param {Object} user - The user object
 * from the context.
 * @returns {JSX.Element} - The Pomodoro component.
 */
export function Pomodoro() {
  const [remainingTime, setRemainingTime] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const { user } = useAuth();
  const intervalRef = useRef(null);
  const durationInSeconds = 25 * 60;

  useEffect(() => {
    if (isTimerRunning && remainingTime > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isTimerRunning && remainingTime === 0) {
      setIsTimerRunning(false);
      UpdateTotalTime(user.uid, durationInSeconds);
    } else if (!isTimerRunning && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [user, isTimerRunning, remainingTime, durationInSeconds]);

  const handleToggle = () => {
    setIsTimerRunning(!isTimerRunning);
  };
  const handleReset = () => {
    setIsTimerRunning(false);
    setRemainingTime(25 * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds - minutes * 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <title>Pomodoro</title>
      <div>{formatTime(remainingTime)}</div>
      <div>
        {!isTimerRunning ? (
          <button onClick={handleToggle}>Start</button>
        ) : (
          <button onClick={handleToggle}>Pause</button>
        )}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
