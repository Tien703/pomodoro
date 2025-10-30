import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext';

/*setting:
  -change pomodoro duration 
*/
export function Setting () {
  const [pomoDuration, setPomoDuration] = useState()
  const {user}= useAuth()
  return (
    <div>
    <title>setting</title>
    <div>
    {user ? (
      <>
        <h1>hello, {user?.displayName}</h1>
      </>
    ):(
        <p></p>

    )}
  </div>
    </div>
  )


}