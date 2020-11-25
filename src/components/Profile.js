import React, { useEffect } from 'react';
import { addAlert, logoutUser, removeUser, updateUser } from '../actions/actions';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { StyledFormComp } from '../styles/StyledFormComp';

const Profile = () => {
	const history = useHistory();
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	// const [editVisible, setEditVisible] = useState(false);
	// const [userData, setUserData] = useState({
	// 	firstname: user.firstname,
	// 	lastname: user.lastname,
	// 	email: user.email
	// });

	const logout = async () => {
		await dispatch(logoutUser());
		localStorage.removeItem('user-token');
		dispatch(addAlert('You have successfully logged out'));
		history.push('/');
	};

	useEffect(() => {
		const checkAuthentication = async () => {
			if (!user.token) {
				history.push('/');
			}
		};
		checkAuthentication();
	}, [history, user.token]);

	const handleSubmit = async (data) => {
		try {
			await dispatch(updateUser(data));
			// setEditVisible(false);
		} catch (errors) {
			// return setUserData((data) => ({ ...data, errors }));
			console.error(errors);
		}
	};

	const deleteUser = async () => {
		localStorage.removeItem('user-token');
		await dispatch(removeUser(user.id, user.token));
		history.push('/');
	};

	return (
		<StyledFormComp>
			<Formik onSubmit={handleSubmit} enableReinitialize>
				<Form>
					<Field className='input-box' placeholder='Username' name='username' type='text' />
					<ErrorMessage name='username' />

					<Field className='input-box' placeholder='Password' name='password' type='password' />
					<ErrorMessage name='password' />

					<Field className='input-box' placeholder='First Name' name='firstname' type='text' />

					<Field className='input-box' placeholder='Last Name' name='lastname' type='text' />

					<Field className='input-box' placeholder='Email' name='email' type='email' />
					<ErrorMessage name='email' />

					<button type='submit'>Update</button>
					<button onClick={'ADD LOGIC'}>Cancel</button>
					<button onClick={logout}>Logout</button>
					<button onClick={deleteUser}>Delete Profile</button>
				</Form>
			</Formik>
		</StyledFormComp>
	);
};

export default Profile;
