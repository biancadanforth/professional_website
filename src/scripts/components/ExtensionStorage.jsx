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
                I completed this work with weekly mentorship from an engineer on the WebExtensions team, <a href="https://people.mozilla.org/p/rpl" target="_blank">Luca Greco</a>. I am very grateful to him for his time and expertise.
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
                    src='/images/extension-storage-gather-information.png'
                    alt='Photoshop mock-up of page'
                  />
                  <figcaption>Source: firefox-source-docs.mozilla.org</figcaption>
                </figure>
                <div className='process-description'>
                  <p className='project-description'>
                    There was a research spike at the beginning, as I had to orient myself with the DevTools code base.
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
                  src='/images/extension-storage-prototype.png'
                  alt='Photoshop mock-up of page'
                />
                <div className='process-description'>
                  <p className='project-description'>
                    The first step was to register a new Extension Storage actor, so that it would be initialized and its methods would be called as part of the existing framework.
                  </p>
                  <p className='project-description'>
                    I also needed to make sure that I could open the IndexedDB database for a given test extension and access its data from my new actor.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Development</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/extension-storage-development.png'
                  alt='Excerpt of final CSS' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    Since this was the first storage actor for extensions as debugging targets (as opposed to web pages), there were some assumptions made by the existing storage actor framework that were broken that we had to address.
                  </p>
                  <p className='project-description'>
                    For example, web pages always have a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window" target="_blank"><code>window</code></a> that loads in a tab while extensions do not.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Final Product</h2>
              <div className='project'>
                <div className='project-glamour-shot-wrapper'>
                  <a
                    href='https://bugzilla.mozilla.org/show_bug.cgi?id=1542035'
                    title='Go to project'
                    target='_blank' 
                    aria-label='Go to project'>
                    <img 
                      className='wrap-up' 
                      src='images/extension-storage-glamour.png'
                      alt='Extension Storage in Firefox Developer Tools'
                    />
                  </a>
                  <a
                    className='button-wrapper'
                    href='https://bugzilla.mozilla.org/show_bug.cgi?id=1542035' 
                    target='_blank' 
                    aria-label='Go to project'>
                    <button className='project-button'>Go to project</button>
                  </a>
                </div>
                <div className='process-description'>
                  <p className='project-description'>
                    This was the first time I landed production code in Firefox and consequently, the first time I wrote extensive tests for my code.
                  </p>
                  <p className='project-description'>
                    The extra effort to complete this project in my free time paid off, as it not only added valuable debugging support for extension developers, but it laid the foundation for my future contributions to Firefox.
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

export default ExtensionStorage;
