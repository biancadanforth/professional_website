// EmailSignUp.jsx

import React from 'react';

const fluidGridCodepen = "<iframe height='400' scrolling='no' title='Fluid Grid' src='//codepen.io/biancadanforth/embed/wWLGRK/?height=400&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/biancadanforth/pen/wWLGRK/'>Fluid Grid</a> by biancadanforth (<a href='http://codepen.io/biancadanforth'>@biancadanforth</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>";

class EmailSignUp extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>E-mail Sign-Up</h1>
            <h3 className='project-subsubheader'>
              Front-End Development
            </h3>
            <div className='project-hero-wrapper'>
              <div className='glamour-shot-wrapper'>
                <a
                  href='/work/e-mail-sign-up/live'
                  title='See it live'
                  target='_blank'
                  aria-label='Go to live site'>
                  <img 
                    className='wrap-up' 
                    src='/images/e-mail-sign-up-glamour.png' 
                    alt='Final design on different devices'
                  />
                </a>
                <a
                  className='button-wrapper'
                  href='/work/e-mail-sign-up/live' 
                  target='_blank' 
                  aria-label='Go to live site'>
                  <button className='project-button'>
                    See it live
                  </button>
                </a>
              </div>
              <div className='project-overview-wrapper'>
                <h2 className='project-overview-header'>
                  Overview
                </h2>
                <h4 className='project-overview-subheader'>
                  Project goals
                </h4>
                <p className='project-overview-description'>
                  My goal was to make a static webpage based on a provided Photoshop mock-up.
                </p>
                <p className='project-overview-description'>
                  This was an extra credit project for a web design course I took from Skillcrush.com.
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                 <p className='project-overview-description'>
                  This page is written in HTML5 and CSS3.
                </p>
                <p className='project-overview-description'>
                  I used a modified fluid grid framework along with CSS3 Flexbox to layout elements on the page.
                </p>
                <p className='project-overview-description'>
                  There is no back-end component for the forms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='secondary'>
          <h1 className='project-header'>Process</h1>
          <div className='work-wrapper'>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Gather Information</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/e-mail-sign-up-gather-information.png' 
                  alt='Photoshop mock-up of page'
                />
                <div className='process-description'>
                  <p className='project-description'>
                     The first thing I did was organize the layers in Photoshop into groups that would mirror the major HTML container elements on the page.
                  </p>
                  <p className='project-description'>
                    I then identified all of the assets to extract from the mock-up. For example, I needed the Wisdom Script font and the background pattern image.
                  </p>
                  <p className='project-description'>
                    <strong>I learned that</strong> style guides are very handy, and that there's a lot a designer can do to make sure their design is not lost in translation. For example, this mock-up did not tell me what the buttons should look like in hover or pressed states.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Prototype</h2>
              <div className='project'>
                <div className='codepen-embed'dangerouslySetInnerHTML={{__html: fluidGridCodepen}} />
                <div className='process-description'>
                  <p className='project-description'>
                    Since this was my first foray into front-end development, I had to research what approach to use to layout the page in CSS.
                  </p>
                  <p className='project-description'>
                    I did not want to use any third-party frameworks (Bootstrap, Foundation, Skeleton, etc.), since I wanted to make sure I was comfortable working in pure CSS first.
                  </p>
                  <p className='project-description'>
                    I experimented with a fluid grid approach on Codepen that used <code>float</code> and percentage-based widths to adjust the size of content.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Development</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/e-mail-sign-up-development.jpg'
                  alt='Excerpt of final CSS' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    While floating left and right can get the job done, there can be many unexpected behaviors and display issues associated with floated elements.
                  </p>
                  <p className='project-description'>
                    Though it wasn't covered in the course, I came across a very useful new alternative to <code>float</code> released in CSS3 called Flexbox. After completing an excellent tutorial called Flexbox Froggy, I decided to use it.
                  </p>
                  <p className='project-description'>
                    Once I had the structure planned out, I had to put it all together, linking the assets, establishing layout breakpoints and filling in the gaps for information that wasn't provided, like placeholder text styles in the form input fields.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Final Product</h2>
              <div className='project'>
                <div className='project-glamour-shot-wrapper'>
                  <a
                    href='/work/e-mail-sign-up/live'
                    title='See it live'
                    target='_blank' 
                    aria-label='Go to live site'>
                    <img 
                      className='wrap-up' 
                      src='/images/e-mail-sign-up-glamour.png'
                      alt='Final design on different devices'
                    />
                  </a>
                  <a
                    className='button-wrapper'
                    href='/work/e-mail-sign-up/live' 
                    target='_blank' 
                    aria-label='See it live'>
                    <button className='project-button'>See it live</button>
                  </a>
                </div>
                <div className='process-description'>
                  <p className='project-description'>
                    Since this was my first web development project, I learned a lot about the myriad approaches that I could take. Each developer has their own process, and my own began to form and evolve.
                  </p>
                  <p className='project-description'>
                    I also started to get a sense for just how much can be done with HTML and CSS on their own (i.e. without JavaScript). For example, I made the ribbon for the tagline at the top of the page with CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default EmailSignUp;
