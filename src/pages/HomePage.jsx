import { useAuth } from "./AuthConText"
export function HomePage() {
  const {user, logout} = useAuth();
  return (
    <div className="header">
      <title>hompage</title>

      <a href="/pomodoro">pomodoro</a>
      <br/>
      <a href="/loginPage">login</a>
      <h1>Hello world</h1>
    </div>
)
}