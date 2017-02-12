// Main.jsx

class Main extends React.Component {
  render() {
    return (
      <main 
        className={this.props.currentPage} 
        role="main"
        style={{ paddingTop: (this.props.yOffset).toString() + 'px'}}
      >
        {this.props.children}
      </main>
    );
  }
}
