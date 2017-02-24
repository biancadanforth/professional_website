// ToDoList.jsx

const searchFilterCodePen = "<iframe height='410' scrolling='no' title='Search Filter V2' src='//codepen.io/biancadanforth/embed/LRrEGp/?height=410&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/biancadanforth/pen/LRrEGp/'>Search Filter V2</a> by biancadanforth (<a href='http://codepen.io/biancadanforth'>@biancadanforth</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>";

class ToDoList extends React.Component {
  render() {
    return(
      <div>
        <section className="primary">
          <div className="primary-wrapper">
            <h1>To Do List</h1>
            <h3>UX Design | Visual Design | Front-End Development</h3>
            <div className="project-hero-wrapper">
              <div className="glamour-shot-wrapper">
                <a 
                  className="wrap-up"
                  href="/work/to-do-list/live" 
                  title="See it live"
                  target="_blank" 
                  aria-label="Go to live site"
                >
                  <img 
                    className="project-thumbnail wrap-up" 
                    src="../../images/to-do-list-glamour-final.png" 
                    alt="Final design on different devices"
                  />
                </a>
                <a
                  className="button-wrapper"
                  href="/work/to-do-list/live" 
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
                  As a self-initiated project, my primary goal was to build an interactive, useful and usable application in JavaScript.
                </p>
                <h4 className="overview-header">Tools and Methods</h4>
                 <p>
                  I used Photoshop to make the design mock-ups and UXPin and InVision to build the wireframes. I wrote this application from scratch in pure JavaScript ES5, HTML5 and CSS3. I created a local storage API in JavaScript to save the list between sessions.
                </p>
                <p>
                  I had never used any of these tools extensively before (HTML and CSS excepted), so I was learning them as I went.
                </p>
                <p>
                  While I completed all the work on my own, I met weekly with a professional web designer for feedback.
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
                  src="../../images/to-do-list-gather-information-cropped.jpg" 
                  alt="Benchmarking other to do list applications" 
                />
                <div className="process-description">
                  <p className="project-description">
                    Since I didn't have an explicit customer, I asked friends and family what features they thought were most important.
                  </p>
                  <p className="project-description">
                    At the same time, I was reading the popular usability book by Steven Krug, <span>Don't Make Me Think</span>. Krug talked about some universal usability principles, including the idea that if absolutely unavoidable, it should be as painless and simple as possible for users to recover from a mistake. I decided that the ability to undo any action would be a priority.
                  </p>
                  <p className="project-description">
                   I also did some benchmarking, which is a Stanford Design School term for checking out the competition. One of my favorite competitors was Todoist. In addition to looking at how different kinds of information were organized, I was interested in how these existing applications transitioned between different states.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Ideation</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/to-do-list-ideation-cropped.jpg" 
                  alt="Benchmarking other To Do Lists" 
                />
                <div className="process-description">
                  <p className="project-description">
                    From interviewing others and benchmarking, I already had a good start on possible features to include in my application and their relative importance. I brainstormed further on my own, thinking about what I would like to be able to do.
                  </p>
                  <p className="project-description">
                    I also took another pass through benchmarking other To Do List applications, this time, with an eye for the design of the user interface. I created a style tile, which helped me translate my application's personality into development-friendly UI, color and typography elements.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Wireframe</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/to-do-list-prototype-cropped.png" 
                  alt="" 
                />
                <div className="process-description">
                  <p className="project-description">
                    I made low- and high-fidelity, clickable wireframes, and user-tested them with a few different kinds of users: one web developer, one web designer, one college student and one tech-savvy retiree.
                  </p>
                  <p className="project-description">
                    <strong>The first iteration showed me</strong> that menus should be contextual. For example, deleting a list is a relatively rare occurrence. Rather than have it a permanent fixture on the page, I decided to make it part of a 'list options' submenu that is accessible, but more visually subdued.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Prototype</h2>
              <div className="project">
                <div className="codepen-embed"dangerouslySetInnerHTML={{__html: searchFilterCodePen}} />
                <div className="process-description">
                  <p className="project-description">
                    I also broke up each major feature of the application into reusable modules and developed them separately in Codepen. I then integrated them one by one into the larger application. For example, I made a task search filter module.
                  </p>
                  <p className="project-description">
                    <strong>One thing I learned</strong> rather quickly: just because something works in Codepen doesn't mean it's going to work on its own in the browser. I ended up having to migrate my Codepens to my local machine to cross-browser test each module before integrating them.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-wrapper">
              <h2>Mock-Up & Development</h2>
              <div className="project">
                <img 
                  className="project-thumbnail" 
                  src="../../images/to-do-list-refine-cropped.png" 
                  alt="High fidelity Photoshop mock-up" 
                />
                <div className="process-description">
                  <p className="project-description">
                    I made a high resolution mock-up in Photoshop based on what I gleaned from Wireframing and the Style Tile I made from Ideation.
                  </p>
                  <p className="project-description">
                    From reading various articles about the design of content-heavy websites, I knew I wanted the page to have a clean look with generous amounts of whitespace and a highly readable set of fonts.
                  </p>
                  <p className="project-description">
                    <strong>More testing</strong> of the high-fidelity wireframe <strong>brought even more improvements</strong> to my application. Another universal usability principle from Steven Krug's book, <span>Don't Make Me Think</span>, was to eliminate steps wherever possible. For example, rather than have a button the user clicks to add a task, the application should automatically add a new task after the user submits one.
                  </p>
                  <p className="project-description">
                    My design mentor also reminded me of <strong>a key design requirement</strong> at this stage: Any context menus that are accessible by hover should also be accessible by tapping on a mobile device. This forced me to re-examine whether these options were always visible or a tap away.
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
                    href="/work/to-do-list/live" 
                    title="Go to live site"
                    target="_blank" 
                    aria-label="Go to live site"
                  >
                    <img 
                      className="wrap-up" 
                      src="../../images/to-do-list-glamour-final.png" 
                      alt="Final design on different devices" 
                    />
                  </a>
                  <a
                    className="button-wrapper"
                    href="/work/to-do-list/live" 
                    target="_blank" 
                    aria-label="Go to live site"
                  >
                    <button>See it live</button>
                  </a>
                </div>
                <div className="process-description">
                  <p className="project-description">
                    I really enjoyed both the artistic and technical side of this project. It showed me how the design and development of a website are inextricably linked.
                  </p>
                  <p className="project-description">
                    Each step in my design process brought a new level of understanding and appreciation for the complexity of modern web design and development.
                  </p>
                  <p className="project-description">
                    I also <strong>took a deep dive into JavaScript</strong> for the first time, learning about modular code architecture, APIs, AJAX and why libraries like JQuery and React are so popular and useful.
                  </p>
                  <p className="project-description">
                    Finally, I <strong>confronted mobile-friendly design head-on</strong> and got a chance to apply usability principles that I had been reading about.
                  </p>
                  <p className="project-description">
                    I'm very proud of the result. I use my To Do List application regularly on my phone.
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
