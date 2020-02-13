import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import './login.scss';


export default class Login extends Component {
	constructor() {
		super();
		this.state={
			redirectToPreviousRoute: false,
    		username: '',
    		password: '',
		}
		this.handleSubmit=this.handleSubmit.bind(this);
		this.handleChange=this.handleChange.bind(this);
	}

    handleSubmit(e)  {
        e.preventDefault()
        const { username, password } = this.state
        this.props.logIn({
            username,
            password,
        },
        () => {
        this.setState({ redirectToPreviousRoute: true })
        }
        )
    }

    handleChange (e) {
        const value = e.currentTarget.value
        const fieldName = e.currentTarget.dataset.fieldName
        this.setState(prev => ({
            ...prev,
            [fieldName]: value,
        }))
    }

	render() {
	    const { location, errorMsg } = this.props
        const { from } = location.state || { from: { pathname: '/' } }
        const { username, password, redirectToPreviousRoute } = this.state

        if (redirectToPreviousRoute) {
            return <Redirect to={from} />
        }
		return (
  		    <React.Fragment>
                {errorMsg && <p>{errorMsg}</p>}
                <form onSubmit={this.handleSubmit.bind(this)}  className="form-1">
                    <p class="field">
                        <input
                            data-field-name={'username'}
                            type={'text'}
                            onChange={this.handleChange}
                            placeholder={'Enter your name'}
                            value={username}
                        />
                        <i class="icon-user icon-large">&#9786;</i>
                    </p>
                    <p class="field">
                        <input
                            data-field-name={'password'}
                            type={'text'}
                            onChange={this.handleChange.bind(this)}
                            placeholder={'Enter your password'}
                            value={password}
                        />
                        <i class="icon-lock icon-large">&#128274;</i>
                    </p>
                    <p class="submit">
                        <button type="submit">
                            <i class="icon-arrow-right icon-large"> &#10148;</i>
                        </button>
                    </p>
                </form>
            </React.Fragment>
		)
	}
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}