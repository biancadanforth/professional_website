// App.jsx

class App extends React.Component {
  
  constructor() {
  	super();
  	this.state = {
  		currentPage: 'home-page',
  		mainYOffset: 0,
  	}
  }

  componentWillUpdate() {
    // scroll window to top when App's state is updated (i.e. when a nav or dropdown menu link is clicked and currentPage is changed)
    window.scrollTo(0,0);
  }

  updateCurrentPage(pageClicked) {
  	this.setState({currentPage: pageClicked});
  }

  setMainYOffset(h) {
  	this.setState({mainYOffset: h});
  }

  render() {
    return (
    	<div>
	    	<Header
	    		currentPage={this.state.currentPage}
	    		onPageChange={(pageClicked) => this.updateCurrentPage(pageClicked)}
	    		calculateHeight={(h) => this.setMainYOffset(h)} />
	    	<Main
		    	currentPage={this.state.currentPage}
		    	yOffset={this.state.mainYOffset}
	    	/>
	      <Footer
		      currentPage={this.state.currentPage}
		      onPageChange={(pageClicked) => this.updateCurrentPage(pageClicked)}
	      />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);