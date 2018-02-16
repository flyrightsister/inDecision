import React, { Component } from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props)

    this.state = {
      bgColor: '#222'
    }
  }

  handleClick() {
    const bgColor = (this.state.bgColor === '#222') 
      ? '#FF95C7'
      : '#222'
    this.setState({ bgColor })
  }

  render() {
    return (
      <div>
        <a
          className="button uk-button uk-button-secondary"
          onClick={this.handleClick.bind(this)}
          style={{backgroundColor:this.state.bgColor}}
        >{this.props.label}</a>
      </div>
    )
  }
}
