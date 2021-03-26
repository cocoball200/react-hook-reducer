import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objectValue,
      nodeValue,
      funcValue,
    } = this.props;
    return (
      <div>
        <span>{boolValue ? 'true' : 'falsy값에 undefined'}</span>
        <span> 숫자값 | {numValue}</span>
        <span>배열값 |{arrayValue}</span>
        <span>객체값 {objectValue.name}|</span>
        <span>노드값 |{nodeValue}</span>
        <span>함수값 |{funcValue}</span>
      </div>
    )
  }
}
ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objectValue: PropTypes.shape({
    name: PropTypes.string,
    nationality: PropTypes.string
  }),
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
}
export default ChildComponent
