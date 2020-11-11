import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser } from '../reducers/actions';
// import CapstoneApi from '../CapstoneApi';

function Login() {
	const [active, setActive] = useState('login');
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const INITIAL_STATE = {
		username: '',
		password: '',
		firstname: '',
		lastname: '',
		email: '',
		errors: []
	};
	const [loginData, setLoginData] = useState(INITIAL_STATE);

	function handleLogin() {
		setActive('login');
	}

	function handleSignup() {
		setActive('signup');
	}

	useEffect(() => {
		async function authenticate() {
			if (user.token) {
				history.push('/');
			}
		}
		authenticate();
	}, []); //<-- CHECK THIS FOR ERRORS

	async function handleSubmit(e) {
		e.preventDefault();
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
			endpoint = 'registerUser';
		} else {
			data = {
				username: loginData.username,
				password: loginData.password
			};
			endpoint = 'loginUser';
		}

		try {
			// login or signup user
			if (endpoint === 'loginUser') {
				await dispatch(loginUser(data));
			} else {
				await dispatch(registerUser(data));
			}
			setLoginData(INITIAL_STATE);
			history.push('/login');
		} catch (err) {
			console.log(err);
			return setLoginData((data) => ({ ...data, err }));
		}
	}

	// Update local state with current state of input

	const handleChange = (e) => {
		const { name, value } = e.target;
		handleLogin((userData) => ({
			...userData,
			[name]: value
		}));
	};

	// const history = useHistory();
	// const [active, setActive] = useState('login');
	// const [loginData, setLoginData] = useState({
	// 	username: '',
	// 	password: '',
	// 	firstname: '',
	// 	lastname: '',
	// 	email: '',
	// 	errors: []
	// });

	// function setLogin() {
	// 	setActive('login');
	// }
	// function setSignup() {
	// 	setActive('signup');
	// }

	// async function handleSubmit(evt) {
	// 	evt.preventDefault();
	// 	let endpoint;
	// 	let data;
	// 	let token;

	// 	if (active === 'signup') {
	// 		data = {
	// 			username: loginData.username,
	// 			password: loginData.password,
	// 			firstname: loginData.firstname || undefined,
	// 			lastname: loginData.lastname || undefined,
	// 			email: loginData.email || undefined
	// 		};
	// 		endpoint = 'register';
	// 	} else {
	// 		data = {
	// 			username: loginData.username,
	// 			password: loginData.password
	// 		};
	// 		endpoint = 'login';
	// 	}

	// 	try {
	// 		token = await CapstoneApi[endpoint](data);
	// 	} catch (errors) {
	// 		return setLoginData((sign) => ({ ...sign, errors }));
	// 	}

	// 	setToken(token);
	// 	history.push('/');
	// }

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setLoginData((sign) => ({
	// 		...sign,
	// 		[name]: value
	// 	}));
	// };

	// const signupFields = (
	// 	<div>
	// 		<div>
	// 			<input
	// 				id='firstname'
	// 				type='text'
	// 				className='validate'
	// 				name='firstname'
	// 				value={loginData.firstname}
	// 				onChange={handleChange}
	// 			/>
	// 			<label htmlFor='firstname'>First Name</label>
	// 		</div>

	// 		<div>
	// 			<input
	// 				id='lastname'
	// 				type='text'
	// 				className='validate'
	// 				name='lastname'
	// 				value={loginData.lastname}
	// 				onChange={handleChange}
	// 			/>
	// 			<label htmlFor='lastname'>Last Name</label>
	// 		</div>

	// 		<div>
	// 			<input
	// 				id='email'
	// 				type='text'
	// 				className='validate'
	// 				name='email'
	// 				value={loginData.email}
	// 				onChange={handleChange}
	// 			/>
	// 			<label htmlFor='email'>Email</label>
	// 		</div>
	// 	</div>
	// );

	return (
		<div>
			<div>
				<button className={`btn login ${active === 'login' ? 'active' : ''}`} onClick={handleLogin}>
					Login
				</button>
				<button
					className={`btn signup ${active === 'signup' ? 'active' : ''}`}
					onClick={handleSignup}>
					Sign up
				</button>
			</div>

			<h3 className='my-4'>Log in or create a new account</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username</label>
					<input name='username' value={loginData.username} onChange={handleChange} />
				</div>
				<div>
					<label>Password</label>
					<input
						type='password'
						name='password'
						value={loginData.password}
						onChange={handleChange}
					/>
				</div>
				{active === 'signup' && (
					<div>
						<label>Email</label>
						<input type='email' name='email' value={loginData.email} onChange={handleChange} />
					</div>
				)}
				<button type='submit'>Submit</button>
			</form>
		</div>
		// <div>
		// 	<div>
		// 		<button onClick={handleLogin}>Login</button> {/* radd class for active button */}
		// 		<button onClick={handleSignup}>Sign up</button> {/* add class for active button */}
		// 	</div>

		// 	<div>
		// 		<form onSubmit={handleSubmit}>
		// 			<div>
		// 				<input
		// 					id='username'
		// 					type='text'
		// 					className='validate'
		// 					name='username'
		// 					value={loginData.username}
		// 					onChange={handleChange}
		// 				/>
		// 				<label htmlFor='username'>Username</label>
		// 			</div>

		// 			<div>
		// 				<input
		// 					id='password'
		// 					type='password'
		// 					className='validate'
		// 					name='password'
		// 					value={loginData.password}
		// 					onChange={handleChange}
		// 				/>
		// 				<label htmlFor='password'>Password</label>
		// 			</div>

		// 			{active === 'signup' ? signupFields : ''}
		// 			{loginData.errors.length ? <Alert messages={loginData.errors} /> : null}
		// 			<button type='submit'>Submit</button>
		// 		</form>
		// 	</div>
		// </div>
	);
}

export default Login;
