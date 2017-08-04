import React, { Component } from 'react';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div className='mainDiv'>
        <h1>BaseLayout Working</h1>

        {this.props.children}
      </div>
    )
  }
}
