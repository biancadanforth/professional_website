// Home.jsx

class Home extends React.Component {
  render() {
    return(
      <div>
        <section className="primary">
          <div className="welcome-wrapper">
            <div className="welcome-profile-wrapper">
              <img 
                className="welcome-profile" 
                src="images/biancaWeldProg.jpg" 
                alt="Bianca Danforth" 
              />
            </div>
            <div className="welcome-message-wrapper">
              <h2 className="welcome-message">Front-end web nerd. Former mechanical engineer.</h2>
              <h3><span>Tools:</span> JavaScript, Sass, Mild Steel</h3>
              <button>Let's work together</button>
              <p><a href="javascript:void(0)">View my resume</a></p>
            </div>
          </div>
        </section>
        <section className="secondary">
          <h1>Work</h1>
          <div className="work-wrapper">
            <div className="project">
              <h4>2016 | Self-Initiated</h4>
              <h2>To Do List</h2>
              <h3>Tools: vanilla JavaScript, HTML, CSS, Photoshop</h3>
              <p className="project-description">
                A single page application where users can add, edit, delete, complete, undo and search tasks.
              </p>
              <a 
                className="project-thumbnail" 
                href="/work/to-do-list"
              >
                <img 
                  src="images/to-do-list-cropped.png" 
                  alt="To Do List application" 
                />
              </a>
            </div>
            <div className="project">
              <h4>2016 | Self-Initiated</h4>
              <h2>E-mail Sign-up</h2>
              <h3>Tools: HTML, CSS, Photoshop</h3>
              <p className="project-description">
                A static page where users can subscribe to a newsletter, contact, and learn more about Skillcrush.
              </p>
              <a 
                className="project-thumbnail" 
                href="#e-mail-sign-up"
              >
              <img 
                src="images/e-mail-sign-up-cropped.jpg" 
                alt="E-mail Sign Up Page" 
              />
              </a>
            </div>
            <div className="project">
              <h4>2015 | Exploratorium</h4>
              <h2>Ferrofluid Pool</h2>
              <h3>Tools: Inventor, Mill, Lathe, Router</h3>
              <p className="project-description">
                A science exhibit where visitors can turn a hand crank to watch ferrofluid rise up different sculptures.
              </p>
              <a 
                className="project-thumbnail" 
                href="#ferrofluid-pool"
              >
              <img 
              src="images/ferrofluid-pool-cropped.jpg" 
              alt="Ferrofluid Pool science exhibit" />
              </a>
            </div>
            <div className="project">
              <h4>2012 | Stanford</h4>
              <h2>Twist</h2>
              <h3>Tools: SolidWorks, TIG Machine, Tube Bender</h3>
              <p className="project-description">
               An ergonomic chair, inspired by M.C. Escher, made of arc-welded steel and lycra.
              </p>
              <a 
                className="project-thumbnail" 
                href="#chair"
              >
                <img 
                src="images/chair-cropped.jpg" 
                alt="Base of Twist chair" 
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
