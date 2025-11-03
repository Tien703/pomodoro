import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext';
import {useApp} from '../context/AppContext'

/*setting:
  -change pomodoro duration 
*/
export function Setting () {
  const {pomoDuration, setPomoDuration}= useApp()
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
    <input type="text" name="duration" placeholder='duration' id="" onChange={(e) =>setPomoDuration(e.target.value)}/>
    <button onClick={()=>console.log(pomoDuration)}>save</button>
  </div>
    </div>
  )
}
