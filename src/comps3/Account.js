import React, { useState, useEffect } from 'react';
import { logoutUser, addAlert, updateUser, removeUser } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Account() {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((st) => st.user);
	console.log('### USER FROM ACCOUNT ###', user.user);
	const [userData, setUserData] = useState({
		firstname: user.user.firstname,
		lastname: user.user.lastname,
		email: user.user.email
	});
	const [editVisible, setEditVisible] = useState(false);

	async function logout() {
		await dispatch(logoutUser());
		localStorage.removeItem('user-token');
		dispatch(addAlert('You have successfully logged out', 'success'));
		history.push('/');
	}

	//bounces user to home page if not logged in
	useEffect(() => {
		function redirect() {
			if (!user.token) {
				//dispatch(addAlert(`You must be logged in to view that page!`, "danger"));
				history.push('/login');
			}
		}
		redirect();
	}, [history, dispatch, user.token]);

	async function handleSubmit(evt) {
		evt.preventDefault();

		try {
			//update user email
			await dispatch(updateUser(user.user.id, userData));
			setEditVisible(false);
		} catch (errors) {
			return setUserData((data) => ({ ...data, errors }));
		}
	}

	async function deleteUser() {
		localStorage.removeItem('user-token');
		await dispatch(removeUser(user.user.id, user.token));
		history.push('/');
	}

	/** Update local state w/curr state of input elem */

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setUserData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	return (
		<>
			<div>
				<h3>Username: {user.user.username}</h3>
				<h3>First Name: {user.user.firstname}</h3>
				{!editVisible && (
					<>
						<p>First Name: {user.user.firstname}</p>
						<p>Last Name: {user.user.lastname}</p>
						<p>Email: {user.user.email}</p>
						<button onClick={() => setEditVisible(true)}>Edit</button>
					</>
				)}
				{editVisible && (
					<form onSubmit={handleSubmit}>
						<div>
							<label>First Name</label>
							<input
								type='text'
								name='firstname'
								value={userData.firstname}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label>First Name</label>
							<input
								type='text'
								name='lastname'
								value={userData.lastname}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label>Email</label>
							<input type='email' name='email' value={userData.email} onChange={handleChange} />
						</div>
						<button type='submit'>Save</button>
						<button onClick={() => setEditVisible(false)}>Cancel</button>
					</form>
				)}
			</div>

			<div>
				<button onClick={logout}>Logout</button>
				<button onClick={deleteUser}>Delete Account</button>
			</div>
		</>
	);
}

export default Account;
