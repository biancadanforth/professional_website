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
              <div className="glamour-shot-wrapper">
                <a 
                  className="wrap-up"
                  href="/work/e-mail-sign-up/live" 
                  title="See it live"
                  target="_blank"
                  aria-label="Go to live site"
                >
                  <img 
                    className="project-thumbnail wrap-up" 
                    src="../../images/e-mail-sign-up-glamour-final.png" 
                    alt="Final design on different devices"
                  />
                </a>
                <a
                  className="button-wrapper"
                  href="/work/e-mail-sign-up/live" 
                  target="_blank" 
                  aria-label="Go to live site"
                >
                  <button>See it live</button>
                </a>
              </div>
              <div>
                <h2>Overview</h2>
                <h4 className="overview-header">Project goals</h4>
                <p>
                  My goal was to make a static webpage based on a provided Photoshop mock-up.
                </p>
                <p>
                  This was an extra credit project for a web design course I took from Skillcrush.com.
                </p>
                <h4 className="overview-header">Tools and Methods</h4>
                 <p>
                  This page is written in HTML and CSS.
                </p>
                <p>
                  I used a modified fluid grid framework along with CSS Flexbox to layout elements on the page.
                </p>
                <p>
                  There is no back-end component for the forms.
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
                     The first thing I did was organize the layers in Photoshop into groups that would mirror the major HTML container elements on the page.
                  </p>
                  <p className="project-description">
                    I then identified all of the assets to extract from the mock-up. For example, I needed the Wisdom Script and Noticia Text fonts, the background pattern and paper background images and the color values of all the major elements used in the page.
                  </p>
                  <p className="project-description">
                    I learned that style guides are very handy, and that there's a lot a designer can do to make sure their design is not lost in translation. For example, this mock-up did not tell me how the page should look on a mobile device, or what the buttons should look like in hover or pressed states.
                  </p>
                  <p className="project-description">
                    Thankfully, the mock-up was designed using a grid system. I learned that designing with a grid system accomplishes a lot of things at once: it ensure elements are aligned between horizontal sections, that they are evenly spaced between one another in a row, and most importantly in my case, allows the developer to easily translate widths into percentages in CSS. Using relative size units like percentages makes building a responsive page possible (along with media queries).
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Prototype</h2>
              <div className="project">
                <div className="codepen-embed"dangerouslySetInnerHTML={{__html: fluidGridCodepen}} />
                <div className="process-description">
                  <p className="project-description">
                    Since this was my first foray into front-end development, I had to research what approach to use to layout the page in CSS. I did not want to use any third-party frameworks (Bootstrap, Foundation, Skeleton, etc.), since I wanted to make sure I was comfortable working in plain CSS.
                  </p>
                  <p className="project-description">
                    Like many of the frameworks I mentioned, the web design course I was taking during this project relied on the CSS <code>float</code> property to layout a webpage. 
                  </p>
                  <p className="project-description">
                    I experimented with a fluid grid approach, modifying a framework for a 960 pixel grid on Codepen that used <code>float</code> and percentage-based widths to adjust the size of content dynamically. 
                  </p>
                  <p className="project-description">
                    I learned how helpful it is to have frameworks in place, so that common UI elements and layouts can be built quickly and modified as needed. This makes prototyping different ideas much more efficient. 
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
                    While floating left and right can get the job done, there can be many unexpected behaviors and display issues associated with floated elements.
                  </p>
                  <p className="project-description">
                    Though it wasn't covered in the course, I did some research and came across a very useful new alternative to <code>float</code> released in CSS3 for flexible layouts called Flexbox. After going through an excellent tutorial online called Flexbox Froggy, I was excited to try Flexbox out on this project.
                  </p>
                  <p className="project-description">
                    Once I had the structure planned out, I had to put it all together, linking the assets, establishing layout breakpoints and filling in the gaps for information that wasn't provided, like placeholder text styles in the form input fields.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Final Product</h2>
              <div className="project">
                <div className="glamour-shot-wrapper">
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
                  <a
                    className="button-wrapper"
                    href="/work/e-mail-sign-up/live" 
                    target="_blank" 
                    aria-label="Go to live site"
                  >
                    <button>See it live</button>
                  </a>
                </div>
                <div className="process-description">
                  <p className="project-description">
                    Since this was my first web development project, I learned a lot about the myriad approaches that I could take. Each developer has their own process, and my own began to form and evolve.
                  </p>
                  <p className="project-description">
                    I also started to get a sense for just how much can be done with HTML and CSS on their own. For example, I made the ribbon for the tagline at the top of the page purely with CSS.
                  </p>
                  <p className="project-description">
                    Finally, I started to understand how important the DRY (Don't Repeat Yourself) coding principle was to debugging, and how important it was to stay organized and consistent in my code.
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
