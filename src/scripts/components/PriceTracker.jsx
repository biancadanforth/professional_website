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
              Front-End & Browser Extension Development | Machine Learning
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
                  Price Tracker is a <a href="https://wiki.mozilla.org/Test_Pilot" target="_blank">Test Pilot</a> browser extension with some extra privileges to enable us to record <a href="https://github.com/mozilla/price-tracker/blob/master/docs/METRICS.md" target="_blank">telemetry</a> using Firefox's data infrastructure.
                </p>
                <p className='project-overview-description'>
                  The source files are written with React and Redux; they are transpiled and bundled using Webpack.
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
                <figure>
                  <img
                    src='/images/price-tracker-gather-information.png'
                    alt='Photoshop mock-up of page'
                  />
                  <figcaption>Source: addons.mozilla.org</figcaption>
                </figure>
                <div className='process-description'>
                  <p className='project-description'>
                    The first two months were largely explorations in the existing e-commerce space including studies led by our user researcher.
                  </p>
                  <p className='project-description'>
                    We also spent some time talking to potential external partners and building the scaffolding of the project in GitHub.
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
                    To identify products on web pages, we initially used <a href="https://ogp.me/" target="_blank">Open Graph</a>, though we soon learned it is not widely adopted by e-commerce sites.
                  </p>
                  <p className='project-description'>
                    Looking for alternatives, I spent two weeks prototyping a machine learning model.
                  </p>
                  <p className='project-description'>
                    Given the options we had available, including leveraging an external partner's APIs, the team went with my recommendation to use the model.
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
                    We met with an engineering program manager once a week to triage bugs, prioritize work and communicate out to the rest of the team.
                  </p>
                  <p className='project-description'>
                    My biggest <a href="https://github.com/mozilla/price-tracker/pulls?q=is%3Apr+author%3Abiancadanforth+is%3Aclosed" target="_blank">contributions</a> were to develop and integrate the machine learning model and instrument the extension with custom telemetry.
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
                    I'm really proud of what we accomplished on such a short timeline. As one of two engineers, I got to work on virtually every aspect of the project. Our product manager was also very impressed with our work:
                    <blockquote>
                      "I think this is the 11th Test Pilot launch I've been on, and by far it has been the smoothest engineering process we've had."
                    </blockquote>
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
