import React, { Component } from 'react'

export default class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      formData: 'no data',
    }
    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }
  // handleData() {
  //   const data = 'new Data';
  //   const { formData } = this.state;
  //   this.setState({
  //     loading: false,
  //     formData: data + formData
  //   });
  //   console.log('loading값', this.state.loading)
  // }

  handleData(data) {
    this.setState(prevState => ({
      loading: false,
      formdata: data + prevState.formData
    }))
  }
  render() {
    return (
      <div>
        <span> 로딩중 : {String(this.state.loading)}</span>
        <span> 결과 : {this.state.formData}</span>
      </div>
    )
  }
}
