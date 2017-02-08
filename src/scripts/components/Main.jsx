class Main extends React.Component {

  get mainContent() {
    switch(this.props.currentPage) {
      case 'home-page':
        return <Home />;
      case 'more-info-page':
        return <MoreInfo />;
      case 'to-do-list':
        return <ToDoList />;
      case 'e-mail-sign-up':
        return <EmailSignUp />;
      case 'ferrofluid-pool':
        return <FerrofluidPool />;
      case 'twist':
        return <Twist />;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <main 
        id="main" 
        className={this.props.currentPage} 
        role="main">
        {this.mainContent}
      </main>
    );
  }
}
