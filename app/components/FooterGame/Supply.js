import React, { Component } from 'react';
import {
  BarrelList,
  BarrelListItem,
  FlagsList,
  FlagItem,
  FlagLine,
  FlagCount,
} from './Wrappers';
/* eslint-disable */
class Supply extends Component {
  render() {
    return (
      <div>
        <BarrelList>
          <BarrelListItem />
          <BarrelListItem />
          <BarrelListItem />
          <BarrelListItem />
          <BarrelListItem />
          <BarrelListItem />
        </BarrelList>
        <FlagsList>
          <FlagLine>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
          <FlagLine>
            <FlagItem>
              <FlagCount>3</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
          <FlagLine>
            <FlagItem>
              <FlagCount>3</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
          <FlagLine>
            <FlagItem>
              <FlagCount>3</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
          <FlagLine>
            <FlagItem>
              <FlagCount>3</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>3</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
          <FlagLine>
            <FlagItem />
            <FlagItem />
            <FlagItem />
            <FlagItem />
          </FlagLine>
          <FlagLine>
            <FlagItem />
            <FlagItem />
            <FlagItem />
            <FlagItem />
            <FlagItem />
          </FlagLine>
        </FlagsList>
      </div>
    );
  }
}

export default Supply;
