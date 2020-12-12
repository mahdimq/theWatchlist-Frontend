import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, addAlert } from '../actions/actions';

// Style Imports
import { StyledFormComp } from '../styles/StyledFormComp';
// import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
				history.goBack();
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
				dispatch(addAlert(`Invalid Credentials`, 'error'));
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
					<div className='button-group'>
						<Button
							variant='contained'
							size='large'
							color='secondary'
							className='profile-btn'
							type='submit'>
							Login
						</Button>
						<Button
							style={{ marginLeft: '0.8em' }}
							onClick={() => history.push('/signup')}
							variant='contained'
							size='large'
							color='primary'
							className='profile-btn'>
							Signup
						</Button>
					</div>
				</Form>
			</Formik>
		</StyledFormComp>
	);
};

export default Login;
