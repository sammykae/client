import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await axios.post(
				"https://server-full-blog.herokuapp.com/server/auth/register",
				{
					username,
					email,
					password,
					password2,
				}
			);
			res.data && window.location.replace("/login");
		} catch (e) {
			setErrorMessage("Invalid");
			setError(true);
		}
	};
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			{error && (
				<span className="regErr" style={{ color: "white", marginTop: "10px" }}>
					Something went wrong!
				</span>
			)}
			<form className="registerForm" onSubmit={handleSubmit}>
				<label>UserName</label>
				<input
					type="text"
					className="registerInput"
					placeholder="Enter Username..."
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label>Email</label>
				<input
					className="registerInput"
					type="email"
					placeholder="Enter email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					className="registerInput"
					type="password"
					placeholder="Enter password..."
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label>Re-Password</label>
				<input
					className="registerInput"
					type="password"
					placeholder="Re-Enter password..."
					onChange={(e) => setPassword2(e.target.value)}
				/>
				{error && (
					<p className="isInvalidRegInput bg-color-white">
						<i className="bug fa-solid fa-bug"></i> {errorMessage}{" "}
					</p>
				)}
				<button className="registerButton">Register</button>
			</form>
			<button className="registerLoginButton">
				<Link className="link" to="/login">
					Login
				</Link>
			</button>
		</div>
	);
};

export default Register;
