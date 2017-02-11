// ContactForm.jsx

class ContactForm extends React.Component {
  render() {
    return(
      <div className="contact-body">
        <h2>Say Hello!</h2>
        <h3>biancadanforth at gmail dot com</h3>
        <h4>or</h4>
        <div className = "form-wrapper">
          <form 
            action="https://formspree.io/biancadanforth@gmail.com" 
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
              onClick={() => { 
                this.props.onFormSubmit();
                // Thank You message goes away after a certain amount of time
                setTimeout(() => this.props.onFormSubmit(), 10000);
                } 
              }
            />
            {/* By default, after submitting a form the user is shown the Formspree "Thank You" page. You can provide an alternative URL for that page. */}
            <input 
              type="hidden" 
              name="_next" 
              value="#thanks" 
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
              value="" 
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
