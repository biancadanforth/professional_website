// ContactForm.jsx

class ContactForm extends React.Component {

  constructor() {
    super();
    this.state = {
      // disabled until all form fields have been completed
      submitDisabled: true,
      messageIsValid: false,
      nameIsValid: false,
      emailIsValid: false,
    }
  }

  componentDidUpdate() {
    this.checkForCompleteForm();
  }

  checkForCompleteForm() {
    // if every field has a value and submit button is disabled, enable the button.
    if (this.state.messageIsValid && this.state.nameIsValid && this.state.emailIsValid && this.state.submitDisabled) {
        this.setState({submitDisabled: false});
    }
    // if any of the fields don't have a value and the submit button is enabled, disable the button.
    if ( !(this.state.messageIsValid) || !(this.state.nameIsValid) || !(this.state.emailIsValid) ) {
      if (!(this.state.submitDisabled)) {
        this.setState({submitDisabled: true});
      }
    }
  }

  render() {
    return(
      <div className="contact-body" ref="contact-form">
        <h2>Say Hello!</h2>
        <h3>biancadanforth at gmail dot com</h3>
        <h4>or</h4>
        <div className = "form-wrapper">
          <form 
            action= "https://api.formbucket.com/f/buk_wGepCB3HOpSpWK9zrUBcYM5e" 
            method="post"
          >
            <label>First and Last Name
              <input 
                type="text" 
                name="Name" 
                ref="name"
                placeholder="Joe Schmoe" 
                required
                onKeyUp={ () =>
                  this.setState({nameIsValid: this.refs.name.checkValidity()
                  })
                }
              />
            </label>
            <label>E-mail
              <input 
                type="email" 
                name="E-mail"
                ref="email" 
                placeholder="joeschmoe@example.com"
                required
                onKeyUp={ () =>
                  this.setState({emailIsValid: this.refs.email.checkValidity()
                  })
                }
              />
            </label>
            <p className="note">You will receive a copy of your message at this e-mail address.</p>
            <label className="textarea-label">Message
              <textarea 
                name="Message" 
                placeholder="I'd like to hire you."
                required
                ref="message"
                onKeyUp={ () =>
                  this.setState({messageIsValid: this.refs.message.checkValidity()
                  })
                }
              >
              </textarea>
            </label>
            <div 
              className="g-recaptcha"
              ref="grecaptcha" 
              data-sitekey="6LeAxRUUAAAAANzTjjVyoz8ZMVQHhX20-PwIwLl5">
            </div>
            <input
              type="submit" 
              value="Send"
              disabled={this.state.submitDisabled}
            />
          </form>
        </div>
      </div>
    )
  }
}
