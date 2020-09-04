// PriceTracker.jsx

import React from 'react';

class PriceTracker extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>Price Tracker</h1>
            <h3 className='project-subsubheader'>
              Front-End & Browser Extension Development
            </h3>
            <div className='project-hero-wrapper'>
              <div className='glamour-shot-wrapper'>
                <a
                  href='https://github.com/mozilla/price-tracker'
                  title='Go to project'
                  target='_blank'
                  aria-label='Go to project'>
                  <img 
                    className='wrap-up' 
                    src='/images/originals/price-tracker-glamour.png' 
                    alt='Final user interface'
                  />
                </a>
                <a
                  className='button-wrapper'
                  href='https://github.com/mozilla/price-tracker' 
                  target='_blank' 
                  aria-label='Go to project'>
                  <button className='project-button'>
                    Go to project
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
                  The goal of this project was to ship a novel e-commerce product in Firefox by Cyber Monday.
                </p>
                <p className='project-overview-description'>
                  <a href="https://www.youtube.com/watch?v=UpRLjTQmkW4" target="_blank">Price Wise</a>, later renamed Price Tracker, is a shopping assistant that helps users find the best time to buy products they are interested in.
                </p>
                <p className='project-overview-description'>
                  We managed to ship the product two weeks early, and it was featured in several press articles at the time, including <a href="https://www.nytimes.com/2018/11/13/smarter-living/how-to-tell-if-black-friday-deals-are-worth-buying.html" target="_blank">The New York Times</a>, <a href="https://techcrunch.com/2018/11/12/firefoxs-newest-test-pilot-experiments-help-you-track-prices-and-email-links/" target="_blank">Tech Crunch</a> and <a href="https://venturebeat.com/2018/11/12/firefox-debuts-experimental-price-tracking-feature-for-consumers/" target="_blank">Venture Beat</a>.
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                 <p className='project-overview-description'>
                  Price Tracker is a browser extension with some extra privileges to enable us to record <a href="https://github.com/mozilla/price-tracker/blob/master/docs/METRICS.md" target="_blank">telemetry</a> using Firefox's data infrastructure.
                </p>
                <p className='project-overview-description'>
                  The source files are written with React and are transpiled and bundled using Webpack.
                </p>
                <p className='project-overview-description'>
                  Product information is extracted from web content using a machine learning model developed with <a href="https://mozilla.github.io/fathom/intro.html#" target="_blank">Fathom</a>.
                </p>
                <p className='project-overview-description'>
                  CircleCI was used to run tests and deploy new releases of the extension.
                </p>
                <p className='project-overview-description'>
                I completed this work along with one other engineer and a small, cross-functional team.
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
                  src='/images/price-tracker-gather-information.png' 
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
                <img 
                  className='project-thumbnail' 
                  src='/images/price-tracker-prototype.png' 
                  alt='Photoshop mock-up of page'
                />
                <div className='process-description'>
                  <p className='project-description'>
                    We used Open Graph meta tags as our initial approach to identify products on web pages. Unfortunately, we soon found out that this method relied on widespread adoption by e-commerce merchants, and we were hard-pressed to find any other merchants that used these tags outside of Crate and Barrel.
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
                  src='/images/price-tracker-development.png'
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
                    href='https://github.com/mozilla/price-tracker'
                    title='Go to project'
                    target='_blank' 
                    aria-label='Go to project'>
                    <img 
                      className='wrap-up' 
                      src='/images/price-tracker-glamour.png'
                      alt='Final user interface'
                    />
                  </a>
                  <a
                    className='button-wrapper'
                    href='https://github.com/mozilla/price-tracker' 
                    target='_blank' 
                    aria-label='Go to project'>
                    <button className='project-button'>Go to project</button>
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

export default PriceTracker;
