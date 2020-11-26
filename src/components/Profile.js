import React, { useState, useEffect } from 'react';
import { logoutUser, addAlert, updateUser, removeUser, getUserInfo } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import { StyledFormComp } from '../styles/StyledFormComp';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
	const history = useHistory();
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const INITIAL_STATE = {
		firstname: '' || undefined,
		lastname: '' || undefined,
		email: user.email
	};

	const [formData, setFormData] = useState(INITIAL_STATE);
	const [isVisible, setIsVisible] = useState(false);

	// Ensure user is logged in otherwise redirect to login page
	useEffect(() => {
		async function confirmUser() {
			if (user.token) {
				await dispatch(getUserInfo(user.id));
			} else {
				dispatch(addAlert('Please login first!'));
				history.push('/login');
			}
		}
		confirmUser();
	}, [dispatch, history, user.token, user.id]);

	// Update the user information in localstate with form values
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((data) => ({ ...data, [name]: value }));
	};

	// HANDLE SUBMIT FUNCTION
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			//update user information
			await dispatch(updateUser(user.id, formData));
			setIsVisible(false);
		} catch (errors) {
			console.error(errors);
		}
	}

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
				<form onSubmit={handleSubmit}>
					<input
						className='input-box'
						placeholder={user.firstname}
						value={formData.firstname}
						onChange={handleChange}
						name='firstname'
						type='text'
					/>

					<input
						className='input-box'
						placeholder={user.lastname}
						value={formData.lastname}
						onChange={handleChange}
						name='lastname'
						type='text'
					/>

					<input
						className='input-box'
						placeholder={user.email}
						value={formData.email}
						onChange={handleChange}
						name='email'
						type='email'
					/>

					<input
						className='input-box'
						placeholder='Password'
						value={formData.password}
						onChange={handleChange}
						name='password'
						type='password'
					/>
					<small>Please enter password to update profile</small>

					<button className='form-btn' type='submit'>
						Update
					</button>
					<button className='form-btn cancel' onClick={() => setIsVisible(false)}>
						Cancel
					</button>
					<button className='form-btn logout' onClick={logout}>
						Logout
					</button>
					<button className='form-btn delete' onClick={deleteUser}>
						Delete Profile
					</button>
				</form>
			)}
		</StyledFormComp>
	);
}

export default Profile;
