import React from 'react';

const TitlesItem = ({ title, _id, onRemove }) => (
	<dl className="main-section-profile">
    	<dt className="main-section-profile-text">
        	<dd>
            	{title}
            </dd>
            <a href="javascript://" onClick={onRemove.bind(this, _id)}>Delete post</a>
        </dt>
    </dl>
);

export default TitlesItem;