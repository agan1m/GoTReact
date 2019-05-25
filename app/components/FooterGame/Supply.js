import React, { Component } from 'react';
import {
  BarrelListItem,
  FlagsList,
  FlagItem,
  FlagLine,
  FlagCount,
  Barell,
  SuplyWrapper,
} from './Wrappers';
/* eslint-disable */
class Supply extends Component {
  render() {
    return (
      <SuplyWrapper>
        <FlagsList>
          <FlagLine>
            <BarrelListItem>
              <p className="barrel-count">0</p>
              <Barell />
            </BarrelListItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
          <FlagLine>
            <BarrelListItem>
              <p className="barrel-count">1</p>
              <Barell />
            </BarrelListItem>
            <FlagItem>
              <FlagCount>3</FlagCount>
            </FlagItem>
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
          <FlagLine>
            <BarrelListItem>
              <p className="barrel-count">2</p>
              <Barell />
            </BarrelListItem>
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
            <BarrelListItem>
              <p className="barrel-count">3</p>
              <Barell />
            </BarrelListItem>
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
            <BarrelListItem>
              <p className="barrel-count">4</p>
              <Barell />
            </BarrelListItem>
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
            <BarrelListItem>
              <p className="barrel-count">5</p>
              <Barell />
            </BarrelListItem>
            <FlagItem>
              <FlagCount>4</FlagCount>
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
            <BarrelListItem>
              <p className="barrel-count">6</p>
              <Barell />
            </BarrelListItem>
            <FlagItem>
              <FlagCount>4</FlagCount>
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
            <FlagItem>
              <FlagCount>2</FlagCount>
            </FlagItem>
          </FlagLine>
        </FlagsList>
      </SuplyWrapper>
    );
  }
}

export default Supply;
