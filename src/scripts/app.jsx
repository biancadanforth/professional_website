class App extends React.Component {
  
  constructor() {
  	super();
  	this.state = {
  		currentPage: 'home-page',
  		mainYOffset: 0,
  	}
  }

  updateCurrentPage(pageClicked) {
  	this.setState({currentPage: pageClicked});
  }

  setMainYOffset(h) {
  	console.log("entered setMainOffset() function");
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