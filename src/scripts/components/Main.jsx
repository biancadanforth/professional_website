// Main.jsx

class Main extends React.Component {
  render() {
    return (
      <main 
        className={this.props.currentPage} 
        role="main"
      >
        {this.props.children}
      </main>
    );
  }
}
