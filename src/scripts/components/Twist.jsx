// Twist.jsx

import React from 'react';

class Twist extends React.Component {
  
  render() {
    return(
      <div>
        <section className='primary'>
          <div className='primary-wrapper'>
            <h1 className='project-header'>Twist</h1>
            <h3 className='project-subsubheader'>Visual Design | Engineering Design | Production </h3>
            <div className='project-hero-wrapper'>
              <img 
                className='portrait no-button' 
                src='/images/twist-glamour.jpg' 
                alt='Final product'
              />
              <div className='project-overview-wrapper'>
                <h2 className='project-overview-header'>Overview</h2>
                <h4 className='project-overview-subheader'>Project goals</h4>
                <p className='project-overview-description'>
                  The goal of this project was to design and build a chair.
                </p>
                <p className='project-overview-description'>
                  This project was part of an Art Studio course I took in my last quarter of graduate school at Stanford University. It was <a target='_blank' href='/work/twist/twist-magazine-article.pdf'>featured</a> in Stanford's alumni magazine!
                </p>
                <h4 className='project-overview-subheader'>Tools and Methods</h4>
                <p className='project-overview-description'>
                  I made a CAD model of the chair's frame in SolidWorks. I TIG-welded the frame, which is made of mild steel square tubing. I upholstered the chair using foam, leather and lycra.
                </p>
                <p className='project-overview-description'>
                  At the time of this project, my name was Bianca Morales.
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
                  src='/images/twist-gather-information.jpg' 
                  alt='Drawing with anthropometry for the average American male, year 2000'
                />
                <figcaption>Source: NASA</figcaption>
                </figure>
                <div className='process-description'>
                  <p className='project-description'>
                    Since we only had two months to design and build the chair, I knew I needed to hone in on a design very quickly.
                  </p>
                  <p className='project-description'>
                    After talking with alumni of the course, I decided I would choose one component of my process that I already had experience with and one component that was totally new.
                  </p>
                  <p className='project-description'>
                    I also looked up anthropometry tables from various sources to ensure the critical dimensions of my chair would be ergonomic for most people.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Ideation</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/twist-ideation.jpg' 
                  alt='Brainstorming sketches'  
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I started looking everywhere for inspiration. I walked all over campus, visited designer furniture stores, flipped through visual art books at the library and sketched out the possibilities.
                  </p>
                  <p className='project-description'>
                    As I looked through my ideas, I found a pattern: I was drawn to a dynamic, ostensibly unstable form.
                  </p>
                  <p className='project-description'>
                    I converged on my final design based on the practical decision I had made earlier: do something partly familiar and partly new. I had TIG-welded before, but never worked with fabrics. That would be my process direction.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Prototype</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/twist-prototype.jpg' 
                  alt='Practice welds' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I knew the build phase needed to start as soon as possible. I got my hands on materials from a local supplier and set about practice welding joints similar to those I would have in my final frame.
                  </p>
                  <p className='project-description'>
                    At the same time, I needed to look outside the Stanford bubble for an upholstery expert. I asked fellow students in the shop and got a referral. I went to the local hobby store, bought some clearance spandex and set up a meeting.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Development</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/twist-development.jpg' 
                  alt='Welding the base'  
                />
                <div className='process-description'>
                  <p className='project-description'>
                    Once I finalized my design, I set to work welding the final frame and made a fabric pattern for the base and top of the chair.
                  </p>
                  <p className='project-description'>
                    After seeing it at scale, I was dissatisfied with the original angle and length of the back of the chair. Thankfully, I did not have to scrap the entire frame. I just had to cut off the back, modify it as desired and re-weld it.
                  </p>
                  <p className='project-description'>
                    <strong>I learned that</strong> it is much easier to recover from a mistake in the design phase than in the production phase of a project.
                  </p>
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <h2 className='project-subheader'>Final Product</h2>
              <div className='project'>
                <img 
                  className='project-thumbnail' 
                  src='/images/twist-glamour.jpg' 
                  alt='Final product' 
                />
                <div className='process-description'>
                  <p className='project-description'>
                    I really enjoyed this project, because it was one of the few projects I worked on at Stanford where I was in control of both the design and engineering.
                  </p>
                  <p className='project-description'>
                    <strong>I learned</strong> first-hand the tremendous value of human capital. I received so much useful advice from course alumni and their extended networks.
                  </p>
                  <p className='project-description'>
                    My half familiar and half new approach was very successful in the end. I see my transition into web design and development along those lines as well: I already know programming and design methodology – what is new are the languages and the medium.
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

export default Twist;
