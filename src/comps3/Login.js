import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { StyledFormComp } from '../styles/StyledFormComp';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, addAlert } from '../actions/actions';

const Login = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const initialValues = {
		username: '',
		password: '',
		errors: []
	};

	useEffect(() => {
		async function checkLogin() {
			if (user.token) {
				history.push('/');
			}
		}
		checkLogin();
	});

	const handleSubmit = async (data) => {
		try {
			await dispatch(loginUser(data));
			history.push('/');
		} catch (err) {
			err.forEach((error) => {
				dispatch(addAlert(error));
				console.error(err);
			});
		}
	};

	return (
		<StyledFormComp>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<Field className='input-box' placeholder='Username' name='username' type='text' />

					<Field className='input-box' placeholder='Password' name='password' type='password' />
					<button className='form-btn' type='submit'>
						Login
					</button>
				</Form>
			</Formik>
		</StyledFormComp>
	);
};

export default Login;
