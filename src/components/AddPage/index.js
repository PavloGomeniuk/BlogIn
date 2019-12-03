import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './Form.js'
import './AddPage.scss'

export default class AddPage extends Component {
					render() {
						return (
							<div className="main-section-add">
								<h3 className="main-section-add-text_H3">Add to journal</h3>
								<FormContainer />
							</div>
						);
					}
				}
				