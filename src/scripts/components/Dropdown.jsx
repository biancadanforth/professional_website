// Dropdown.jsx

// The Dropdown component goes inside the Header component
class Dropdown extends React.Component {

  render() {
    return (
      <ul className= {this.props.isOpen ? 'submenu' : 'submenu hidden'}>
        <li>
          <Link 
            to="to-do-list"
            onClick={this.props.onClick} >
              To-Do List
          </Link>
        </li>
        <li>
          <Link 
            to="e-mail-sign-up"
            onClick={this.props.onClick} >
              E-mail Sign-up
          </Link>
        </li>
        <li className="past-projects">
          <Link 
            to="ferrofluid-pool"
            onClick={this.props.onClick} >
              Ferrofluid Pool
          </Link>
        </li>
        <li className="past-projects">
          <Link 
            to="twist"
            onClick={this.props.onClick} >
              Twist
          </Link>
        </li>
      </ul>
    );
  }
}
