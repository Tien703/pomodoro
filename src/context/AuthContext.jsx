import { createContext, useContext,useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const AuthConText = createContext();
export const AuthProvider  = ({children}) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
			setUser(currentUser);
			setLoading(false);
		
		});
		return () => unsubscribe();
	}, []);

	return (
		<AuthConText.Provider value={{user, setUser, loading}}>
			{children}
		</AuthConText.Provider>

	);
};
export const useAuth = () => useContext(AuthConText);
