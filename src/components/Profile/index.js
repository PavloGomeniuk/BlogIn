import React from 'react'
import PropTypes from 'prop-types'
import Titles from './Titles.js';
import './profile.scss';

const Profile = ({ user }) => {
	return (
    	<React.Fragment>
      		<h2 className="profile-title">Welcome {user.name}</h2>
      		<Titles/>
    	</React.Fragment>
    
  	)
}

Profile.proptypes = {
	user: PropTypes.shape({
    	name: PropTypes.string.isRequired,
  	}).isRequired,
}

export default Profile
