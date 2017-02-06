const svgElement = '<svg className="logo" id="svg3336" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.000004 35.116184" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata3342"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="g4210" transform="matrix(1.0576 0 0 1.0576 -15.807 -8.6478)"><text className="logo" id="text3348" style={{ wordSpacing: "0px", letterSpacing: "0px" }} line-height="125%" font-size="40px" y="41.058823" x="11.705884" font-family="sans-serif" xml:space="preserve" fill="#000000"><tspan id="tspan3350" y="41.058823" x="11.705884" font-family="montserrat">bd</tspan></text><path className="logo arch" id="path3366" d="m25.583 23.139a13 13 0 0 1 13 -12.963 13 13 0 0 1 13 12.963" stroke="#000" stroke-width="4" fill="none"/></g></svg>';

// The DropdownSubmenu component goes inside the Header component
class DropdownSubmenu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDropdown() {
    this.setState({open: !(this.state.open)})
  }

  render() {
    if (this.state.open) {
      return (
        <ul className="submenu" id="dropdown-submenu">
          <li><a href="javascript:void(0)">To Do List</a></li>
          <li><a href="javascript:void(0)">E-mail Sign-up</a></li>
          <li><a href="javascript:void(0)">Ferrofluid Pool</a></li>
          <li><a href="javascript:void(0)">Twist</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="submenu hidden" id="dropdown-submenu">
          <li><a href="javascript:void(0)">To Do List</a></li>
          <li><a href="javascript:void(0)">E-mail Sign-up</a></li>
          <li><a href="javascript:void(0)">Ferrofluid Pool</a></li>
          <li><a href="javascript:void(0)">Twist</a></li>
        </ul>
      );
    }
    
  }
}

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  render() {
    return (
    	<header id="header" className= {this.state.value} role="banner">
        <div>
          <span>
            <a href="http://www.biancadanforth.com" className="icon-link">
              <div dangerouslySetInnerHTML={{__html: svgElement}} />
            </a>
            <h1>Bianca Danforth</h1>
          </span>
           <nav role="navigation">
            <ul className="menu">
              <li><a id="home-nav-link" href="javascript:void(0)" onClick={() => this.setState({value: 'home-page'})} aria-label="Home">Home</a></li>
              <li id="work-nav-list-item"><a id="work-nav-link" href="javascript:void(0)" onClick={() => this.refs.dropdown.toggleDropdown()} aria-label="Work">Work</a>
                <DropdownSubmenu ref="dropdown" />
              </li>
              <li><a id="more-info-nav-link" href="javascript:void(0)" onClick={() => this.setState({value: 'more-info-page'})} aria-label="More Info">More Info</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
