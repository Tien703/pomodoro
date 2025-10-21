
import React, { useState} from "react"
import {signInWithPopup, signOut} from "firebase/auth"
import {auth, provider } from '../firebase/config' 
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export function LoginPage() {
	const [user, setUser] = useState(null);
	const [user1] = useAuth(); 
	const navigate = useNavigate();

	const handleLogin = async() => {
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
			{user1?(
			<button onClick={handleLogout}>Log out </button>
			):(
				console.log(user),
			<button onClick={handleLogin}> Sign in with google</button>
			)}
		</div>
	) 
};
