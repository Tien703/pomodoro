import { useAuth } from "../context/AuthConText"
export function HomePage() {
  const { user, logout} = useAuth();

  return (
    <div className="header">
      <title>hompage</title>
      <h1>welcom, {user?.displayName}</h1>

      <a href="/pomodoro">pomodoro</a>
      <br/>
      <a href="/loginPage">login</a>
      <h1>Hello world</h1>
    </div>
)
}