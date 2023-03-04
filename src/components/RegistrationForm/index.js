import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isFormSubmit: false,
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({
        firstNameError: true,
        lastNameError: true,
      })
    } else if (firstName === '') {
      this.setState({firstNameError: true})
    } else if (lastName === '') {
      this.setState({lastNameError: true})
    } else {
      this.setState(prevState => ({isFormSubmit: !prevState.isFormSubmit}))
    }
  }

  submitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmit: !prevState.isFormSubmit,
      firstNameError: '',
      lastNameError: '',
      firstName: '',
      lastName: '',
    }))
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValidFirstName = firstName === ''
    this.setState({firstNameError: isValidFirstName})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidLastName = lastName === ''
    this.setState({lastNameError: isValidLastName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstNameInput = () => {
    const {firstName, firstNameError} = this.state
    const className = firstNameError ? 'name-input error-input' : 'name-input'

    return (
      <div className="input-container">
        <label className="label-name" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  renderLastNameInput = () => {
    const {lastName, lastNameError} = this.state
    const className = lastNameError ? 'name-input error-input' : 'name-input'

    return (
      <div className="input-container">
        <label className="label-name" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  render() {
    const {firstNameError, lastNameError, isFormSubmit} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration Form</h1>
        {isFormSubmit ? (
          <div className="submit-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="submit-name">Submitted Successfully</p>
            <button
              type="button"
              className="submit-response-btn"
              onClick={this.submitAnotherResponse}
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form onSubmit={this.onSubmitDetails} className="form-container">
            {this.renderFirstNameInput()}
            {firstNameError && <p className="error-message">Required</p>}

            {this.renderLastNameInput()}
            {lastNameError && <p className="error-message">Required</p>}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
