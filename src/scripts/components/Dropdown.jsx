// Dropdown.jsx

// The Dropdown component goes inside the Header component
class Dropdown extends React.Component {

  render() {
    return (
      <ul className= {this.props.isOpen ? 'submenu' : 'submenu hidden'}>
        <li>
          <a 
            href="javascript:void(0)"
            onClick={() => {
                // pass this click up to change the state of App, which then propagates the change to its children components
                this.props.onPageChange('to-do-list');
                //close dropdown menu when this submenu item is clicked
                this.props.onClick();
              }
            }
          >
            To Do List
          </a>
        </li>
        <li>
          <a 
            href="javascript:void(0)"
            onClick={() => {
              // pass this click up to change the state of App, which then propagates the change to its children components
              this.props.onPageChange('e-mail-sign-up');
              //close dropdown menu when this submenu item is clicked
              this.props.onClick();
              }
            }
          >
            E-mail Sign-up
          </a>
        </li>
        <li>
          <a 
            href="javascript:void(0)"
            onClick={() => {
              // pass this click up to change the state of App, which then propagates the change to its children components
              this.props.onPageChange('ferrofluid-pool');
              //close dropdown menu when this submenu item is clicked
              this.props.onClick();
              }
            }
          >
            Ferrofluid Pool
          </a>
        </li>
        <li>
          <a 
            href="javascript:void(0)"
            onClick={() => {
              // pass this click up to change the state of App, which then propagates the change to its children components
              this.props.onPageChange('twist');
              //close dropdown menu when this submenu item is clicked
              this.props.onClick();
              }
            }
          >
            Twist
          </a>
        </li>
      </ul>
    );
  }
}
