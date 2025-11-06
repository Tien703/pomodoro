import { useState, useEffect, useRef } from 'react'
import { UpdateTotalTime } from '../firebase/PomodoroDB';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/Appcontext';


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
  const { setting }  = useApp();
  const [remainingTime, setRemainingTime] = useState(setting.focusTime);
  useEffect(()=>{
      setRemainingTime(setting.focusTime);
  },[setting.focusTime])
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const { user } = useAuth();
  const intervalRef = useRef(null);
  useEffect(() => {
    if (!isTimerRunning){
      console.log("Pomodoro detected new focusTime:", setting.focusTime);
      setRemainingTime(setting.focusTime);
    };
}, [setting.focusTime, isTimerRunning]);

  useEffect(() => {
    //interval to run count down
    if (isTimerRunning && remainingTime > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    // update user's state when finished 1 session
    } else if (isTimerRunning && remainingTime === 0) {
      setIsTimerRunning(false);
      console.log(setting.focusTime)
      UpdateTotalTime(user.uid,setting.focusTime);
    // pause pomodoro
    } else if (!isTimerRunning && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    // clear interval prevent memory leak
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [user, isTimerRunning, remainingTime,setting.focusTime]);

  const handleToggle = () => {
    if(setting.focusTime){
      setIsTimerRunning(!isTimerRunning);
      console.log()
    }
    else{
      console.log("no duration")
    }
  };
  const handleReset = () => {
    setIsTimerRunning(false);
    setRemainingTime(setting.focusTime);
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
