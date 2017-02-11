// ThankYou.jsx

class ThankYou extends React.Component {

  render() {
    return(
      <div 
        className="contact-body thank-you-wrapper"
        style={{ height: (this.props.thankYouHeight !== 0) ? (this.props.thankYouHeight).toString() + 'px' : 'auto'}}
      >
        <div className="thank-you">
          <h2>Thank You!</h2>
          <h3>Your message has been sent.</h3>
          <p>I will reply as swiftly as possible.</p>
        </div>
      </div>
    )
  }
}
