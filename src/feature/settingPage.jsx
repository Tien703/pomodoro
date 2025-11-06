import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext';
import {useApp} from '../context/Appcontext'

/*setting:
  -change pomodoro duration 
*/
export function Setting () {
  const {setting, update_setting}= useApp()
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
    <input type="number"  placeholder='duration' value={setting.focusTime} id="" onChange={(e) =>update_setting({focusTime:Number(e.target.value)})}/>
    <button onClick={()=>console.log(setting.focusTime)}>save</button>
  </div>
    </div>
  )
}