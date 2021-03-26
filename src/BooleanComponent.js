import React, { Component } from 'react'

export default class BooleanComponent extends Component {
  render() {
    const message = this.props.study ? '더 공부해라' : '이제 놀아도 된다.'
    return (
      <div className="message-container">
        {message}
      </div>
    )
  }
}
