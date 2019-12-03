import React, {Component} from 'react';
import TextArea from './TextArea';
import Button from './Button';
import Input from './Input';

export default	class FormContainer extends Component {  
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
										 title= {'Title of your story'} 
										 name= {'title'}
										 value={this.state.newUser.title} 
										 placeholder = {'Enter title'}
										 handleChange = {this.handleInput}
							/>

							<Input inputtype={'text'} 
										 name={'backgroundURL'}
										 title= {'Download image for your story'} 
										 value={this.state.newUser.backgroundURL} 
										 placeholder = {'Enter image url'}
										 handleChange={this.handleInput} 
							/> 

							<TextArea
										 title={'Describe your story'}
										 rows={10}
										 value={this.state.newUser.text}
										 name={'text'}
										 handleChange={this.handleTextArea}
										 placeholder={'Enter text'} 
							/>

							<div className="btn-box">
								<Button 
										 action = {this.handleFormSubmit}
										 style = {'btn_accept'}
										 type = {'primary'} 
										 title = {'Submit'} 
							/> 
						
							 <Button 
										 action = {this.handleClearForm}
										 style = {'btn_clear'}
										 type = {'secondary'}
										 title = {'Clear'}
							/>
							</div> 
						</form>
					 );
				}
			}


		