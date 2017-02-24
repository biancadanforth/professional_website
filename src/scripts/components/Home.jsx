// Home.jsx

class Home extends React.Component {
  
  componentDidMount() {
      var placeholder = document.querySelector('.placeholder');
      var small = placeholder.querySelector('.img-small');
  
      // 1: load small image and show it
      var imgSmall = new Image();
      imgSmall.src = small.src;
      imgSmall.onload = function () {
       small.classList.add('loaded');
       placeholder.classList.add('image-loaded');
      };
  
      // 2: load large image
      var imgLarge = new Image();
      imgLarge.src = placeholder.getAttribute('data-large'); 
      imgLarge.onload = function () {
        imgLarge.classList.add('loaded');
      };
      placeholder.appendChild(imgLarge);
  }

  render() {
    return(
      <div className="home-page-wrapper">
        <section className="primary">
          <div className="welcome-wrapper">
            <div 
              className="placeholder welcome-profile-wrapper" 
              data-large="images/biancaWeld.jpg"
              ref="placeholder"
              >
              <img 
                className="welcome-profile img-small" 
                src="images/biancaWeldSmall.jpg" 
                alt="Bianca Danforth" 
              />
              <div style={{paddingBottom: '66.67%'}}></div>
              <div className="welcome-message-wrapper">
              <h2 className="welcome-message">Front-end web nerd. Former mechanical engineer.</h2>
              <h3><span>Tools:</span> JavaScript, Sass, Mild Steel</h3>
              <a href="#more-info"><button>Let's work together</button></a>
              <p><a target="_blank" href="/work/bianca-danforth-resume.pdf">View my resume</a></p>
            </div>
            </div>
          </div>
        </section>
        <section className="secondary">
          <h1>Work</h1>
          <div className="work-wrapper">
            <div className="project">
              <h4>2016 | Self-Initiated</h4>
              <h2>To Do List</h2>
              <h3>Tools: pure JavaScript, HTML5, CSS5, Photoshop</h3>
              <p className="project-description">
                A single page application where users can add, edit, delete, complete, undo and filter tasks.
              </p>
              <a 
                className="project-thumbnail" 
                href="#to-do-list"
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
              <h3>Tools: HTML5, CSS3, Photoshop</h3>
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
          </div>
        </section>
        <section className="tertiary">
          <div className="work-wrapper">
            <h1>Past Projects</h1>
            <div className="work-wrapper">
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
                  href="#twist"
                >
                  <img 
                  src="images/twist-cropped.jpg" 
                  alt="Base of Twist chair" 
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
