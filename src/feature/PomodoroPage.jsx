import { useState, useEffect, useRef } from 'react'
import { UpdateTotalTime } from '../firebase/PomodoroDB';
import { useAuth } from '../context/AuthContext';

export function Pomodoro() {
  const [totalSeconds, setTotalSeconds] = useState(10);
  const [isRunning, setIsRunning] = useState(false);
  const {user} = useAuth()
  const intervalRef = useRef(null)
  const Duration = 25*60

  //handle countdown
  useEffect(()=>{
    if (isRunning && totalSeconds > 0) {
      intervalRef.current = setInterval(() => {
        setTotalSeconds(prevSeconds => prevSeconds - 1);
      },1000);
    } 
    else if (isRunning && totalSeconds ===0){
      setIsRunning(false);
    if (user && user.uid) {
            // Chỉ gọi UpdateTotalTime nếu user và uid chắc chắn tồn tại
            UpdateTotalTime(user.uid, Duration);
          } else {
            // Có thể log ra console để biết khi nào user chưa sẵn sàng
            console.error("Lỗi: Không thể cập nhật thời gian vì user.uid không tồn tại.");
          }      clearInterval(intervalRef.current);

    }
    else if (!isRunning && intervalRef.current !==null) {
      clearInterval(intervalRef.current)
    }
    return () => {
      
      clearInterval(intervalRef.current);
    };
  },[user,isRunning, totalSeconds,Duration]);

  const handleToogle = () =>{
    setIsRunning(!isRunning)
  };
  const handleReset = () =>{
    setIsRunning(false)
    setTotalSeconds(10)
  };

    //convert second to minute + second 
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds - minutes*60
    const formatMinutes = String(minutes).padStart(2,'0') 
    const formatSeconds = String(seconds).padStart(2,'0') 
    return `${formatMinutes}:${formatSeconds}`;
  };

  return (
    <div>
      <title>pomodoro</title>
      <div>{formatTime(totalSeconds)}</div>
      <div>{!isRunning ? ( <button onClick={handleToogle}>start</button>) : (<button onClick={handleToogle}>pause</button>)}</div>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
