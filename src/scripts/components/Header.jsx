const svgElement = '<svg className="logo" id="svg3336" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.000004 35.116184" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata3342"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="g4210" transform="matrix(1.0576 0 0 1.0576 -15.807 -8.6478)"><text className="logo" id="text3348" style={{ wordSpacing: "0px", letterSpacing: "0px" }} line-height="125%" font-size="40px" y="41.058823" x="11.705884" font-family="sans-serif" xml:space="preserve" fill="#000000"><tspan id="tspan3350" y="41.058823" x="11.705884" font-family="montserrat">bd</tspan></text><path className="logo arch" id="path3366" d="m25.583 23.139a13 13 0 0 1 13 -12.963 13 13 0 0 1 13 12.963" stroke="#000" stroke-width="4" fill="none"/></g></svg>';

// The Dropdown component goes inside the Header component
class Dropdown extends React.Component {

  render() {
    return (
      <ul className= {this.props.isOpen ? 'submenu' : 'submenu hidden'}>
        <li><a href="javascript:void(0)">To Do List</a></li>
        <li><a href="javascript:void(0)">E-mail Sign-up</a></li>
        <li><a href="javascript:void(0)">Ferrofluid Pool</a></li>
        <li><a href="javascript:void(0)">Twist</a></li>
      </ul>
    );
  }
}

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', (event) => {
      let isClickInside = this.refs.workListItem.contains(event.target);
      // if the user clicks anywhere other than the workListItem element, hide the dropdown menu
      if (!isClickInside) {
        this.setState({dropdownOpen: false});
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', (event) => {
      let isClickInside = this.refs.workListItem.contains(event.target);
      if (!isClickInside) {
        this.setState({dropdownOpen: false});
      }
    });
  }

  handleClick() {
    this.setState({dropdownOpen: !(this.state.dropdownOpen)});
  }

  render() {
    return (
    	<header id="header" className= {this.props.currentPage} role="banner">
        <div>
          <span>
            <a href="http://www.biancadanforth.com" className="icon-link">
              <div dangerouslySetInnerHTML={{__html: svgElement}} />
            </a>
            <h1>Bianca Danforth</h1>
          </span>
           <nav role="navigation">
            <ul className="menu">
              <li><a id="home-nav-link" href="javascript:void(0)" onClick={() => this.props.onPageChange('home-page')} aria-label="Home">Home</a></li>
              <li className={this.state.dropdownOpen ? 'active' : null} id="work-nav-list-item" ref= "workListItem">
                <a id="work-nav-link" href="javascript:void(0)" onClick={this.handleClick.bind(this)} aria-label="Work">Work</a>
                <Dropdown isOpen={this.state.dropdownOpen} />
              </li>
              <li><a id="more-info-nav-link" href="javascript:void(0)" onClick={() => this.setState({currentPage: 'more-info-page'})} aria-label="More Info">More Info</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
