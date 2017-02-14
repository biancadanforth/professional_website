// Twist.jsx

class Twist extends React.Component {
  render() {
    return(
      <div>
        <section className="primary">
          <div className="primary-wrapper">
            <h1>Twist</h1>
            <h3>Visual Design | Engineering Design | Production </h3>
            <div className="project-hero-wrapper">
                <img 
                  className="project-thumbnail" 
                  src="../../images/twist.jpg" 
                  alt="Final product"
                />
              <div>
                <h2>Design Brief</h2>
                <p>
                  I designed and built this chair in an Art Studio class I took in my final quarter as a graduate student in mechanical engineering. It was featured in Stanford's alumni magazine!
                </p>
                <p>The Twist chair explores the creation of organic and dynamic forms with unlikely materials.</p>
                <h4>Developer notes</h4>
                <p>
                  The frame is made of mild steel square tubing and upholstered with leather, foam and lycra.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="secondary">
          <h1>Process</h1>
          <div className="work-wrapper">
            <div className="project">
              <h2>Gather Information</h2>
              <img 
                className="project-thumbnail" 
                src="../../images/" 
                alt="Benchmarking other to do list applications" 
              />
              <p className="project-description">
                  
              </p>
            </div>
            <div className="project">
              <h2>Ideation</h2>
              <img 
                className="project-thumbnail" 
                src="../../images/" 
                alt="Brainstorming sketches" 
              />
              <p className="project-description">
                Through much exploration and ideation, I honed in on a general theme that I wanted my chair to have: a form that gave the illusion of motion.
              </p>
              <p className="project-description">
                I explored different ways of achieving that, including CNC surfacing, woodworking and finally, stretched fabric.
              </p>
            </div>
            <div className="project">
              <h2>Prototype</h2>
              <img 
                className="project-thumbnail" 
                src="../../images/" 
                alt="Practice welds" 
              />
              <p className="project-description">
                I started practice welding right away, since I knew the strength of the chair lay with the strength of the welds and fixturing.
              </p>
              <p className="project-description">
                I also experimented with overlaying the lycra on the frame.
              </p>
            </div>
            <div className="project">
              <h2>Mock-Up & Development</h2>
              <img 
                className="project-thumbnail" 
                src="../../images/" 
                alt="Welding the base" 
              />
              <p className="project-description">
                Once I finalized my design, I set to work arc-welding the final frame.
              </p>
              <img 
                className="project-thumbnail" 
                src="../../images/" 
                alt="Making the fabric pattern" 
              />
              <p className="project-description">
                In consultation with a professional seamstress, I made a fabric pattern for the base and top of the chair.
              </p>
            </div>
            <div className="project">
              <h2>Final Thoughts</h2>
              <img 
                className="project-thumbnail wrap-up" 
                src="../../images/twist.jpg" 
                alt="Final product" 
              />
              <p className="project-description">
                
              </p>
              <p>
                
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
