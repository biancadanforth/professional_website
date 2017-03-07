// FerrofluidPool.jsx

import React from 'react';

class FerrofluidPool extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>Ferrofluid Pool</h1>
            <h3 className='project-subsubheader'>Engineering Design | Production</h3>
            <div className='project-hero-wrapper'>
              <div className='glamour-shot-wrapper'>
                <a
                  className='wrap-up'
                  href='/work/ferrofluid-pool/ferrofluid-pool-final-drawing.pdf'
                  target='_blank'
                  title='View final assembly drawing' 
                  aria-label='See final drawing'>
                  <img 
                    className='portrait' 
                    src='/images/ferrofluid-pool-glamour.png' 
                    alt='Final design'
                  />
                </a>
                <a
                  className='button-wrapper'
                  href='/work/ferrofluid-pool/ferrofluid-pool-final-drawing.pdf' 
                  target='_blank' 
                  aria-label='See final drawing'>
                  <button className='project-button'>See final drawing</button>
                </a>
              </div>
              <div className='project-overview-wrapper'>
                <h2 className='project-overview-header'>Overview</h2>
                <h4 className='project-overview-subheader'>Project goals</h4>
                <p className='project-overview-description'>
                  The goal of this project was to engineer and build a science exhibit based on a visual design and materials palette.
                </p>
                <p className='project-overview-description'>
                  I was the principal engineer, but I received mentorship from a senior mechanical and electrical engineer.
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                 <p className='project-overview-description'>
                  I made a 3D CAD model and production drawings for the exhibit in Autodesk Inventor.
                </p>
                <p className='project-overview-description'>
                  While most parts were produced by outside vendors, I made and modified some parts myself using a number of traditional and CNC (computer numerical control) manufacturing processes.
                </p>
                <p className='project-overview-description'>
                  At the time of this project, my name was Bianca Morales.
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
                  src='/images/ferrofluid-pool-gather-information.jpg'
                  alt='Industrial design requirements for the exhibit' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I received a preliminary design guide with outside dimensions, materials and finishes from an industrial design firm.
                  </p>
                  <p className='project-description'>
                    Unlike many exhibits that the Exploratorium has produced in the past, we had never built anything like this one before. I had to figure out from scratch how to reproduce the phenomenon.
                  </p>
                  <p className='project-description'>
                    I dug up as much information as I could about ferrofluid, the phenomenon and the electrical requirements I would need to lay the groundwork for future experiments.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Ideation</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/ferrofluid-pool-ideation.jpg' 
                  alt='Sketching out solutions' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    After some research, I knew there was an electromagnet placed directly underneath the sculpture, but I needed a way to magnetize them with a crank as the input.
                  </p>
                  <p className='project-description'>
                    I consulted with other engineers and sketched out some ideas on paper. One option was to connect the hand crank mechanically to a generator. The other option was to use a sensor called a rotary encoder and a microcontroller.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Prototype</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/ferrofluid-pool-prototype.jpg' 
                  alt='Early proof-of-concept to magnetize sculptures' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    To decide which option would work best, I needed to know how strong a magnetic field was needed. A hand crank generator is much more limited.
                  </p>
                  <p className='project-description'>
                    Using a variable power supply and found materials, I set up a proof-of-concept and calculated how strong the field needed to be for a given coil.
                  </p>
                  <p className='project-description'>
                    This test showed that the mechanical solution would be inadequate, so I moved forward with the digital solution.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Development</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/ferrofluid-pool-development.jpg' 
                  alt='The hand crank subassembly'/>
                <div className='process-description'>
                  <p className='project-description'>
                    After figuring out the technical details, I had to finalize production drawings and either get parts made outside or make them myself.
                  </p>
                  <p className='project-description'>
                    Finally, I had to assemble and test the exhibit. I made the subassemblies first, like the three hand cranks. After the subassemblies were ready, they were integrated into the larger exhibit.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Final Product</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/ferrofluid-pool-final-product.jpg' 
                  alt='Final product'/>
                <div className='process-description'>
                  <p className='project-description'>
                    I made all or part of nearly 10 exhibits in my years at the Exploratorium, and this one is by far my favorite.
                  </p>
                  <p className='project-description'>
                    I learned how interdependent a product's visual and interaction design are with its engineering design. That is why now, I focus on both web design and development.
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

export default FerrofluidPool;
