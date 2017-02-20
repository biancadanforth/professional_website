// MoreInfo.jsx

const quoteSVG = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 475.082 475.081" style="enable-background:new 0 0 475.082 475.081;" xml:space="preserve"><g><path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132 c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424 c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271 c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677 C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985 h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088 c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"/><path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994 c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411 h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85 c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267 c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991 c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985 c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"/></g></svg>';

class MoreInfo extends React.Component {

  render() {
    return(
      <div>
        <section className="primary">
          <ContactForm reCaptchaId="firstForm" />
          <div className="about-body">
            <div>
              <h2>Say What?</h2>
              <h3>I am a<br/>designer, developer & engineer.</h3>
              <p><a href="/work/bianca-danforth-resume.pdf">View my resume</a></p>
              <img 
                className="about-hero" 
                src="../images/bianca.jpg" 
              />
            </div>
            <div className="about-copy">
              <p className="project-description">
                When I went to college, like most students, I had no idea what I wanted to do. All I knew was that I wanted to do <strong>something challenging and worthwhile</strong>. I chose to study mechanical engineering.
              </p>
              <p className="project-description">
                Several years later I have found something that is not only challenging and worthwhile, but <strong>that I enjoy doing</strong> even more: web design and development.
              </p>
              <div className="blockquote-wrapper">
                <blockquote>
                  <div className="open-quote" dangerouslySetInnerHTML={{__html: quoteSVG}} />
                  In many ways, I'm doing what I have always done: thinking critically and creatively, solving problems, and rolling up my sleeves to get the work done.
                  <div className="close-quote" dangerouslySetInnerHTML={{__html: quoteSVG}} />
                </blockquote>
              </div>
              <p className="project-description">
                In many ways, I'm doing what I have always done: thinking critically and creatively, solving problems, and rolling up my sleeves to get the work done.
              </p>
              <p className="project-description">
                Other things I find challenging and worthwhile include: <strong>hiking</strong> with my dog, Mia, <strong>fixing things</strong> around the house and <strong>volunteering</strong> for political organizations whose ideas I believe in.
              </p>
            </div>
          </div>
        </section>
        <section className="secondary">
          <ContactForm reCaptchaId="secondForm" />
        </section>
      </div>
    )
  }
}
