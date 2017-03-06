const render = ReactDOM.render;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;

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