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
                  The goal of this project was to engineer and build a science exhibit based on a visual design and materials palette.
                </p>
                <p>
                  I was the principle engineer, but I received mentorship from a senior mechanical and electrical engineer.
                </p>
                <h4 className="overview-header">Tools and Methods</h4>
                 <p>
                  I made a 3D CAD (Computer-Aided Design) model and production drawings of the exhibit and all its subassemblies in Autodesk Inventor.
                </p>
                <p>
                  While most parts were fabricated by outside vendors or our in-house woodworker, I also made and modified parts using many traditional and CNC (computer-numerical control) manufacturing processes in the Exploratorium's machine shop.
                </p>
                <p>
                  At the time of publishing the drawing linked here, my name was Bianca Morales.
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
                  <p className="project-description">
                    The challenge for this exhibit was that, unlike many exhibits that the museum has produced for other institutions, we had never built anything like it before. I had to figure out, from scratch, how to reproduce the phenomenon.
                  </p>
                  <p className="project-description">
                    I dug up as much information as I could about Ferrofluid, the phenomena and the electrical and physical requirements I would need to meet to lay the groundwork for future experiments.
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
                    After gleaning what I could of how others had reproduced the phenomenon, I knew there was an electromagnet placed directly underneath the sculpture, but I needed a way to power them with a crank as the input.
                  </p>
                  <p className="project-description">
                    I consulted with other engineers and sketched out some ideas on paper. The two leading options were to connect the hand crank mechanically to a generator or to add a microprocessor to digitally control how much current went to the electromagnets.
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
                    The critical piece of information to decide between either option was how strong a magnetic field was needed. A hand crank generator is much more limited.
                  </p>
                  <p className="project-description">
                    Using a variable power supply and found materials, I set up a proof-of-concept and was able to reproduce the phenomenon and measure exactly how strong a magnetic field (and how much power) was needed for a given coil.
                  </p>
                  <p className="project-description">
                    This test showed that the mechanical generator solution would be inadequate, so I moved forward with the digital solution.
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
                    Finally, I had to assemble and test the exhibit. This is the final assembly of one of three hand cranks (handle not shown), along with a custom jig I made. The encoder connects to a microprocessor inside the exhibit cabinet.
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
                    I learned how interdependent a product's visual and interaction design are with its engineering design. That is why now, I have decided to focus on both design and development, not just one or the other. I believe being a good designer makes me a better engineer, and being a good engineer makes me a better designer.
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
