// import React, { useState, useEffect } from 'react';
// import { Formik, Form, Field } from 'formik';
// import { StyledFormComp } from '../styles/StyledFormComp';
// import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { registerUser, loginUser, addAlert } from '../actions/actions';

// const initialValues = {
// 	username: '',
// 	password: ''
// };

// const LoginFormik = () => {
// 	const history = useHistory();
// 	const dispatch = useDispatch();
// 	const user = useSelector((state) => state.users);

// 	useEffect(() => {
// 		const checkLogin = async () => {
// 			if (user) {
// 				history.push('/');
// 			}
// 		};
// 		checkLogin();
// 	});

// 	const handleSubmit = async (data) => {
// 		try {
// 			await dispatch(loginUser(data));
// 		} catch (err) {
// 			console.error(err);
// 		}
// 		history.push('/');
// 	};

// 	return (
// 		<StyledFormComp>
// 			<h1>FORMIK Login Form</h1>
// 			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
// 				<Form>
// 					<Field className='input-box' placeholder='Username' name='username' type='text' />

// 					<Field className='input-box' placeholder='Password' name='password' type='password' />

// 					<button type='submit'>Login</button>
// 				</Form>
// 			</Formik>
// 		</StyledFormComp>
// 	);
// };

// export default LoginFormik;
