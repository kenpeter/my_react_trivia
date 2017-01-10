// react
import React from 'react';
// audio
import * as audio from './audio';

class Card extends React.Component {
  constructor(props) {
    super(props);
    
    // state
    // view == points, at starting
    // view == question, it is flipped
    // view == answer, it is flipped
    this.state = {
      view: 'points', 
      completed: false,
      flipping: false
    };
  }


  clickHandler(event) {
    console.log(event);
  
    // start of question
    if (this.state.view === 'points') {
      console.log("points");
    
      audio.play("flip");
    
      // if after 1.8, we still see quesion,
      // play music count down
      setTimeout(() => {
        // cart view === questions
        if (this.state.view === "question") {
          // count down
          audio.play("countdown");
        }
      }, 1800);
      
      // next state and trigger render
      // move to question, flipping true
      // obviously, not completed
      this.setState({view: 'question', flipping: true});
    } 
    else if (this.state.view === 'question') {
      console.log("question");
    
      audio.stop("countdown");
    
      // move to answer, which is else
      this.setState({view: 'answer'});
    }
    else if(this.state.view === 'answer') {
      console.log("answer");
    
      // back to point
      audio.play("flipBack");
      // view points, completed true, flipping true
      this.setState({view: 'points', completed: true, flipping: true});
    }
    else {
      console.log("no view!!!!");
    }
    
  }

  // dangerouslySetInnerHTML set inner html
  getLabelBack() {
    // if question, then question
    // else answer
    return {__html: this.state.view === 'question' ? this.props.question.question : this.props.question.answer};
  }

  transitionEndHandler(event) {
    console.log("transitionEndHandler");
    console.log(event.propertyName);
  
    // when width, stop flipping
    // event propty name
    if (event.propertyName === 'width') {
      // this set state
      // fliping false
      this.setState({flipping: false});
    }
  }

  render() {
    let style = {
      // width
      width: this.props.width + 'px',
      // height
      height: this.props.height + 'px',
      // translate 3d left, top
      transform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)',
      // for webkit
      WebkitTransform: 'translate3d(' + this.props.left + 'px,' + this.props.top + 'px,0)'
    };
  
    // front
    // this state completed
    // react.svg
    // otherwise, point
    let front = 
      this.state.completed ? 
        <img src='assets/img/react.svg'/> : 
        <span className='points'>{this.props.question.points}</span>;
    
    let className = 'flipper';
  
    // not points flipped
    if (this.state.view !== 'points') {
      className = className + ' flipped';
    }
    
    // flipping
    if (this.state.flipping) {
      className = className + ' flipping';
    }
  
    return (
      <div 
        style={style}
        className={className}
        onClick={this.clickHandler.bind(this)}
        onTransitionEnd={this.transitionEndHandler.bind(this)}
      >
        <div className='card'>
          <div className='front'>
            {front}
          </div>
          
          <div className='back' >
            <span dangerouslySetInnerHTML={this.getLabelBack()} />
              <img src='assets/img/react.svg'/>
          </div>
        </div>
      </div>    
    
    );
  }
}



export default Card;
