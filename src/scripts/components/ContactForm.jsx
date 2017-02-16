// ContactForm.jsx

class ContactForm extends React.Component {

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
            <div 
              className="g-recaptcha" 
              data-sitekey="6LeAxRUUAAAAANzTjjVyoz8ZMVQHhX20-PwIwLl5">
            </div>
            <input
              type="submit" 
              value="Send"
            />
          </form>
        </div>
      </div>
    )
  }
}
