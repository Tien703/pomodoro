import { Routes, Route } from 'react-router-dom'
import { Pomodoro } from './feature/Pomodoro/PomodoroPage'
import { Link } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import './App.css'


function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="pomodoro" element={<Pomodoro />} />
    </Routes>
  )
}

export default App
