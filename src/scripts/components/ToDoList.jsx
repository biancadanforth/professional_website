class ToDoList extends React.Component {
  render() {
    return(
      <div>
        <section className="primary">
        <div className="primary-wrapper">
          <h1>To Do List</h1>
          <h3>UX Design | Visual Design | Front-End Development</h3>
          <div className="project-hero-wrapper">
            <a href="/work/to-do-list/live" title="Go to live site" aria-label="Go to live site">
              <img className="project-thumbnail" src="../../images/to-do-list-glamour-final.png" alt="" />
            </a>
            <div>
              <h2>Design Brief</h2>
              <p>
                <span>When</span> I have life coming at me from all angles.<br />
                <span>I want to</span> sort out what's really important.
                <span>So I can</span> focus on the things that really matter and get back to doing what I want to do, not what I have to do.
              </p>
              <h4>Developer notes</h4>
              <p>
                This application does not rely on any libraries or frameworks; it was written from scratch in plain JavaScript, CSS and HTML.
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
            <img className="project-thumbnail" src="../../images/to-do-list-gather-information-cropped.jpg" alt="Benchmarking other to do list applications" />
            <p className="project-description">
              The project's primary goal was to build something useful in JavaScript. As a self-initiated project, I didn't have an explicit customer, but I consulted with professional designers, developers, friends and family who already make use of similar tools to understand what they valued most. I also looked at a number of professional productivity tools, like Todoist shown here, to develop a site map, user flow and information hierarchy.
            </p>
          </div>
          <div className="project">
            <h2>Ideation</h2>
            <img className="project-thumbnail" src="../../images/to-do-list-ideation-cropped.jpg" alt="" />
            <p className="project-description">
              I made a list of all the features I could come up with that would be nice to have, and sorted them based on two factors: impact and feasibility.
            </p>
            <p>
              I also took another pass benchmarking other productivity tools, this time looking for inspiration. I created the style tile shown here, which helps translate my application's personality into UI elements.
            </p>
          </div>
          <div className="project">
            <h2>Wireframe</h2>
            <img className="project-thumbnail" src="../../images/to-do-list-prototype-cropped.png" alt="" />
            <p className="project-description">
              I made low- and high-fidelity, clickable wireframes in UXPin and InVision, respectively, and user-tested them with multiple professional web designers.
            </p>
            <p>
              The first iteration, shown here, showed me that menus should be contextual. Deleting a list is a relatively rare occurence. Why not make it part of a list options menu that is accessible, but more visually subdued?
            </p>
          </div>
          <div className="project">
            <h2>Prototype</h2>
            <div >
            <p data-height="400" data-theme-id="light" data-slug-hash="LRrEGp" data-default-tab="result" data-user="biancadanforth" data-embed-version="2" data-pen-title="Search Filter V2" className="codepen">See the Pen <a href="http://codepen.io/biancadanforth/pen/LRrEGp/">Search Filter V2</a> by biancadanforth (<a href="http://codepen.io/biancadanforth">@biancadanforth</a>) on <a href="http://codepen.io">CodePen</a>.</p>
              <script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
            </div>
            <p>
              I also broke up each major feature of the application into modules, developing them separately in Codepen and testing them in the browser before integrating them into the larger application. One module was the search filter, as shown here.
            </p>
          </div>
          <div className="project">
            <h2>Mock-Up & Development</h2>
            <img className="project-thumbnail" src="../../images/to-do-list-refine-cropped.png" alt="" />
            <p className="project-description">
              Testing of the high-fidelity wireframe, based off of a working Photoshop static, showed me that I need to minimize the amount of work the user needs to do to achieve a task. For example, rather than have an 'Add List Item' button that the user must click to add a task, why not have a new task automatically created when the user submits the previous task?
            </p>
          </div>
          <div className="project">
            <h2>Final Thoughts</h2>
            <img className="project-thumbnail wrap-up" src="../../images/to-do-list-glamour-final.png" alt="" />
            <p className="project-description">
              I learned a great deal by completing this project about usability, testing, design workflow and modular code architecture. I am very happy with the result, but as with all things, there are always improvements that could be made if there were more time and resources to devote to the project.
            </p>
            <p>
              For example, my JavaScript code was very difficult to refactor and debug. This was mostly due to its classical architecture. If I did it again, I would rewrite the code using a different architecture that separates the Model, View and Controller, such as using React.
            </p>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
