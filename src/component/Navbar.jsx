import './Navbar.css'
export function Navbar() {
return (
  <nav className="navbar">
    <div className="nav-left">
      <a href="/">home</a>
      <a href="/pomodoro"> pomodoro</a>
      <a href="/login"> profile</a>
      <a href='/stats'> report</a>
      <a href='/todo'> todo </a>
      <a href='/setting'>setting</a>
    </div>
  </nav>
)};