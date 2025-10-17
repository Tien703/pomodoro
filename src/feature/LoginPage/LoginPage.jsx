import {React, useState } from "react"
export function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');  

	return (
		<div>
			<h2>Login</h2>
			<form>
				<lable for="username">username</lable>
				<input type="text" id="fname" name="fname" />
				<lable for="password">Password</lable>
				<input type="text" id="password" name="password" />
			</form>

		</div>
	) 

}