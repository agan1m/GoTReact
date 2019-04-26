import React, { Component } from 'react';
import Rounds from '../../components/FooterGame/Rounds';
import Castles from '../../components/FooterGame/Castles';
import Influence from '../../components/FooterGame/Influence';
import Supply from '../../components/FooterGame/Supply';
import {
  FooterGameWrapper,
  FooterGameCenter,
  FooterGameSide,
} from '../../components/FooterGame/Wrappers';
/* eslint-disable */

class FooterGameInfo extends Component {
  render() {
    return (
      <FooterGameWrapper>
        <FooterGameSide>
          <Rounds />
          <Castles />
        </FooterGameSide>
        <FooterGameCenter>
          <Supply />
        </FooterGameCenter>
        <FooterGameSide>
          <Influence />
        </FooterGameSide>
      </FooterGameWrapper>
    );
  }
}

export default FooterGameInfo;
