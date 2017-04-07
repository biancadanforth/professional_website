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
                <h2 className='welcome-message-header'>Front-end web nerd. Former mechanical engineer.</h2>
                <h3 className='welcome-message-subheader'><span className='welcome-message-span'>Tools:</span> JavaScript, Sass, Mild Steel</h3>
                <a href='#more-info'><button className='welcome-button'>Let's work together</button></a>
                <p className='welcome-message-paragraph'><a className='welcome-message-link' target='_blank' href='/work/bianca-danforth-resume.pdf'>View my resume</a></p>
              </div>
            </div>
          </div>
        </section>
        <section className='secondary'>
          <h1>Work</h1>
          <div className='home-work-wrapper'>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2016 | Self-Initiated</h4>
                <h2>To Do List</h2>
                <h3>Tools: vanilla JavaScript, HTML5, CSS5, Photoshop</h3>
                <p className='home-project-description'>
                  A single page application where users can add, edit, delete, complete, undo and filter tasks.
                </p>
              </div>
              <a 
                className='home-project-link' 
                href='#to-do-list'
                title='Go to project'>
                <img
                  className='home-project-image'
                  src='images/to-do-list.jpg'
                  alt='To Do List application'
                />
              </a>
            </div>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2017 | Self-Initiated</h4>
                <h2>Lightbeam</h2>
                <h3>Tools: vanilla JavaScript, HTML5, CSS5, Inkscape</h3>
                <p className='home-project-description'>
                  A visualization prototype for Mozilla Firefox's Lightbeam privacy add-on.
                </p>
              </div>
              <a 
                className='home-project-link' 
                href='#lightbeam'
                title='Go to project'>
                <img
                  className='home-project-image'
                  src='images/lightbeam.png'
                  alt='Lightbeam visualization prototype'
                />
              </a>
            </div>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2016 | Self-Initiated</h4>
                <h2>E-mail Sign-up</h2>
                <h3>Tools: HTML5, CSS3, Photoshop</h3>
                <p className='home-project-description'>
                  A static page where users can subscribe to a newsletter, contact, and learn more about Skillcrush.
                </p>
              </div>
              <a 
                className='home-project-link' 
                href='#e-mail-sign-up'
                title='Go to project'>
              <img 
                className='home-project-image'
                src='images/e-mail-sign-up.jpg'
                alt='E-mail Sign Up Page'
              />
              </a>
            </div>
            <div className='home-project'>
              <div className='home-project-details'>
                <h4>2017 | Self-Initiated</h4>
                <h2>React Widget</h2>
                <h3>Tools: JavaScript (React), HTML5, CSS3 (Sass)</h3>
                <p className='home-project-description'>
                  Ask me what I'm working on next!
                </p>
              </div>
              <a 
                className='home-project-link' 
                href='#more-info'
                title='Contact me!'>
              <img 
                className='home-project-image'
                src='images/next-project.png'
                alt='Contact me'
              />
              </a>
            </div>
          </div>
        </section>
        <section className='tertiary'>
          <h1>Past Projects</h1>
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
                <a 
                  className='home-project-link' 
                  href='#ferrofluid-pool'
                  title='Go to project'>
                <img 
                  className='home-project-image'
                  src='images/ferrofluid-pool.jpg'
                  alt='Ferrofluid Pool science exhibit' />
                </a>
              </div>
              <div className='home-project'>
                <div className='home-project-details'>
                  <h4>2012 | Stanford</h4>
                  <h2>Twist</h2>
                  <h3>Tools: SolidWorks, TIG Machine, Tube Bender</h3>
                  <p className='home-project-description'>
                   An ergonomic chair, inspired by M.C. Escher, made of arc-welded steel and lycra.
                  </p>
                </div>
                <a 
                  className='home-project-link' 
                  href='#twist'
                  title='Go to project'>
                  <img 
                    className='home-project-image'
                    src='images/twist.jpg'
                    alt='Base of Twist chair'
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;
