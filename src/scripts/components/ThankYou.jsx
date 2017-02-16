// ThankYou.jsx

class ThankYou extends React.Component {

  constructor() {
    super();
    this.state = {
      countDown: 5,
    }
  }

  componentDidMount() {

    let interval = setInterval(() => {
      this.setState({countDown: (this.state.countDown-1)})
      if (this.state.countDown <= 1) {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(() => window.location = "/#/more-info"
      , 5000);
  }

  render() {
    return(
      <div 
        className="contact-body thank-you-wrapper"
      >
        <div className="thank-you">
          <h2>Thank You!</h2>
          <h3>Your message has been sent.</h3>
          <p>Now, where were we?</p>
          <h4>Redirecting in...<span>{this.state.countDown}</span></h4>
        </div>
      </div>
    )
  }
}
