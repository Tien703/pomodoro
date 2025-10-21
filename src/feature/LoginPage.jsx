
import React, { useState, useEffect} from "react"
import {signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth"
import {auth, provider } from '../firebase/config' 
import { useNavigate } from "react-router-dom";
export function LoginPage() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
		});
		return () => unsubscribe();
	}, []);

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
			{user ? (
			<button onClick={handleLogout}>Log out</button>
			):(
				console.log(user?.displayName),
			<button onClick={handleLogin}> Sign in with google</button>
			)}
		</div>
	) 
};