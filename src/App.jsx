import { Routes, Route } from 'react-router-dom'
import { Pomodoro } from './feature/PomodoroPage'
import { HomePage } from './pages/HomePage'
import {LoginPage} from './feature/LoginPage'
import { AuthProvider } from './context/AuthConText'
import {Layout} from './component/Layout'
import './App.css'


function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/loginPage"  element={<LoginPage/>}/>
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
