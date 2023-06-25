// Home.jsx

import React from 'react';

class Home extends React.Component {

  componentDidMount() {

      //PROGRESSIVE IMAGE LOADING
      var placeholder = document
        .querySelector('.welcome-placeholder');
      var small = placeholder.querySelector('.img-small');
  
      // 1. load small image and show it
      var imgSmall = new Image();
      imgSmall.src = small.src;
      imgSmall.onload = function () {
        small.classList.add('loaded');
        placeholder.classList.add('img-small-loaded');
      };
  
      // 2. load large image
      var imgLarge = new Image();
      imgLarge.src = placeholder
        .getAttribute('data-large');
      imgLarge.classList.add('welcome-img'); 
      imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
      };
      placeholder.appendChild(imgLarge);
  }

  render() {
    return(
      <div className='home-page-wrapper'>
        <section className='primary'>
          <div className='primary-wrapper'>
            <div
              className='welcome-placeholder'
              data-large='images/biancaWeld.jpg'
              ref='placeholder'>
              <img 
                className='welcome-img img-small' 
                src='images/biancaWeldSmall.jpg' 
                alt='Bianca Danforth' 
              />
              <div className="welcome-spaceholder"></div>
              <div className='welcome-message-wrapper'>
                <h2 className='welcome-message-header'>Software engineer & former mechanical engineer</h2>
                <a href='#more-info'><button className='welcome-button'>Let's work together</button></a>
                <p className='welcome-message-paragraph'><a className='welcome-message-link' target='_blank' href='/work/bianca-danforth-resume.pdf'>View my resume</a></p>
              </div>
            </div>
          </div>
        </section>
        <section className='secondary'>
          <h1>Software</h1>
          <div className='home-work-wrapper'>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2021 - 2023 | Mozilla</h4>
                <h2>Subscription Platform</h2>
                <h3>Technologies: Typescript, Node, Hapi, Stripe, GCP, CircleCI, Sentry, MySQL, Grafana, Docker, Redis, Looker</h3>
                <p className='home-project-description'>
                  The central payments and billing infrastructure for Mozilla's premium service products. See&nbsp;
                  <a 
                    className='home-project-link' 
                    href='https://github.com/mozilla/fxa'
                    title='Go to repository'>
                      repository
                  </a>
                  .
                </p>
              </div>
              <img 
                className='home-project-image'
                src='images/subscription-platform-checkout-screen.png'
                alt='The new user checkout screen for the Subscription Platform'
              />
            </div>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2020 | Mozilla</h4>
                <h2>Firefox Password Manager</h2>
                <h3>Technologies: JavaScript, web browser internals, Firefox profiler, machine learning</h3>
                  <p className='home-project-description'>
                  The built-in password manager for Firefox Desktop. See&nbsp;
                  <a 
                    className='home-project-link' 
                    href='https://searchfox.org/mozilla-central/source/toolkit/components/passwordmgr/'
                    title='Go to source code'>
                      repository
                  </a>
                  .
                </p>
              </div>
              <img 
                className='home-project-image'
                src='images/firefox-autofill.png'
                alt='The password generation autofill feature in Firefox'
              />
            </div>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2019 | Mozilla</h4>
                <h2>Price Tracker</h2>
                <h3>Technologies: JavaScript, Web Extensions, React, Redux, machine learning</h3>
                <p className='home-project-description'>
                  A shopping assistant that tracks price changes and helps users find the best time to buy. See&nbsp;
                  <a 
                    className='home-project-link' 
                    href='https://github.com/mozilla/price-tracker'
                    title='Go to repository'>
                      repository
                  </a>
                  .
                </p>
              </div>
              <img 
                className='home-project-image'
                src='images/price-tracker.jpg'
                alt='The Price Tracker shopping assistant in action'
              />
            </div>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2017 | Mozilla</h4>
                <h2>Lightbeam</h2>
                <h3>Technologies: JavaScript, Web Extensions, Local Storage, D3</h3>
                <p className='home-project-description'>
                  A privacy tool that visualizes third party tracking requests while browsing the web. See&nbsp;
                  <a 
                    className='home-project-link' 
                    href='https://github.com/mozilla/lightbeam-we'
                    title='Go to repository'>
                      repository
                  </a>
                  .
                </p>
              </div>
              <img 
                className='home-project-image'
                src='images/lightbeam.png'
                alt='The Lightbeam web extension'
              />
            </div>
          </div>
        </section>
        <section className='tertiary'>
          <h1>Hardware</h1>
          <div className='home-work-wrapper'>            
            <div className='home-work-wrapper'>
              <div className='home-project'>
                <div className='home-project-details'>
                  <h4>2015 | Exploratorium</h4>
                  <h2>Ferrofluid Pool</h2>
                  <h3>Tools: Inventor, Mill, Lathe, Router</h3>
                  <p className='home-project-description'>
                    A science exhibit where visitors can turn a hand crank to watch ferrofluid rise up different sculptures.
                  </p>
                </div>
                <img 
                  className='home-project-image'
                  src='images/ferrofluid-pool.jpg'
                  alt='Ferrofluid Pool science exhibit' />
              </div>
              <div className='home-project'>
                <div className='home-project-details'>
                  <h4>2012 | Stanford University</h4>
                  <h2>Twist</h2>
                  <h3>Tools: SolidWorks, TIG Machine, Tube Bender</h3>
                  <p className='home-project-description'>
                   An ergonomic chair, inspired by M.C. Escher, made of arc-welded steel and lycra.
                  </p>
                </div>
                <img 
                  className='home-project-image'
                  src='images/twist.jpg'
                  alt='Base of Twist chair'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
