import React from 'react';
import { Link } from 'react-router-dom';
import'./journalitem.scss';

const JournalItem = ({ text, title }) => (
	<div className="journal-item">
    	<h3>{title}</h3>
       	<p className="full-post__text">{text}</p>
      	<Link to="/">
        	<button>Back</button>
      	</Link> 
  	</div>
);

export default JournalItem;
