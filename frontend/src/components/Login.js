import React, { useState } from 'react';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "", 
	});

	// const history = useHistory();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}; 

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:5000/api/auth/login", formData);
			// if (response.data.token) {
			// 	// Store the token in localStorage
			// 	localStorage.setItem("token", response.data.token);
			// 	// Redirect to the protected route (e.g., profile page)
			// 	history.push("/profile");
			// }
			console.log(response);
		} catch (error) {
			console.error("Login failed:", error);
		}
		setFormData({ email: "", password: "" });
	};

	return (
		<div className="wrapper signIn">
			<div className="form">
				<div className="heading">LOGIN</div>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email">E-Mail</label>
						<input
							type="email"
							name="email" // Added name attribute
							onChange={handleChange}
							id="email"
							placeholder="Enter your email"
							value={formData.email}
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password" // Added name attribute
							onChange={handleChange}
							id="password"
							placeholder="Enter your password"
							value={formData.password}
							required
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
				<p>
					Don't have an account? <Link to="/signup">Sign Up</Link>
				</p>
			</div>
		</div>
	);
}
