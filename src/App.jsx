import { Routes, Route } from 'react-router-dom'
import { Pomodoro } from './feature/PomodoroPage'
import { HomePage } from './pages/HomePage'
import {LoginPage} from './feature/LoginPage'
import { AuthProvider } from './context/AuthContext'
import {Layout} from './component/Layout'
import './App.css'
import { StatPage } from './feature/StatsPage'
import { TodoPage } from './feature/TodoPage'


function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/loginPage"  element={<LoginPage/>}/>
          <Route path="/stats" element={<StatPage/>}/>
          <Route path='/todo' element={<TodoPage/>}/>
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
