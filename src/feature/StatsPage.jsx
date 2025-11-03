import { useAuth } from "../context/AuthContext";
import { getUserTotalTime } from "../firebase/PomodoroDB";
import { useState, useEffect } from "react";
export function StatPage () {
  const {user, loading} = useAuth();
  const [stats, setStats] = useState(null);
  useEffect(()=>{
    if(user) {
      const fetchStats = async () =>{
        const data = await getUserTotalTime(user.uid);
        setStats(data);
        console.log("User stats:", data);
      }
      fetchStats();
    }
  },[user, loading])
  return (
    <div>
      {stats?(
        <h3>Total Time (seconds): {stats/60}</h3>
      ):(<p>No stats found yet</p>)}
    </div>
  )

};