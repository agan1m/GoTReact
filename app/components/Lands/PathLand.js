import React, { Component } from 'react';
import { PathWrapper } from './Wrappers';

/* eslint-disable */
class PathLand extends Component {
  constructor(props) {
    super(props);
    this.pathRef = React.createRef();
  }

  _handleClick = ev => {
    const { move, center } = this.props;
    // const center = document.getElementById(this.props.id).getBBox();

    move({ x: center.x, y: center.y });
  };

  render() {
    const { id, d } = this.props;
    return (
      <PathWrapper
        id={id}
        ref={this.pathRef}
        onClick={this._handleClick}
        style={{
          fill: 'transparent',
          stroke: 'red',
          strokeMiterlimit: 10,
          strokeWidth: 4,
        }}
        d={d}
      />
    );
  }
}

export default PathLand;
