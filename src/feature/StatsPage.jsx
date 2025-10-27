import { useAuth } from "../context/AuthContext";
import { getUserTotalTime } from "../firebase/PomodoroDB";
export function StatPage () {
  const timespent = getUserTotalTime();
  console.log(timespent)

  return (
    <div>
      <title>stat</title>
      <div>{timespent}</div>
    </div>
  )

};