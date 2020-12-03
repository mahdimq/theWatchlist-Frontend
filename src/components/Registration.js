import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { object, string } from 'yup';
import { StyledFormComp } from '../styles/StyledFormComp';
import { registerUser, addAlert } from '../actions/actions';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
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

	const classes = useStyles();
	// ==========================
	const formik = useFormik({
		initialValues: {
			username: '',
			password: '',
			firstname: '',
			lastname: '',
			email: '',
			errors: []
		},
		validationSchema,
		onSubmit: async (values) => {
			try {
				await dispatch(registerUser(values));
				history.push('/');
			} catch (err) {
				err.forEach((error) => dispatch(addAlert(error)));
				console.error(err);
			}
		}
	});
	// ==========================

	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	console.log('### USER IN REGISTRATION ###', user);

	useEffect(() => {
		const checkRegistration = async () => {
			if (user.token) {
				console.log('### USER.TOKEN ###', user.token);
				history.push('/watchlist');
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
					{/* <FormControl fullWidth className={classes.margin} variant='outlined'>
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
					<ErrorMessage name='username' />

					<FormControl fullWidth className={classes.margin} variant='outlined'>
						<TextField
							id='password'
							label='Password'
							color='secondary'
							name='password'
							type='password'
							onChange={formik.handleChange}
							variant='outlined'
						/>
					</FormControl>
					<ErrorMessage name='password' />

					<FormControl fullWidth className={classes.margin} variant='outlined'>
						<TextField
							id='firstname'
							label='First Name'
							color='secondary'
							name='firstname'
							type='text'
							onChange={formik.handleChange}
							variant='outlined'
						/>
					</FormControl>

					<FormControl fullWidth className={classes.margin} variant='outlined'>
						<TextField
							id='lastname'
							label='Last Name'
							color='secondary'
							name='lastname'
							type='text'
							onChange={formik.handleChange}
							variant='outlined'
						/>
					</FormControl>

					<FormControl fullWidth className={classes.margin} variant='outlined'>
						<TextField
							id='email'
							label='Email'
							color='secondary'
							name='email'
							type='email'
							onChange={formik.handleChange}
							variant='outlined'
						/>
					</FormControl>
					<ErrorMessage name='email' /> */}

					<Field className='input-box' placeholder='Username' name='username' type='text' />
					<ErrorMessage name='username' />

					<Field className='input-box' placeholder='Password' name='password' type='password' />
					<ErrorMessage name='password' />

					<Field className='input-box' placeholder='First Name' name='firstname' type='text' />

					<Field className='input-box' placeholder='Last Name' name='lastname' type='text' />

					<Field className='input-box' placeholder='Email' name='email' type='email' />
					<ErrorMessage name='email' />

					<Button
						variant='contained'
						size='large'
						color='primary'
						className={classes.button}
						type='submit'>
						Signup
					</Button>
					<Button
						onClick={() => history.push('/login')}
						variant='contained'
						size='large'
						color='secondary'
						className={classes.button}>
						Login
					</Button>

					{/* <button className='form-btn' type='submit'>
						Sign Up
					</button> */}
				</Form>
			</Formik>
		</StyledFormComp>
	);
};

export default Registration;
