import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { StyledFormComp } from '../styles/StyledFormComp';
import { registerUser, addAlert } from '../actions/actions';

const initialValues = {
	username: '',
	password: '',
	firstname: '',
	lastname: '',
	email: '',
	errors: []
};

const validationSchema = object().shape({
	username: string().required().min(2),
	password: string().required().min(4),
	email: string().email().required()
});

const Registration = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	console.log('### USER IN REGISTRATION ###', user);

	useEffect(() => {
		const checkRegistration = async () => {
			if (user.token) {
				console.log('### USER.TOKEN ###', user.token);
				history.push('/');
			}
		};
		checkRegistration();
	});

	const handleSubmit = async (data) => {
		try {
			await dispatch(registerUser(data));
			history.push('/');
		} catch (err) {
			err.forEach((error) => dispatch(addAlert(error)));
			console.error(err);
		}
	};

	return (
		<StyledFormComp>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<Form>
					<Field className='input-box' placeholder='Username' name='username' type='text' />
					<ErrorMessage name='username' />

					<Field className='input-box' placeholder='Password' name='password' type='password' />
					<ErrorMessage name='password' />

					<Field className='input-box' placeholder='First Name' name='firstname' type='text' />

					<Field className='input-box' placeholder='Last Name' name='lastname' type='text' />

					<Field className='input-box' placeholder='Email' name='email' type='email' />
					<ErrorMessage name='email' />

					<button type='submit'>Sign Up</button>
				</Form>
			</Formik>
		</StyledFormComp>
	);
};

export default Registration;
