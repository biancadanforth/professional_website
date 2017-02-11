// Header.jsx

const svgElement = '<svg className="logo" id="svg3336" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.000004 35.116184" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><metadata id="metadata3342"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g id="g4210" transform="matrix(1.0576 0 0 1.0576 -15.807 -8.6478)"><text className="logo" id="text3348" style={{ wordSpacing: "0px", letterSpacing: "0px" }} line-height="125%" font-size="40px" y="41.058823" x="11.705884" font-family="sans-serif" xml:space="preserve" fill="#000000"><tspan id="tspan3350" y="41.058823" x="11.705884" font-family="montserrat">bd</tspan></text><path className="logo arch" id="path3366" d="m25.583 23.139a13 13 0 0 1 13 -12.963 13 13 0 0 1 13 12.963" stroke="#000" stroke-width="4" fill="none"/></g></svg>';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false,
      minimize: false,
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
    //let clicking outside of the Work <nav> link and its dropdown menu close the dropdown menu
    document.addEventListener('click', (event) => {
      let isClickInside = this.refs.workListItem.contains(event.target);
      // if the user clicks anywhere other than the workListItem element, hide the dropdown menu
      if (!isClickInside) {
        this.setState({dropdownOpen: false});
      }
    });

    // When user scrolls, minimize header; when user returns to the top of the page, un-minimize
    window.addEventListener('scroll', this.minimizeHeader.bind(this));

    // compute <header> height and add it as padding-top to <main>
    let node = ReactDOM.findDOMNode(this.refs['header']);
    if (node) {
      let headerHeight = node.clientHeight;
      this.props.calculateHeight(headerHeight);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', (event) => {
      let isClickInside = this.refs.workListItem.contains(event.target);
      if (!isClickInside) {
        this.setState({dropdownOpen: false});
      }
    });

     // When user scrolls, minimize header; when user returns to the top of the page, un-minimize
    window.removeEventListener('scroll', this.minimizeHeader.bind(this));
  }

  handleClick() {
    this.setState({dropdownOpen: !(this.state.dropdownOpen)});
  }

  render() {
    return (
    	<header 
        className= {this.getClassName()} 
        ref="header" 
        role="banner"
      >
        <div>
          <span>
            <a 
              href="http://www.biancadanforth.com" 
              className="icon-link"
            >
              <div dangerouslySetInnerHTML={{__html: svgElement}} />
            </a>
            <h1>Bianca Danforth</h1>
          </span>
           <nav role="navigation">
            <ul className="menu">
              <li>
                <Link to="home" aria-label="home">
                  Home
                </Link>
              </li>
              <li 
                ref= "workListItem"
                onMouseOver={() => this.setState({dropdownOpen: true})}
                onMouseOut={() => this.setState({dropdownOpen: false})}
                >
                <a 
                  href="javascript:void(0)" 
                  onClick={this.handleClick.bind(this)}
                  aria-label="Work"
                >
                  Work
                </a>
                <Dropdown
                  isOpen={this.state.dropdownOpen}
                  onPageChange={(pageClicked) => this.props.onPageChange(pageClicked)}
                  onClick = {() => this.handleClick()}
                />
              </li>
              <li>
                <Link to="more-info" aria-label="more info">
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
