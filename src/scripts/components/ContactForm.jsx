// ContactForm.jsx

import React from 'react';
import ReactDOM from 'react-dom';

// The ContactForm component goes inside the MoreInfo component
class ContactForm extends React.Component {

  constructor() {
    super();
    this.state = {
      messageIsValid: false,
      nameIsValid: false,
      emailIsValid: false,
      reCaptchaIsValid: false,
    }
  }

  componentDidMount() {
    // Map global function pointed to by grecaptcha data-callback
    // attribute to the handleReCaptcha method in this React component
    window.handleReCaptcha = this.handleReCaptcha.bind(this);
  }

  componentWillReceiveProps() {
    grecaptcha.render(ReactDOM
    .findDOMNode(this.refs.recaptchaTarget),
    {sitekey: '6LeAxRUUAAAAANzTjjVyoz8ZMVQHhX20-PwIwLl5',
    callback: 'handleReCaptcha'});
  }

  handleReCaptcha() {
    this.setState({reCaptchaIsValid: true});
  }

  componentWillUnmount() {
    window.handleReCaptcha = null;
  }

  render() {

    const submitEnabled = (
      this.state.messageIsValid
      && this.state.nameIsValid
      && this.state.emailIsValid
      && this.state.reCaptchaIsValid
    );

    return(
      <div className='contact-body' ref='contact-form'>
        <h1 id="contact" className='contact-header'>Contact</h1>
        <h3 className='contact-subheader'>
          biancadanforth at gmail dot com
        </h3>
        <h4 className='contact-subsubheader'>or</h4>
        <div className = 'contact-form-wrapper'>
          <form 
            className='contact-form'
            action=
            'https://api.formbucket.com/f/buk_wGepCB3HOpSpWK9zrUBcYM5e' 
            method='post'>
            <label className='contact-form-label'>First and Last Name
              <input 
                className='contact-form-input'
                type='text' 
                name='Name' 
                ref='name'
                placeholder='Enter your full name here.' 
                required
                onKeyUp={ () => this.setState({nameIsValid: this.refs.name.checkValidity()}) }
              />
            </label>
            <label className="contact-form-label">E-mail
              <input
                className="contact-form-input"
                type="email"
                name="E-mail"
                ref="email"
                placeholder="Enter your email address here."
                required
                onKeyUp={ () => this.setState({emailIsValid: this.refs.email.checkValidity()}) }
              />
            </label>
            <label className='contact-form-label textarea-label'>
              Message
              <textarea 
                className='contact-form-textarea'
                name='Message' 
                placeholder="Enter your message here."
                required
                ref='message'
                onKeyUp={ () => this.setState({messageIsValid: this.refs.message.checkValidity()}) }>
              </textarea>
            </label>
            <div className="grecaptcha" ref="recaptchaTarget" />
            <input
              className="contact-form-input"
              type="submit"
              value="Send"
              disabled={!submitEnabled}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm;
