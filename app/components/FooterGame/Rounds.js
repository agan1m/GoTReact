import React, { Component } from 'react';
import { RoundesWrapper, Round } from './Wrappers';
/* eslint-disable */
class Rounds extends Component {
  render() {
    return (
      <RoundesWrapper>
        <Round active />
        <Round />
        <Round />
        <Round />
        <Round />
        <Round />
        <Round />
        <Round />
        <Round />
        <Round />
      </RoundesWrapper>
    );
  }
}

export default Rounds;
