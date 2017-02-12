// ContactForm.jsx

class ContactForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      userEmail: '',
    }
  }

  getFormAction() {
    let formAction = 'https://formspree.io/' + 'biancadanforth' + '@' + 'gmail' + '.' + 'com';
    return formAction;
  }

  updateUserEmail() {
    let emailInput = this.refs.userEmail;
    let emailAddress = emailInput.value;
    console.log(emailAddress);
    this.setState({userEmail: emailAddress});
  }

  render() {
    return(
      <div className="contact-body" ref="contact-form">
        <h2>Say Hello!</h2>
        <h3>biancadanforth at gmail dot com</h3>
        <h4>or</h4>
        <div className = "form-wrapper">
          <form 
            action= {this.getFormAction()} 
            method="post"
          >
            <label>Name
              <input 
                type="text" 
                name="Name" 
                placeholder="Joe Schmoe" 
                required 
              />
            </label>
            <label>E-mail
              <input 
                type="Email" 
                name="E-mail" 
                placeholder="joeschmoe@example.com"
                required
                ref="userEmail"
                onInput={this.updateUserEmail.bind(this)}
            />
            </label>
            <p className="note">You will receive a copy of your message at this e-mail address.</p>
            <label className="textarea-label">Message
              <textarea 
                name="Message" 
                placeholder="I'd like to hire you."
                required
              >
              </textarea>
            </label>
            <input
              type="submit" 
              value="Send"
            />
            {/* By default, after submitting a form the user is shown the Formspree "Thank You" page. You can provide an alternative URL for that page. */}
            <input 
              type="hidden" 
              name="_next" 
              value="/#/thank-you" 
            />
            {/* This value is used for the email's subject, so that you can quickly reply to submissions without having to edit the subject line each time. */}
            <input 
              type="hidden" 
              name="_subject" 
              value="Message through biancadanforth.com" 
            />
            {/* This value is used for the email's CC Field. This lets you send a copy of each submission to another email address. Use JS to update value with user's e-mail address */}
            <input 
              type="hidden" 
              name="_cc" 
              value={this.state.userEmail} 
            />
            {/* Add this "honeypot" field to avoid spam by fooling scrapers. If a value is provided, the submission will be silently ignored. The input should be hidden with CSS. */}
            <input 
              type="text" 
              name="_gotcha" 
              style={{display: "none"}} 
            />
            {/* Adding this to your form will allow for you to receive plain text versions of emails for form submissions. */}
            <input 
              type="hidden" 
              name="_format" 
              value="plain" 
            />
          </form>
        </div>
      </div>
    )
  }
}
