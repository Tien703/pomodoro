import { useAuth } from "../context/AuthContext"

export function HomePage() {
  const {user, logout} = useAuth();
  return (
    <div className="header">
      <title>hompage</title>
      <div> 
        {user ? (
          <>
            <h1>hello, {user?.displayName}</h1>

            <a href="/loginPage">profile</a>

          </>
        ):(

          <a href="/loginPage">profile</a>
        )}
      </div>

      <a href="/pomodoro">pomodoro</a>

      <br/>
    </div>
)
}