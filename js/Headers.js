import React from 'react';

class Headers extends React.Component {

  render() {
    // let style
    let style = {
      // width props. header width
      width: this.props.headerWidth
    };
  
    // headers empty array
    let headers = [];
  
    //test
    console.log(this.props.data);
  
    // this props
    // data
    // forEach
    this.props.data.forEach(
      // cat
      // index
      // in func
      // headers push
      // with style, key and display cat
      (cat, index) => headers.push(
        <span className='header' style={style} key={index}>{cat.name}</span>
      )
    );
  
    return (
      <div className='headers'>
        {headers}
      </div>  
    );
  }
}


export default Headers;
