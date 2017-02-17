// EmailSignUp.jsx

const fluidGridCodepen = "<iframe class='project-thumbnail' height='400' scrolling='no' title='Fluid Grid' src='//codepen.io/biancadanforth/embed/wWLGRK/?height=400&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/biancadanforth/pen/wWLGRK/'>Fluid Grid</a> by biancadanforth (<a href='http://codepen.io/biancadanforth'>@biancadanforth</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>";

class EmailSignUp extends React.Component {
  render() {
    return(
      <div>
        <section className="primary">
          <div className="primary-wrapper">
            <h1>E-mail Sign-Up</h1>
            <h3>Front-End Development</h3>
            <div className="project-hero-wrapper">
              <a 
                className="project-thumbnail wrap-up"
                href="/work/e-mail-sign-up/live" 
                title="Go to live site"
                target="_blank"
                aria-label="Go to live site"
              >
                <img 
                  className="wrap-up" 
                  src="../../images/e-mail-sign-up-glamour-final.png" 
                  alt="Final design on different devices"
                />
              </a>
              <div>
                <h2>Overview</h2>
                <h4 className="overview-header">Project goals</h4>
                <p>
                  This was an extra credit project for a web design course I took from Skillcrush. I was given a Photoshop mock-up and asked to turn it into a responsive webpage.
                </p>
                <h4 className="overview-header">Tools and Methods</h4>
                 <p>
                  This is a static page written in plain CSS and HTML. There is no back-end for the forms.
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
                  src="../../images/e-mail-sign-up-gather-information.png" 
                  alt="Photoshop mock-up of page"
                />
                <div className="process-description">
                  <p className="project-description">
                The first thing I needed to do was figure out all of the assets to extract from the Photoshop mock-up. For example, I needed the Wisdom Script and Noticia Text fonts, the background pattern and paper background image and the color values of all the major elements used in the page. 
              </p>
              <p className="project-description">
                I also set up a grid system and re-organized the layers into groups that would represent different HTML elements of the page.
              </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Ideation</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/e-mail-sign-up-ideation.png"  
                  alt="Flexbox Froggy game" 
                />
                <div className="process-description">
                  <p className="project-description">
                    This was my first foray into front-end development. I had to research what approach to use to layout the page in CSS. I did not want to use any third-party frameworks (Bootstrap, Foundation, Skeleton, etc.), since I wanted to make sure I was comfortable working in plain CSS.
                  </p>
                  <p className="project-description">
                    Though it wasn't covered in the course, I came across a very useful new tool released in CSS3 for flexible layouts called Flexbox.
                  </p>
                  <p className="project-description">
                    After going through an excellent tutorial online called Flexbox Froggy, I was confident in moving forward using Flexbox on this project.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Prototype</h2>
              <div className="project">
                <div className="codepen-embed"dangerouslySetInnerHTML={{__html: fluidGridCodepen}} />
                <div className="process-description">
                  <p>
                    I made one of my first codepens on this project, modifying some code I found to make a fluid grid in CSS. I used these styles along with Flexbox on the final page.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Development</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/e-mail-sign-up-development.png"
                  alt="Excerpt of final CSS" 
                />
                <div className="process-description">
                  <p className="project-description">
                    Finally, I had to put it all together, linking the assets, integrating the fluid grid flexbox layouts and filling in the gaps for information that wasn't provided, like button hover states.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Final Product</h2>
              <div className="project">
                <a 
                  className="project-thumbnail wrap-up"
                  href="/work/e-mail-sign-up/live" 
                  title="Go to live site"
                  target="_blank" 
                  aria-label="Go to live site"
                >
                  <img 
                    className="wrap-up" 
                    src="../../images/e-mail-sign-up-glamour-final.png" 
                    alt="Final design on different devices"
                  />
                </a>
                <div className="process-description">
                  <p className="project-description">
                    Since this was my first web development project, I learned a lot about the myriad approaches that I could take. Each developer has their own process, and my own began to form and evolve.
                  </p>
                  <p className="project-description">
                    I started to understand how important the DRY (Don't Repeat Yourself) coding principle was to debugging, and how important it was to stay organized and consistent in my code.
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
