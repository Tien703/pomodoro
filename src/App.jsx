import { Routes, Route } from 'react-router-dom'
import { Pomodoro } from './feature/PomodoroPage'
import { HomePage } from './pages/HomePage'
import {LoginPage} from './feature/LoginPage'
import { AuthProvider } from './context/AuthContext'
import { AppProvider } from './context/Appcontext'
import {Layout} from './component/Layout'
import './App.css'
import { StatPage } from './feature/StatsPage'
import { TodoPage } from './feature/TodoPage'
import { Setting } from './feature/settingPage'


function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/stats" element={<StatPage />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </AppProvider>
  )
}

export default App
