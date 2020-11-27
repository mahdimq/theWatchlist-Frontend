import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { logoutUser, addAlert, updateUser, removeUser, getUserInfo } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { StyledFormComp } from '../styles/StyledFormComp';

const initialValues = {
	username: '',
	password: '',
	firstname: '',
	lastname: '',
	email: ''
};

const validationSchema = object().shape({
	email: string().email(),
	password: string().required()
});

const Profile = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const [userData, setUserData] = useState(initialValues);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const checkUser = async () => {
			if (user.token) {
				const userBio = await dispatch(getUserInfo(user.id));
				setUserData(userBio.payload);
			} else {
				dispatch(addAlert('Please login first'));
				history.push('/login');
			}
		};
		checkUser();
	}, [dispatch, user.token, user.id]);

	const savedValues = {
		password: '',
		firstname: userData.firstname || '',
		lastname: userData.lastname || '',
		email: userData.email || ''
	};

	const handleSubmit = async (data) => {
		try {
			await dispatch(updateUser(user.id, data));
			setIsVisible(false);
		} catch (error) {
			dispatch(addAlert(error));
			console.error(error);
		}
	};

	// Logout the user, remove token from localstorage
	// then redirect user to homepage
	async function logout() {
		await dispatch(logoutUser());
		localStorage.removeItem('user-token');
		dispatch(addAlert('You have successfully logged out'));
		history.push('/');
	}

	// Delete the user and remove token from localstorage
	// then redirect user to homepage
	async function deleteUser() {
		localStorage.removeItem('user-token');
		await dispatch(removeUser(user.id, user.token));
		dispatch(addAlert('user deleted!'));
		history.push('/');
	}

	return (
		<StyledFormComp>
			{!isVisible && (
				<>
					<h4>First Name: {user.firstname}</h4>
					<h4>Last Name: {user.lastname}</h4>
					<h4>Email: {user.email}</h4>
					<button className='form-btn' onClick={() => setIsVisible(true)}>
						Edit
					</button>
				</>
			)}
			{isVisible && (
				<>
					<Formik
						initialValues={savedValues || initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
						enableReinitialize>
						<Form>
							<Field className='input-box' placeholder='First Name' name='firstname' type='text' />

							<Field className='input-box' placeholder='Last Name' name='lastname' type='text' />

							<Field className='input-box' placeholder='Email' name='email' type='email' />
							<ErrorMessage name='email' />

							<Field className='input-box' placeholder='Password' name='password' type='password' />
							<ErrorMessage name='password' />
							<small style={{ display: 'block' }}>Please enter password to update profile</small>

							<button className='form-btn' type='submit'>
								Update Up
							</button>
						</Form>
					</Formik>
					<button className='form-btn cancel' onClick={() => setIsVisible(false)}>
						Cancel
					</button>
					<button className='form-btn logout' onClick={logout}>
						Logout
					</button>
					<button className='form-btn delete' onClick={deleteUser}>
						Delete Profile
					</button>
				</>
			)}
		</StyledFormComp>
	);
};

export default Profile;
