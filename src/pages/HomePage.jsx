import { useAuth } from "../context/AuthContext"


export function HomePage() {
  const { user: currentUser } = useAuth();

  return (
    <div className="header">
      <h1>{currentUser ? `Hello, ${currentUser.displayName}` : 'Welcome'}</h1>
    </div>
  );
}
