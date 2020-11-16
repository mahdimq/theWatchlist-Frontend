import React, { useState, Suspense } from 'react';
import { loginUser, registerUser } from '../reducers/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginComponent() {
	const dispatch = useDispatch();
	const initialState = {
		username: '',
		password: '',
		firstname: '',
		lastname: '',
		email: '',
		re_password: ''
	};
	const [formData, setFormdata] = useState(initialState);
	const [view, setView] = useState('login');
	const user = useSelector((state) => state.user);
	const isFetching = useSelector((state) => state.isFetching);

	if (isFetching) {
		return <h1>Loading...</h1>;
	}
	if (user) return <Redirect to='/' />;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormdata((data) => {
			return {
				...data,
				[name]: value
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (view === 'login') {
			dispatch(loginUser(formData.username, formData.password));
		} else if (view === 'signup') {
			if (formData.password !== formData.re_password) {
				return alert('Passwords must match');
			}
			dispatch(registerUser(formData));
		}
		setFormdata(initialState);
	};

	if (view === 'login') {
		return (
			<form onSubmit={handleSubmit}>
				<button onClick={() => setView('signup')}>Sign Up</button>
				<button>Login</button>

				<input
					required
					name='username'
					value={formData.username}
					onChange={handleChange}
					label='username'
				/>
				<input
					required
					type='password'
					id='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					label='password'
				/>
				<button type='submit' id='login' color='primary'>
					Login
				</button>
			</form>
		);
	} else
		return (
			<form onSubmit={handleSubmit}>
				<button>Signup</button>
				<button onClick={() => setView('login')}>Login</button>

				<input
					required
					name='username'
					value={formData.username}
					onChange={handleChange}
					id='username'
					label='username'
				/>
				<input
					required
					type='password'
					id='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					label='password'
				/>
				<input
					required
					type='password'
					id='re_password'
					name='re_password'
					value={formData.re_password}
					onChange={handleChange}
					label='Re-enter password'
				/>
				<input
					required
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					label='email'
				/>
				<input
					required
					id='first_name'
					name='first_name'
					value={formData.first_name}
					onChange={handleChange}
					label='firstname'
				/>
				<input
					required
					id='last_name'
					name='last_name'
					value={formData.last_name}
					onChange={handleChange}
					label='lastname'
				/>

				<button type='submit' id='signup' color='primary'>
					"Signup"
				</button>
			</form>
		);
}

function Login() {
	return (
		<Suspense fallback='en'>
			<LoginComponent />
		</Suspense>
	);
}

export default Login;
