import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../reducers/actions';
import { decode } from 'jsonwebtoken';

//Handles user login and registration

function Login() {
	const [active, setActive] = useState('login');
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.users);
	console.log('### USER IN LOGIN COMP: ', user);
	const info = decode(user);
	console.log('### INFO IN LOGIN COMP: ', info);
	const INITIAL_STATE = {
		username: '',
		password: '',
		firstname: '',
		lastname: '',
		email: '',
		errors: []
	};
	const [loginData, setLoginData] = useState(INITIAL_STATE);

	function setLogin() {
		setActive('login');
	}
	function setSignup() {
		setActive('signup');
	}
	//bounces logged in users to home page if already logged in
	useEffect(() => {
		async function checkLogin() {
			console.log('#### CHECKLOGIN IN LOGIN COMP: ', user.token);
			if (user.token) {
				history.push('/');
			}
		}
		checkLogin();
	});

	async function handleSubmit(evt) {
		evt.preventDefault();
		let endpoint;
		let data;

		if (active === 'signup') {
			data = {
				username: loginData.username,
				password: loginData.password,
				firstname: loginData.firstname || undefined,
				lastname: loginData.lastname || undefined,
				email: loginData.email || undefined
			};
			endpoint = 'register';
		} else {
			data = {
				username: loginData.username,
				password: loginData.password
			};
			endpoint = 'login';
		}

		try {
			//login or register user
			if (endpoint === 'login') {
				await dispatch(loginUser(data));
			} else {
				await dispatch(registerUser(data));
			}
			setLoginData(INITIAL_STATE);
			history.push('/');
		} catch (errors) {
			errors.forEach((e) => {
				console.error(e);
			});
			return setLoginData((data) => ({ ...data, errors }));
		}
	}

	/** Update local state w/curr state of input elem */

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setLoginData((fData) => ({
			...fData,
			[name]: value
		}));
	};

	const signupFields = (
		<div>
			<div>
				<label htmlFor='firstname'>First Name</label>
				<input
					type='text'
					className='firstname'
					name='firstname'
					onChange={handleChange}
					value={loginData.firstname}
					placeholder='firstname'
				/>
			</div>
			<div>
				<label htmlFor='lastname'>Last Name</label>
				<input
					type='text'
					className='lastname'
					name='lastname'
					onChange={handleChange}
					value={loginData.lastname}
					placeholder='lastname'
				/>
			</div>
			<div>
				<label htmlFor='email'>Email Address</label>
				<input
					type='email'
					className='email'
					name='email'
					onChange={handleChange}
					value={loginData.email}
					placeholder='email'
				/>
			</div>
		</div>
	);

	return (
		<>
			<h3>Login Form</h3>
			<button className={`${active === 'login' ? 'active' : ''}`} onClick={setLogin}>
				Login
			</button>
			<button className={` ${active === 'signup' ? 'active' : ''}`} onClick={setSignup}>
				Sign up
			</button>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						className='username'
						name='username'
						onChange={handleChange}
						value={loginData.username}
						placeholder='username'
					/>
				</div>

				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						className='password'
						name='password'
						onChange={handleChange}
						value={loginData.password}
						placeholder='password'
					/>
				</div>
				{active === 'signup' ? signupFields : ''}
				<button type='submit'>Submit</button>
			</form>
		</>
	);
}

export default Login;
