// Lightbeam.jsx

import React from 'react';

class Lightbeam extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>Lightbeam</h1>
            <h3 className='project-subsubheader'>Front-End & Browser Extension Development</h3>
            <div className='project-hero-wrapper'>
              <div className='glamour-shot-wrapper'>
                <a
                  href='https://github.com/mozilla/lightbeam-we'
                  title='Go to project'
                  target='_blank' 
                  aria-label='Go to project site'>
                  <img 
                    className= 'wrap-up' 
                    src='/images/originals/lightbeam.png'
                    alt='Final user interface'
                  />
                </a>
                <a
                  className='button-wrapper'
                  href='https://github.com/mozilla/lightbeam-we'
                  target='_blank' 
                  aria-label='Go to project site'>
                  <button className='project-button'>Go to project</button>
                </a>
              </div>
              <div className='project-overview-wrapper'>
                <h2 className='project-overview-header'>Overview</h2>
                <h4 className='project-overview-subheader'>Project goals</h4>
                <p className='project-overview-description'>
                  As an intern at Mozilla through the <a target="_blank" href="https://www.outreachy.org/">Outreachy</a> program, my project was to re-implement the popular legacy add-on, Lightbeam, as a modern browser extension.
                </p>
                <p className='project-overview-description'>
                  Lightbeam is a privacy tool that helps visualize the relationship between third party trackers and the sites users actually visit.
                </p>
                <p className='project-overview-description'>
                  This was a three-month project, from May to August 2017. Afterward, I wrote a <a target="_blank" href="https://hacks.mozilla.org/2017/10/remaking-lightbeam-as-a-browser-extension/">Mozilla HACKS blog post</a> about some of the more interesting technical details.
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                 <p className='project-overview-description'>
                  I used JavaScript (including <a target="_blank" href="https://d3js.org/">D3</a> and <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API">WebExtensions APIs</a>), HTML and CSS for the development.
                </p>
                <p className='project-overview-description'>
                  I completed this work together with another Outreachy intern and mentorship from Mozilla staff.
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
                    alt='Identifying features of the current Lightbeam add-on' 
                  />
                </figure>
                <div className='process-description'>
                  <p className='project-description'>
                    We spent a good deal of time using the legacy version of Firefox's Lightbeam add-on and talking with the add-on's previous developers.
                  </p>
                  <p className='project-description'>
                    This helped us to identify the existing feature set and what subset we would consider part of the MVP (minimum viable product).
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
                  alt="Storage experiment to compare two IndexedDB libraries: Dexie and localForage"
                />
                <div className='process-description'>
                  <p className='project-description'>
                    There were some decisions to be made regarding what technologies and libraries we would use.
                  </p>
                  <p className='project-description'>
                    For example, I did some experiments to help us choose the best <a target="_blank" href="https://github.com/mozilla/lightbeam-we/issues/13">client-side storage approach</a>. Ultimately, we decided to use IndexedDB via the Dexie library.
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
                    My contributions were primarily to the collection, processing and storage of the incoming browsing data used by the visualization.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Final Product</h2>
              <div className='project'>
                <div className='project-glamour-shot-wrapper'>
                  <a
                    href='https://github.com/mozilla/lightbeam-we'
                    title='Go to project'
                    target='_blank' 
                    aria-label='Go to project site'>
                    <img 
                      className='wrap-up' 
                      src='/images/originals/lightbeam.png'
                      alt='Final user interface'
                    />
                  </a>
                  <a
                    className='button-wrapper'
                    href='https://github.com/mozilla/lightbeam-we'
                    target='_blank' 
                    aria-label='Go to project site'>
                    <button className='project-button'>Go to project</button>
                  </a>
                </div>
                <div className='process-description'>
                  <p className='project-description'>
                    My Outreachy internship at Mozilla was a great experience.
                  </p>
                  <p className='project-description'>
                    Along with many JavaScript fundamentals (and even some advanced topics, like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank">Proxy objects</a>), I learned git and how to collaborate on an open-source project with other contributors.
                  </p>
                  <p className='project-description'>
                    In a future iteration, I would like to make some performance improvements such as capping the number of nodes in the visualization or specifying storage limits to purge the oldest data.
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
