import { useState } from 'react'
import './App.css'


function CountDown() {
  const [totalSeconds, setTotalSeconds] = useState(1500);

  //handle countdown
  const handleStart = () => {
    setInterval(() =>{
      setTotalSeconds(prevSeconds => prevSeconds - 1);
    },1000)
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
      <button onClick={handleStart}>start</button>
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
