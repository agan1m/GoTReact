import React, { Component } from 'react';
import { PolygonWrapper } from './Wrappers';
/* eslint-disable */
class PolygonLand extends Component {
  state = {
    center: {
      x: 0,
      y: 0,
    }
  }

  _handleClick = ev => {
    const { move, center } = this.props;

    // const center = document.getElementById(this.props.id).getBBox();
    move({ x: center.x, y: center.y });
  };
  render() {
    const { points, id } = this.props;
    return (
      <PolygonWrapper
        onClick={this._handleClick}
        style={{
          fill: 'transparent',
          stroke: 'red',
          strokeMiterlimit: 10,
          strokeWidth: 4,
        }}
        id={id}
        points={points}
      />
    );
  }
}

export default PolygonLand;
