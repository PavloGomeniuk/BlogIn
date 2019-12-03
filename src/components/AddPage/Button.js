import React, {Component} from 'react';

const Button = (props) => {
					return(
						 <button 
								className = {props.style}
								onClick= {props.action} > 
								{props.title} 
						 </button>)
				}
export default Button;