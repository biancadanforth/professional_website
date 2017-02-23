// ContactForm.jsx

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
    // map global function pointed to by grecaptcha data-callback attribute to the handleReCaptcha method in this React component
    window.handleReCaptcha = this.handleReCaptcha.bind(this);
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
              data-sitekey="6LeAxRUUAAAAANzTjjVyoz8ZMVQHhX20-PwIwLl5"
              ref="recaptcha"
              data-callback="handleReCaptcha">
            </div>
            <input
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
