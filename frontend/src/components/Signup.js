import React, { useState } from 'react';
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});


	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}; 

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
			console.log(response);
		} catch (error) {
			console.error("Signup failed:", error);
		}
		// setFormData({ name: "", email: "", password: "" });
	};

	return (
		<div className="wrapper signUp">
			<div className="form">
				<div className="heading">SIGN UP</div>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							onChange={handleChange}
							id="name"
							placeholder="Enter your name"
							value={formData.name}
							required
						/>
					</div>
					<div>
						<label htmlFor="email">E-Mail</label>
						<input
							type="email"
							name="email"
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
							name="password"
							onChange={handleChange}
							id="password"
							placeholder="Enter your password"
							value={formData.password}
							required
						/>
					</div>
					<button type="submit">Sign Up</button>
				</form>
				<p>
					Already have an account? <Link to="/">Login</Link>
				</p>
			</div>
		</div>
	);
}
