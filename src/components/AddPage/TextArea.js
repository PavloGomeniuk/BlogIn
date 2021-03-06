import React, {Component} from 'react';

const TextArea = (props) => (  
	<div className="form-group-textarea">
		<label className="form-label">{props.title}</label>
		<textarea
			className="form-textarea"
			name={props.name}
			rows={props.rows}
			cols = {props.cols}
			value={props.value}
			onChange={props.handleChange}
			placeholder={props.placeholder} />
	</div>
);

export default TextArea;