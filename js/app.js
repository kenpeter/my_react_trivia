// react
import React from 'react';
// react dom
import ReactDOM from 'react-dom';
// cart
import Card from './Card';
// headers
import Headers from './Headers';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // win width
      // win inner width
      windowWidth: window.innerWidth,
      
      // win height
      // win inner height
      windowHeight: window.innerHeight,
      
      //data, empty
      data: []
    };
  }

  render() {
    return (
      <div>
        <h3>App.js</h3>
      </div>
    );
  }  
}


ReactDOM.render(<App/>, document.getElementById('app'));
