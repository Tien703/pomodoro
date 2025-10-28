import { useAuth } from "../context/AuthContext"

export function HomePage() {
  const {user} = useAuth();
  return (
    <div className="header">
      <title>hompage</title>
      <div> 
        {user ? (
          <>
            <h1>hello, {user?.displayName}</h1>
          </>
        ):(
            <p></p>

        )}
      </div>


      <br/>
    </div>
)
}