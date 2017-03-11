// Main.jsx

import React from 'react';

class Main extends React.Component {
  
  render() {
    return (
      <main 
        className={this.props.currentPage} 
        role='main'>
        {React.cloneElement(this.props.children, { isRecaptchaScriptLoaded: this.props.isRecaptchaScriptLoaded })}
      </main>
    );
  }
}

export default Main;
