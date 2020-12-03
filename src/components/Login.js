import React, { useEffect } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import { StyledFormComp } from '../styles/StyledFormComp';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import { loginUser, addAlert } from '../actions/actions';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(1),
				width: '35ch'
			},
			display: 'flex',
			flexWrap: 'wrap'
		},
		margin: {
			margin: theme.spacing(1)
		},
		button: {
			margin: theme.spacing(1)
		}
	})
);

const Login = () => {
	const classes = useStyles();
	// ==========================
	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		onSubmit: async (values) => {
			try {
				await dispatch(loginUser(values));
				history.push('/');
			} catch (err) {
				err.forEach((error) => {
					dispatch(addAlert(error));
					console.error(err);
				});
			}
		}
	});
	// ==========================
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
			<Formik initialValues={initialValues} onSubmit={formik.handleSubmit}>
				<Form>
					<FormControl fullWidth className={classes.margin} variant='outlined'>
						<TextField
							id='username'
							label='Username'
							color='secondary'
							name='username'
							type='text'
							onChange={formik.handleChange}
							variant='outlined'
						/>
					</FormControl>

					<FormControl fullWidth className={classes.margin} variant='outlined'>
						<TextField
							id='password'
							label='Username'
							color='secondary'
							name='password'
							type='password'
							onChange={formik.handleChange}
							variant='outlined'
						/>
					</FormControl>

					{/* <Field className='input-box' placeholder='Username' name='username' type='text' /> */}

					{/* <Field className='input-box' placeholder='Password' name='password' type='password' /> */}
					{/* <button className='form-btn' type='submit'>
						Login
					</button> */}
					<Button
						variant='contained'
						size='large'
						color='secondary'
						className={classes.button}
						type='submit'>
						Login
					</Button>
					<Button
						onClick={() => history.push('/signup')}
						variant='contained'
						size='large'
						color='primary'
						className={classes.button}>
						Signup
					</Button>
				</Form>
			</Formik>
		</StyledFormComp>
	);
};

export default Login;
