// FerrofluidPool.jsx

class FerrofluidPool extends React.Component {
  render() {
    return(
      <div>
        <section className="primary">
          <div className="primary-wrapper">
            <h1>Ferrofluid Pool</h1>
            <h3>Engineering Design | Production</h3>
            <div className="project-hero-wrapper">
              <a 
                className="project-thumbnail wrap-up"
                href="/work/ferrofluid-pool/final-drawing.pdf" 
                target="_blank"
                title="View final assembly drawing" 
                aria-label="Go to live site"
              >
                <img 
                  className="wrap-up" 
                  src="../../images/ferrofluid-pool-glamour.png" 
                  alt="Final design"
                />
              </a>
              <div>
                <h2>Overview</h2>
                <h4 className="overview-header">Project goals</h4>
                <p>
                  This was an exhibit that I engineered and built from a visual design and materials palette, with mentorship from a senior mechanical and electrical engineer.
                </p>
                <p>
                  Users can learn about magnetism first-hand by observing how ferrofluid, an oil-based suspension of microscopic iron particles, follows the magnetic field lines of each sculpture as the crank is turned.
                </p>
                <h4 className="overview-header">Tools and Methods</h4>
                 <p>
                  The hand crank uses a rotary encoder and microprocessor to relate the crank's angular velocity to electrical current. The current is then input into an electromagnet located directly underneath each sculpture, generating the magnetic field.
                </p>
                <p>
                  At the time of publishing the final drawing linked here, my name was Bianca Morales.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="secondary">
          <h1>Process</h1>
          <div className="work-wrapper">
            <div className="project-wrapper">
              <h2>Gather Information</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/ferrofluid-pool-gather-information.png"
                  alt="Industrial design requirements for the exhibit" 
                />
                <div className="process-description">
                  <p className="project-description">
                    I received a preliminary design guide with outside dimensions, materials and finishes from an industrial design firm. 
                  </p>
                  <p className="project-description">
                    It was my job to make the exhibit a reality. The first thing to do was to figure out the constraints, and if there was any reason why the engineering design would require a change in the visual and/or interaction design.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Ideation</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/" 
                  alt="Sketching out solutions" 
                />
                <div className="process-description">
                  <p className="project-description">
                    I set about coming up with as many ways as possible to generate the magnetic field for each sculpture by turning a crank.
                  </p>
                  <p className="project-description">
                    The two leading options were to connect the hand crank mechanically to a generator or to add a microprocessor to digitally control how much current went to the electromagnets underneath each sculpture.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Prototype</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/ferrofluid-pool-prototype.jpg" 
                  alt="Early proof-of-concept to magnetize sculptures" 
                />
                <div className="process-description">
                  <p className="project-description">
                    After prototyping both solutions, I found that it would not be possible for a person to turn the hand crank fast enough to output the current required to magnetize the sculptures, but the digital control option, shown here, would work.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Development</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/ferrofluid-pool-development.jpg" 
                  alt="The hand crank subassembly" 
                />
                <div className="process-description">
                  <p className="project-description">
                    After figuring out the technical details, I had to finalize production drawings and either get parts made outside or make them myself.
                  </p>
                  <p className="project-description">
                    Finally, I got to do the fun part of actually assembling and testing the exhibit. This is the final assembly of one of three hand cranks (handle not shown), along with a custom jig I made. The encoder connects to a microprocessor inside the exhibit cabinet.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Final Product</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/ferrofluid-pool.jpg" 
                  alt="Final product" 
                />
                <div className="process-description">
                  <p className="project-description">
                    I made all or part of nearly 10 exhibits in my years at the Exploratorium, and this one is by far my favorite.
                  </p>
                  <p className="project-description">
                    I learned how interdependent a product's visual and interaction design are with its engineering design. That is why now, I have focused on web design <span>and</span> development, not just one or the other.
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
