// ExtensionStorage.jsx

import React from 'react';

class ExtensionStorage extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>Extension Storage</h1>
            <h3 className='project-subsubheader'>
              Browser Development | Developer Tools
            </h3>
            <div className='project-hero-wrapper'>
              <div className='glamour-shot-wrapper'>
                <a
                  href='https://bugzilla.mozilla.org/show_bug.cgi?id=1542035'
                  title='Go to project'
                  target='_blank'
                  aria-label='Go to project'>
                  <img 
                    className='wrap-up' 
                    src='/images/originals/extension-storage-glamour.png' 
                    alt='The Extension Storage actor in Firefox Developer Tools'
                  />
                </a>
                <a
                  className='button-wrapper'
                  href='https://bugzilla.mozilla.org/show_bug.cgi?id=1542035' 
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
                  The goal of this project was to add support in Firefox's Developer Tools to read and write to browser extension <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/local" target="_blank">local storage</a>.
                </p>
                <p className='project-overview-description'>
                  Prior to this work, there was no DevTools support for extension storage of any kind. This was a feature extension developers had been requesting for <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1292234" target="_blank">several years</a>.
                </p>
                <p className='project-overview-description'>
                  While this project initially started as part of my efforts to improve Firefox's experiments infrastructure, the vast majority of the work was completed as a side project in my spare time.
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                <p className='project-overview-description'>
                  This work was in Javascript, where unit, integration and functional tests used Mozilla's <a href="https://developer.mozilla.org/en-US/docs/Mozilla/QA/Writing_xpcshell-based_unit_tests" target="_blank">XPCShell</a> and <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Mochitest" target="_blank">Mochitest</a> frameworks.
                </p>
                <p className='project-overview-description'>
                I completed this work with weekly mentorship from an engineer on the WebExtensions team.
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
                    There was a research spike at the beginning as I had to orient myself with the DevTools code base, which has evolved separately from Firefox and has its own architecture and terminology.
                  </p>
                  <p className='project-description'>
                    Specifically, Firefox's Developer Tools has a client-server architecture where entities called "actors" on the server exchange JSON packets with the client using the <a href="https://firefox-source-docs.mozilla.org/devtools/backend/protocol.html" target="_blank">Remote Debugging Protocol</a>.
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
                    I had to create a new Extension Storage actor that interfaced with the IndexedDB storage back-end used by the extension <code>storage.local</code> API and ensure that it was loaded and populated correctly in the client.
                  </p>
                  <p className='project-description'>
                  </p>
                  <p className='project-description'>
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
                  </p>
                  <blockquote>
                    "I think this is the 11th Test Pilot launch I've been on, and by far it has been the smoothest engineering process we've had."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ExtensionStorage;
