// Header.jsx

import React      from 'react';
import { Link }   from 'react-router';

const svgElement = "<svg class='header-logo' id='svg3336' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50.000004 35.116184' version='1.1' xmlns:cc='http://creativecommons.org/ns#' xmlns:dc='http://purl.org/dc/elements/1.1/'><metadata id='metadata3342'><rdf:RDF><cc:Work rdf:about=''><dc:format>image/svg+xml</dc:format><dc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage'/><dc:title/></cc:Work></rdf:RDF></metadata><g id='g4210' transform='matrix(1.0576 0 0 1.0576 -15.807 -8.6478)'><text className='logo' id='text3348' style={{ wordSpacing: '0px', letterSpacing: '0px' }} line-height='125%' font-size='40px' y='41.058823' x='11.705884' font-family='sans-serif' xml:space='preserve' fill='#000000'><tspan id='tspan3350' y='41.058823' x='11.705884' font-family='montserrat'>bd</tspan></text><path className='logo arch' id='path3366' d='m25.583 23.139a13 13 0 0 1 13 -12.963 13 13 0 0 1 13 12.963' stroke='#000' stroke-width='4' fill='none'/></g></svg>";

let timer;

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      minimize: false,
      isMobile: false,
    };
  }

  minimizeHeader() {
    if (window.pageYOffset === 0) {
      this.setState({minimize: false});
    } else {
      this.setState({minimize: true})
    }
  }

  getClassName() {
    //initialize className to have current page
    let className = this.props.currentPage;
    //add minimize class if user is scrolling
    this.state.minimize ? className+= ' minimize' : null;
    return className;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.minimizeHeader
      .bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.minimizeHeader.bind(this));
  }

  handleClick() {
    this.setState({dropdownOpen: !(this.state.dropdownOpen)});
  }

  handleMouseOver() {
    if (!this.state.isMobile) {
      this.setState({dropdownOpen: true});
    }
  }

  handleMouseOut() {
    if (!this.state.isMobile) {
      this.setState({dropdownOpen: false});
    }
  }

  render() {
    return (
    	<header
        className= {this.getClassName()}
        ref='header'
        role='banner'>
        <div className='header-wrapper'>
          <span className='header-brand-wrapper'>
            <Link
              to='home'
              className="header-id-link"
              aria-label="Go to Bianca Danforth's website">
              <h1 className="header-name">Bianca Danforth</h1>
              <h2 className="header-role">Software Engineer</h2>
              <h2 className="header-role mobile">Software Engineer</h2>
            </Link>
          </span>
           <nav role="navigation">
            <ul className="menu">
              <li className="menu-item">
                <Link className="menu-link" to="home" aria-label="home">
                  Work
                </Link>
              </li>
              <li className="menu-item">
                <Link className="menu-link" to="more-info" aria-label="more info">
                  More Info
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
