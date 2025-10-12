import { useState, useEffect, useRef } from 'react'
import './App.css'


function CountDown() {
  const [totalSeconds, setTotalSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null)

  //handle countdown
  CountDown(()=>{
    if (isRunning) {

     intervalRef.current = setInterval(() =>{
      setTotalSeconds(prevSeconds => prevSeconds - 1);
    },1000)
    }
  })
  const handleStart = () => {
  };
  const handlePause = () =>{
    clearInterval(handleStart);
  }
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
      <button onClick={handleStart}>start</button>
      <button onClick={handlePause}>pause</button>
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

