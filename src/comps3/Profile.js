import React, { useState, useEffect } from 'react';
import { addAlert, logoutUser, removeUser, updateUser } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
	const history = useHistory();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const [emailData, setEmailData] = useState({ email: user.email });
	// const [editVisible, setEditVisible] = useState(false);

	async function logout() {
		await dispatch(logoutUser());
		localStorage.removeItem('user-token');
		dispatch(addAlert('You have successfully logged out'));
		history.push('/');
	}

	//Ensure user is logged in, otherwise redirect user to login page
	useEffect(() => {
		function confirmUser() {
			if (!user.token) {
				dispatch(addAlert('Please login first!'));
				history.push('/login');
			}
		}
		confirmUser();
	}, [history, dispatch, user.token]);

	async function handleSubmit(evt) {
		evt.preventDefault();

		try {
			//update user email
			await dispatch(updateUser(user.username, emailData));
			setEditVisible(false);
		} catch (errors) {
			return (data) => ({ ...data, errors });
		}
	}

	async function deleteUser() {
		localStorage.removeItem('user-token');
		await dispatch(removeUser(user.id, user.token));
		history.push('/');
	}

	/** Update local state w/curr state of input elem */

	const handleChange = (evt) => {
		const { value } = evt.target;
		setEmailData({ email: value });
	};

	return (
		<div className='Profile container-fluid'>
			<div className='row p-3'>
				<div className='text-left col-md-6 offset-md-3 col-lg-4 offset-lg-4 my-3'>
					<h3>Username: {user.username}</h3>
					{!editVisible && (
						<>
							<p>Email: {user.email}</p>
							<button className='btn btn-primary btn-sm' onClick={() => setEditVisible(true)}>
								Edit
							</button>
						</>
					)}
					{editVisible && (
						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label>Email</label>
								<input
									type='email'
									name='email'
									className='form-control'
									value={emailData.email}
									onChange={handleChange}
								/>
							</div>
							<button type='submit' className='btn btn-primary btn-sm mr-3'>
								Save
							</button>
							<button className='btn btn-primary btn-sm' onClick={() => setEditVisible(false)}>
								Cancel
							</button>
						</form>
					)}
				</div>
			</div>
			<div className='container text-left col-md-6 offset-md-3 col-lg-4 offset-lg-4 py-5'>
				<button className='btn btn-primary mr-3' onClick={logout}>
					Logout
				</button>
				<button className='btn btn-primary' onClick={deleteUser}>
					Delete Profile
				</button>
			</div>
		</div>
	);
}

export default Profile;
