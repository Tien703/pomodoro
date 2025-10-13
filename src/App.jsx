import { useState, useEffect, useRef } from 'react'
import './App.css'


function CountDown() {
  const [totalSeconds, setTotalSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null)

  //handle countdown
  useEffect(()=>{
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds(prevSeconds => prevSeconds - 1);
      },1000);
    } 
    else if (!isRunning && intervalRef.current !==null) {
      clearInterval(intervalRef.current)
    }
    return () => {clearInterval(intervalRef)}
  },[isRunning]);


  const handleToogle = () =>{
    setIsRunning(!isRunning)
  };
  const handleReset = () =>{
    setIsRunning(false)
    setTotalSeconds(1500)
  };
    //convert second to minute + second 
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds - minutes*60
    const formatMinutes = String(minutes).padStart(2,'0') 
    const formatSeconds = String(seconds).padStart(2,'0') 
    return `${formatMinutes}:${formatSeconds}`;
  }

  return (
    <div>
      <div>{formatTime(totalSeconds)}</div>
      <div>{!isRunning ? ( <button onClick={handleToogle}>start</button>) : (<button onClick={handleToogle}>pause</button>)}</div>
      <button onClick={handleReset}>Reset</button>
    </div>
  )

}
function App() {
  return (
    <div>
      <CountDown/>
    </div>
  )
}

export default App

