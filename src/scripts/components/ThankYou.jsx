// ThankYou.jsx

import React from 'react';
let timer;
let interval;

class ThankYou extends React.Component {

  constructor() {
    super();
    this.state = {
      countDown: 5,
    }
  }

  componentDidMount() {

    interval = setInterval(() => {
      this.setState({countDown: (this.state.countDown-1)})
      if (this.state.countDown <= 1) {
        clearInterval(interval);
      }
    }, 1000);

    timer = setTimeout(() => window.location = '/#/more-info', 5000);
  }

  componentWillUnmount() {
    window.clearTimeout(timer);
    window.clearInterval(interval);
  }

  render() {
    return(
      <div className='contact-body thank-you-wrapper'>
        <div className='thank-you'>
          <h2 className='thank-you-header'>Thank You!</h2>
          <h3 className='thank-you-subheader'>Your message has been sent.</h3>
          <p className='thank-you-paragraph'>Now, where were we?</p>
          <h4 className='thank-you-subsubheader'>Redirecting in...<span>{this.state.countDown}</span></h4>
        </div>
      </div>
    )
  }
}

export default ThankYou;
