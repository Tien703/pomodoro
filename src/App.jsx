import { Routes, Route } from 'react-router-dom'
import { Pomodoro } from './feature/PomodoroPage'
import { HomePage } from './pages/HomePage'
import {LoginPage} from './feature/LoginPage'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route path="/loginPage"  element={<LoginPage/>}/>
    </Routes>
  )
}

export default App
