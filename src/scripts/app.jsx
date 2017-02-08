class App extends React.Component {
  
  constructor() {
  	super();
  	this.state = {
  		currentPage: 'more-info-page',
  	}
  }

  updateCurrentPage(pageClicked) {
  	console.log("yo");
  	this.setState({currentPage: pageClicked});
  }

  render() {
    return (
    	<div>
	    	<Header currentPage={this.state.currentPage} onPageChange={(pageClicked) => this.updateCurrentPage(pageClicked)} />
	    	<Main currentPage={this.state.currentPage} />
	      <Footer currentPage={this.state.currentPage} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);