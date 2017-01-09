// react
import React from 'react';
// react dom
import ReactDOM from 'react-dom';
// cart
import Card from './Card';
// headers
import Headers from './Headers';

import request from './request';

class App extends React.Component {
  constructor(props) {
  
    console.log("contructor");
  
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
  
  
  // handle resize
  // event, not used
  handleResize(event) {
    // this
    // set state
    // {}
    this.setState({
      // win inner width
      windowWidth: window.innerWidth,
      // win inner height
      windowHeight: window.innerHeight
    });
  }


  // jquery ready
  componentDidMount() {
    // when resize set state.w and state.h
    window.addEventListener('resize', this.handleResize.bind(this));
    
    console.log("componentDidMount");
    
    // request
    // url
    // data
    // then
    // result => {}
    request({url: "http://localhost:3000/cat_question.json"}).then(result => {
      // data which is the cat name + questions
      let data = JSON.parse(result);
      let rows = 0;
      
      //test
      //console.log("==== test ===");
      //console.log(data);
      
      // for each cat
      data.forEach(category => {
        // question len > rows
        if (category.questions.length > rows) {
          // rows == question len
          // rows === max
          rows = category.questions.length;
        }
      });
      
      // cat + question
      // rows == max questions len in each, col
      this.setState({data: data, rows: rows, cols: data.length});
      
      //test
      //console.log(this.state);
    });
  }


  componentWillUnmount() {
    // win remove event listener
    // resize
    // 
    window.removeEventListener('resize', this.handleResize);
  }


  render() {
    // header height
    // well it depends on win.w, so 60 or 32
    let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
      
    // individual car width
    cardWidth = this.state.windowWidth / this.state.cols,
    
    // card height
    // minus header / this.state.rows
    cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
    cards = [];
  
    this.state.data.forEach((category, categoryIndex) => {
    
      /*
      console.log("==========");
      console.log(categoryIndex);
      console.log(category);
      */
      
    });
  
    return (
      <div>
        <h3>App.js - change?</h3>
        <Headers />
      </div>
    );
  }  
}


ReactDOM.render(<App/>, document.getElementById('app'));
