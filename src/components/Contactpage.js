import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export default class Contactpage extends Component {
					render() {
						return (
							<div className="main-section-first-contact-container">
								<h3>Add to blog</h3>
								<FormContainer />
							</div>
						);
					}
				}
				const TextArea = (props) => (  
					<div className="form-group">
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
				const Button = (props) => {
					console.log(props.style);
					return(
						 <button 
								style= {props.style} 
								className = {props.type=='primary'? 'btn btn-primary' : 'btn btn-secondary'}
								onClick= {props.action} > 
								{props.title} 
						 </button>)
				}
				const Input = (props) => {
					 console.log(props.value);
					 return (  
							<div className="form-group">
								<label for={props.name} className="form-label">{props.title}</label>
								<input
									className="form-control"
									id={props.name}
									name={props.name}
									type={props.inputType}
									value={props.value}
									onChange={props.handleChange}
									placeholder={props.placeholder} 
									{...props} />
							</div>
					)
				}
				class FormContainer extends Component {  
					constructor(props) {
						super(props);
						this.state = {
							newUser: {
							title: '',
							text: '',
							backgroundURL: ''
							},
						}
						this.handleTextArea = this.handleTextArea.bind(this);
						this.handleFormSubmit = this.handleFormSubmit.bind(this);
						this.handleClearForm = this.handleClearForm.bind(this);
						this.handleInput = this.handleInput.bind(this);
					}

				handleInput(e) {
					let value = e.target.value;
					let name = e.target.name;
					this.setState( prevState => ({ 
						newUser : {...prevState.newUser, [name]: value}
					}), () => console.log(this.state.newUser))
				}

				handleTextArea(e) {
					console.log("Inside handleTextArea");
					let value = e.target.value;
					this.setState(prevState => ({
						newUser: {...prevState.newUser, text: value}
					}), ()=>console.log(this.state.newUser))
				}

				handleFormSubmit(e) {
					e.preventDefault();
					let userData = this.state.newUser;
					console.log(userData);
					fetch('http://localhost:3000/posts',{
						method: "POST",
						body: JSON.stringify(userData),
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json'
						},
					}).then(response => {
						console.log(userData);
						response.json().then(data =>{
							console.log("Successful" + data);
						})
					})
				}   

				handleClearForm(e) {
					e.preventDefault();
					this.setState({ 
						newUser: {
							title: '',
							text: '',
							backgroundURL: ''
						},
					})
				}

				render() {
					return (
						<form className="container-fluid" onSubmit={this.handleFormSubmit}>
							<Input inputtype={'text'}
										 title= {'Title'} 
										 name= {'title'}
										 value={this.state.newUser.title} 
										 placeholder = {'Enter Title'}
										 handleChange = {this.handleInput}
							/>

							<TextArea
										 title={'text'}
										 rows={10}
										 value={this.state.newUser.text}
										 name={'text'}
										 handleChange={this.handleTextArea}
										 placeholder={'Enter text'} 
							/>

							<Input inputtype={'text'} 
										 name={'backgroundURL'}
										 title= {'ImageUrl'} 
										 value={this.state.newUser.backgroundURL} 
										 placeholder = {'Enter ImageURL'}
										 handleChange={this.handleInput} 
							/> 

							<Button 
										 action = {this.handleFormSubmit}
										 type = {'primary'} 
										 title = {'Submit'} 
										 style={buttonStyle}
							/> 
						
							 <Button 
										 action = {this.handleClearForm}
										 type = {'secondary'}
										 title = {'Clear'}
										 style={buttonStyle}
							/> 
						</form>
					 );
				}
			}
			const buttonStyle = {
				margin : '10px 10px 10px 10px'
			}

		