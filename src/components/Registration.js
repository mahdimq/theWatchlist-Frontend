import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { registerUser, addAlert } from '../actions/actions';

// Import Styles
import { StyledFormComp } from '../styles/StyledFormComp';
import Button from '@material-ui/core/Button';

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

	useEffect(() => {
		const checkRegistration = async () => {
			if (user.token) {
				history.push('/watchlist');
			}
		};
		checkRegistration();
	});

	const handleSubmit = async (data) => {
		try {
			await dispatch(registerUser(data));
			history.push('/');
		} catch (errors) {
			errors.forEach((e) => {
				dispatch(addAlert(`Username/email already exists!`, 'error'));
			});
		}
	};

	return (
		<StyledFormComp>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				<Form>
					<Field
						className='input-box'
						placeholder='Username'
						name='username'
						type='text'
					/>
					<ErrorMessage name='username' />

					<Field
						className='input-box'
						placeholder='Password'
						name='password'
						type='password'
					/>
					<ErrorMessage name='password' />

					<Field
						className='input-box'
						placeholder='First Name'
						name='firstname'
						type='text'
					/>
					<Field
						className='input-box'
						placeholder='Last Name'
						name='lastname'
						type='text'
					/>

					<Field className='input-box' placeholder='Email' name='email' type='email' />
					<ErrorMessage name='email' />

					<div className='button-group'>
						<Button
							variant='contained'
							size='large'
							color='secondary'
							className='profile-btn'
							type='submit'>
							Signup
						</Button>
						<Button
							onClick={() => history.push('/login')}
							variant='contained'
							size='large'
							color='primary'
							className='profile-btn'
							style={{ marginLeft: '0.8em' }}>
							Login
						</Button>
					</div>
				</Form>
			</Formik>
		</StyledFormComp>
	);
};

export default Registration;
