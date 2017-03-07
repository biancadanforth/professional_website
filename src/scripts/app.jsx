// App.jsx

// Imports
import React            from 'react';
import ReactDOM         from 'react-dom';
import { Router }       from 'react-router';
import { Route }        from 'react-router';
import { hashHistory }  from 'react-router';

import ContactForm      from './components/ContactForm.jsx';
import Dropdown         from './components/Dropdown.jsx';
import EmailSignUp      from './components/EmailSignUp.jsx';
import FerrofluidPool   from './components/FerrofluidPool.jsx';
import Footer           from './components/Footer.jsx';
import Header           from './components/Header.jsx';
import Home             from './components/Home.jsx';
import Main             from './components/Main.jsx';
import MoreInfo         from './components/MoreInfo.jsx';
import ThankYou         from './components/ThankYou.jsx';
import ToDoList         from './components/ToDoList.jsx';
import Twist            from './components/Twist.jsx';

const render = ReactDOM.render;

class App extends React.Component {

  render() {
    const currentPath = this.props.router.location.pathname;
    let pageName = currentPath.replace('\/', '');
    pageName += '-page';
    return (
    	<div ref='page'>
	    	<Header currentPage={currentPath === '/' ? 'home-page' : pageName} />
	    	<Main currentPage={currentPath === '/' ? 'home-page' : pageName} >
          {currentPath === '/' ? <Home /> : this.props.children}
        </Main>
	      <Footer currentPage={currentPath === '/' ? 'home-page' : pageName} />
      </div>
    );
  }
}

render((
  <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
      <Route path='more-info' component={MoreInfo} />
      <Route path='thank-you' component={ThankYou} />
      <Route path='to-do-list' component={ToDoList} />
      <Route path='e-mail-sign-up' component={EmailSignUp} />
      <Route path='ferrofluid-pool' component={FerrofluidPool} />
      <Route path='twist' component={Twist} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
