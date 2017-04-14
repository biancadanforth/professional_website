// Lightbeam.jsx

import React from 'react';

class Lightbeam extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>Lightbeam</h1>
            <h3 className='project-subsubheader'>UX Design | Visual Design | Front-End Development</h3>
            <div className='project-hero-wrapper'>
              <div className='glamour-shot-wrapper'>
                <a
                  href='/work/lightbeam/live'
                  title='See it live'
                  target='_blank' 
                  aria-label='Go to live site'>
                  <img 
                    className= 'wrap-up' 
                    src='/images/lightbeam-glamour.png' 
                    alt='Final design on different devices'
                  />
                </a>
                <a
                  className='button-wrapper'
                  href='/work/lightbeam/live' 
                  target='_blank' 
                  aria-label='Go to live site'>
                  <button className='project-button'>See it live</button>
                </a>
              </div>
              <div className='project-overview-wrapper'>
                <h2 className='project-overview-header'>Overview</h2>
                <h4 className='project-overview-subheader'>Project goals</h4>
                <p className='project-overview-description'>
                  I was asked to create a visualization prototype for a Mozilla Firefox privacy and security add-on called <a target="_blank" href="https://www.mozilla.org/en-US/lightbeam/">Lightbeam</a>.
                </p>
                <p className='project-overview-description'>
                  This mini project was part of an application for an open-source <a target="_blank" href="https://www.gnome.org/outreachy/">Outreachy</a> internship. It was built from scratch in 2 days.
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                 <p className='project-overview-description'>
                  I used Inkscape for the design. I used pure JavaScript ES6, HTML5 and CSS3 for the development.
                </p>
                <p className='project-overview-description'>
                  I completed this work independently with feedback from a mentor at Mozilla.
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
                    src='/images/lightbeam-gather-information.png' 
                    alt='Researching the current Lightbeam add-on and similar browser extensions' 
                  />
                  <figcaption>Source: Mozilla </figcaption>
                </figure>
                <div className='process-description'>
                  <p className='project-description'>
                    I spent a good deal of time using the current version of Firefox's Lightbeam add-on. I also tried out a similar  privacy-oriented browser extension called Ghostery. For each one, I wrote down observations about what I liked, didn't like and felt was missing.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Ideation</h2>
              <div className='project'>
                 <figure>
                  <img 
                    src='/images/lightbeam-ideation.png' 
                    alt='One of my inspirations, a sunflower phyllotaxy' 
                  />
                  <figcaption>Source: TeXample</figcaption>
                </figure>
                <div className='process-description'>
                  <p className='project-description'>
                    Since the application is driven by a stream of data, I wanted my visualization to convey a sense of motion.
                  </p>
                  <p className='project-description'>
                    One of my inspirations came from the union of math and nature: a computer-generated phyllotaxy.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Prototype</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/lightbeam-prototype.jpg' 
                  alt="Visual prototype to show a website's linked third parties"
                />
                <div className='process-description'>
                  <p className='project-description'>
                    The final prototype resulted in a design that combined a familiar graphical element, the pie chart, with a more visually interesting nautilus shape.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Development</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/lightbeam-development.png' 
                  alt="Lightbeam's data output"
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I used the output of Firefox's current Lightbeam add-on as the input data for my visualization prototype.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Final Product</h2>
              <div className='project'>
                <div className='project-glamour-shot-wrapper'>
                  <a
                    href='/work/lightbeam/live'
                    title='See it live'
                    target='_blank' 
                    aria-label='See it live'>
                    <img 
                      className='wrap-up' 
                      src='/images/lightbeam-glamour.png' 
                      alt='Final design on different devices'
                    />
                  </a>
                  <a
                    className='button-wrapper'
                    href='/work/lightbeam/live' 
                    target='_blank' 
                    aria-label='See it live'>
                    <button className='project-button'>See it live</button>
                  </a>
                </div>
                <div className='process-description'>
                  <p className='project-description'>
                    While the final product is still a prototype, I am happy with what I came up with in the span of 2 days, and I had a lot of fun!
                  </p>
                  <p className='project-description'>
                    I learned how to fetch, manipulate and output data from a JSON file.
                  </p>
                  <p className='project-description'>
                    In a future iteration, I would like to use more advanced privacy metrics, like entropy, and try out an open-source JavaScript visualization library like D3.js.
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

export default Lightbeam;
