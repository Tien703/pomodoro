
import React, { useState} from "react"
import {signInWithPopup, signOut} from "firebase/auth"
import {auth, provider } from '../firebase/config' 
import { useNavigate } from "react-router-dom";
export function LoginPage() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const handleLogin = async() => {
		console.log(auth, provider)	
		try {
			const result = await signInWithPopup(auth, provider);
			setUser(result.user);
			navigate("/pomodoro")
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async() => {
		await signOut(auth);
		setUser(null);
	}

	return (
		<div>
			<button onClick={handleLogin}> Sign in with google</button>
		</div>
	) 
};
