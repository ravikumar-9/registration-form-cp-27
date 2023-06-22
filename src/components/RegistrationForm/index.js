// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isFormSubmitted: true,
    firstName: '',
    lastName: '',
    isFirstNameError: '',
    isLastNameError: '',
  }

  submitFormData = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({isFirstNameError: 'Required'})
    }
    if (lastName === '') {
      this.setState({isLastNameError: 'Required'})
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        isFirstNameError: '',
        isLastNameError: '',
        isFormSubmitted: false,
      })
    }
  }

  onLostFocusOfLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({isLastNameError: 'Required'})
    } else {
      this.setState({isLastNameError: null})
    }
  }

  onLostFocusOfFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({isFirstNameError: 'Required'})
    } else {
      this.setState({isFirstNameError: null})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onAnotherResponse = () => {
    this.setState({
      isFormSubmitted: true,
      firstName: '',
      lastName: '',
      isFirstNameError: '',
      isLastNameError: '',
    })
  }

  renderSubmitForm = () => {
    const {isLastNameError, isFirstNameError} = this.state
    return (
      <form
        className="registration-form-container"
        onSubmit={this.submitFormData}
      >
        <div>
          <label htmlFor="username" className="username">
            First Name
          </label>
          <input
            type="text"
            id="username"
            className="input"
            onChange={this.onChangeFirstName}
            placeholder="First name"
            onBlur={this.onLostFocusOfFirstName}
          />
          <p className="error-message">{isFirstNameError}</p>
        </div>
        <div>
          <label htmlFor="lastName" className="username">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="input"
            onChange={this.onChangeLastName}
            placeholder="Last name"
            onBlur={this.onLostFocusOfLastName}
          />
          <p className="error-message">{isLastNameError}</p>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  renderResponseForm = () => (
    <div className="registration-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="response">Submitted Successfully</p>
      <button
        type="button"
        className="another-response-button"
        onClick={this.onAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted, firstName, lastName} = this.state

    console.log(isFormSubmitted)
    console.log(firstName)
    console.log(lastName)
    return (
      <div className="bg-container">
        <div className="form-bg-container">
          <h1 className="main-heading">Registration</h1>
          {isFormSubmitted
            ? this.renderSubmitForm()
            : this.renderResponseForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
