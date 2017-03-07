// Main.jsx

import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <main
        className={this.props.currentPage}
        role='main'
      >
        {this.props.children}
      </main>
    );
  }
}

export default Main;
