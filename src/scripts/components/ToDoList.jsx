// ToDoList.jsx

import React from 'react';

const searchFilterCodePen = "<iframe height='410' scrolling='no' title='Search Filter V2' src='//codepen.io/biancadanforth/embed/LRrEGp/?height=410&theme-id=light&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/biancadanforth/pen/LRrEGp/'>Search Filter V2</a> by biancadanforth (<a href='http://codepen.io/biancadanforth'>@biancadanforth</a>) on <a href='http://codepen.io'>CodePen</a>.</iframe>";

class ToDoList extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>To Do List</h1>
            <h3 className='project-subsubheader'>UX Design | Visual Design | Front-End Development</h3>
            <div className='project-hero-wrapper'>
              <div className='glamour-shot-wrapper'>
                <a
                  href='/work/to-do-list/live'
                  title='See it live'
                  target='_blank' 
                  aria-label='Go to live site'>
                  <img 
                    className= 'wrap-up' 
                    src='/images/to-do-list-glamour.png' 
                    alt='Final design on different devices'
                  />
                </a>
                <a
                  className='button-wrapper'
                  href='/work/to-do-list/live' 
                  target='_blank' 
                  aria-label='Go to live site'>
                  <button className='project-button'>See it live</button>
                </a>
              </div>
              <div className='project-overview-wrapper'>
                <h2 className='project-overview-header'>Overview</h2>
                <h4 className='project-overview-subheader'>Project goals</h4>
                <p className='project-overview-description'>
                  My goal was to build an interactive, useful and usable application in JavaScript.
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                 <p className='project-overview-description'>
                  I used Photoshop, UXPin and InVision for the design. I used pure JavaScript ES5, HTML5 and CSS3 for the development.
                </p>
                <p className='project-overview-description'>
                  I had never used any of these tools extensively before (HTML and CSS excepted), so I was learning them as I went.
                </p>
                <p className='project-overview-description'>
                  While I completed all the work on my own, I met weekly with a professional web designer for feedback.
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
              <figure>
                  <img 
                    src='/images/to-do-list-gather-information.jpg' 
                    alt='Benchmarking other to do list applications' 
                  />
                  <figcaption>Source: Todoist </figcaption>
                </figure>
                <div className='process-description'>
                  <p className='project-description'>
                    Since I didn't have an explicit customer, I asked friends and family what features they thought were most important.
                  </p>
                  <p className='project-description'>
                    Having just read Steven Krug's usability book, <span>Don't Make Me Think</span>, I wanted to apply some of his principles. To that end, I decided to prioritize the ability to undo any action.
                  </p>
                  <p className='project-description'>
                   I also looked at some existing To Do List applications to see how different kinds of information were organized and presented.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Ideation</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/to-do-list-ideation.jpg' 
                  alt='Benchmarking other To Do Lists' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I came up with as many ideas as possible for what features to include, sorting them based on impact and feasibility.
                  </p>
                  <p className='project-description'>
                    After scouring the web for inspiration, I created a style tile. This helped me translate my application's personality into development-friendly UI, color and typography elements.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Wireframe</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/to-do-list-prototype.jpg' 
                  alt=''
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I made low- and high-fidelity clickable wireframes and user-tested them with friends and family.
                  </p>
                  <p className='project-description'>
                    <strong>The first iteration showed me</strong> that menus should be contextual. Actions that are relatively infrequent like deleting a list should be accessible but more visually subdued. For this reason, I decided to make a 'list options' submenu.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Prototype</h2>
              <div className='project'>
                <div className='codepen-embed'dangerouslySetInnerHTML={{__html: searchFilterCodePen}} />
                <div className='process-description'>
                  <p className='project-description'>
                    I used a modular approach to develop each major feature in Codepen before integrating them into the larger application. For example, I made a task search filter module.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Mock-Up & Development</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/to-do-list-refine.jpg' 
                  alt='High fidelity Photoshop mock-up'
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I made a high resolution mock-up in Photoshop based on what I learned from user testing and my style tile.
                  </p>
                  <p className='project-description'>
                    A second round of user testing reminded me of another of Krug's universal usability principles: eliminate steps wherever possible. For example, rather than have the user click a button to add a new task, I decided to automatically add a new task after the previous one was submitted.
                  </p>
                  <p className='project-description'>
                    My mentor also pointed out that hover doesn't exist in mobile, and that the UI should be accessible by tapping alone.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Final Product</h2>
              <div className='project'>
                <div className='project-glamour-shot-wrapper'>
                  <a
                    href='/work/to-do-list/live'
                    title='See it live'
                    target='_blank' 
                    aria-label='See it live'>
                    <img 
                      className='wrap-up' 
                      src='/images/to-do-list-glamour.png' 
                      alt='Final design on different devices'
                    />
                  </a>
                  <a
                    className='button-wrapper'
                    href='/work/to-do-list/live' 
                    target='_blank' 
                    aria-label='See it live'>
                    <button className='project-button'>See it live</button>
                  </a>
                </div>
                <div className='process-description'>
                  <p className='project-description'>
                    I really enjoyed both the artistic and technical side of this project. It showed me how the design and development of a website are inextricably linked.
                  </p>
                  <p className='project-description'>
                    I also <strong>took a deep dive into JavaScript</strong> for the first time, learning about modular code architecture, APIs, AJAX and why libraries like JQuery and React are so popular.
                  </p>
                  <p className='project-description'>
                    Finally, I <strong>confronted mobile-friendly design head-on</strong> and got a chance to apply usability principles that I had been reading about.
                  </p>
                  <p className='project-description'>
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

export default ToDoList;
