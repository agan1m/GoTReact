import React, { Component } from 'react';
import {
  InfluenceList,
  InfluenceListItem,
  InfluenceLine,
  InfluenceThrone,
  InfluenceCrow,
  InfluenceSword,
  InfluenceWrapper,
} from './Wrappers';
/* eslint-disable */
class Influence extends Component {
  render() {
    return (
      <InfluenceWrapper>
        <InfluenceLine>
          <InfluenceThrone />
          <InfluenceList>
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
          </InfluenceList>
        </InfluenceLine>
        <InfluenceLine>
          <InfluenceSword />
          <InfluenceList>
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
          </InfluenceList>
        </InfluenceLine>
        <InfluenceLine>
          <InfluenceCrow />
          <InfluenceList>
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
            <InfluenceListItem />
          </InfluenceList>
        </InfluenceLine>
      </InfluenceWrapper>
    );
  }
}

export default Influence;
