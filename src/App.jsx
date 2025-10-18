import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Pomodoro } from './feature/Pomodoro/PomodoroPage'
import { HomePage } from './pages/HomePage'
import { Auth } from './feature/LoginPage/Auth'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/pomodoro" element={<Pomodoro />} />
      <Route path="/auth"  element={<Auth/>}/>
    </Routes>
  )
}

export default App
