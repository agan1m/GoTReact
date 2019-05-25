import styled from 'styled-components';
import flag from '!file-loader?name=[name].[ext]!../../images/flag.png';
import bg from '!file-loader?name=[name].[ext]!../../images/UIbg.png';
import scroll from '!file-loader?name=[name].[ext]!../../images/bg_scroll.png';
import barrel from '../../images/barrel.svg';
import castle from '../../images/fort.svg';
import bgBorder from '!file-loader?name=[name].[ext]!../../images/UIborder1.png';
import watch from '../../images/sand-watch-with-content-falling-inside.svg';
import throne from '../../images/throne.png';
import crow from '../../images/crow-on-branch.svg';
import sword from '../../images/sword.png';

export const FooterGameWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FooterGameSide = styled.div`
  width: 30%;
  background-image: url(${bg});
  background-size: cover;
`;

export const FooterGameCenter = styled.div`
  width: 40%;
  background-image: url(${bg});
  background-size: cover;
  position: relative;
  ::before {
    content: '';
    background-image: url(${bgBorder});
    position: absolute;
    right: 98%;
    width: 25px;
    height: 100%;
  }
  ::after {
    content: '';
    background-image: url(${bgBorder});
    position: absolute;
    right: -1%;
    width: 25px;
    height: 100%;
    top: 0;
  }
`;

export const SuplyWrapper = styled.div`
  /* background-image: url(${scroll});
  background-size: cover; */
  padding: 20px 0;
  margin: 0;
 
`;

export const RoundesWrapper = styled.ol`
  display: flex;
  counter-reset: section;
  list-style-type: none;
  height: 50%;
  justify-content: space-around;
  padding: 30px 17px;
  box-sizing: border-box;
`;

export const Round = styled.li`
  width: 8%;
  background-color: #5e615d;
  border-radius: 4px;
  text-align: center;
  background-image: url(${props => (props.active ? watch : '')});
  background-position: center;
  &::before {
    counter-increment: section;
    content: counter(section);
  }
`;

export const CastlesWrapper = styled.ol`
  display: flex;
  counter-reset: section;
  list-style-type: none;
  padding: 0;
  height: 40%;
  margin: 0;
  justify-content: space-around;
  padding: 0 20px;
`;

export const CastleItem = styled.li`
  width: 13%;
  height: 70px;
  border-radius: 50%;
  text-align: center;
  background-image: url(${castle});
  background-size: 70%;
  background-position: center;
  border: 1px solid black;
  :last-child {
    fill: gold;
  }
  &::before {
    counter-increment: section;
    content: counter(section);
  }
`;

export const InfluenceList = styled.ol`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 0;
  counter-reset: section;
  list-style-type: none;
`;

export const InfluenceListItem = styled.li`
  width: 60px;
  height: 55px;
  border-radius: 50%;
  border: 1px solid black;
  text-align: center;

  &::before {
    counter-increment: section;
    content: counter(section);
  }
`;

export const BarrelList = styled.ol`
  display: flex;
  counter-reset: section;
  list-style-type: none;
  margin: 0;
`;

export const BarrelListItem = styled.div`
  width: 100%;
  text-align: center;
  height: 50px;
  position: absolute;
  top: 0;
  .barrel-count {
    margin: 0;
  }
`;

export const Barell = styled.div`
  background-image: url(${barrel});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100%;
`;

export const FlagsList = styled.ol`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0 15px;
`;

export const FlagLine = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16%;
  justify-content: center;
  position: relative;
  padding-top: 77px;
`;

export const FlagCount = styled.span`
  line-height: 40px;
  color: #fff;
`;

export const FlagItem = styled.div`
  background-image: url(${flag});
  background-size: cover;
  width: 50px;
  text-align: center;
  height: 40px;
`;

export const InfluenceLine = styled.div`
  display: flex;
  align-items: center;
`;

export const InfluenceThrone = styled.div`
  background-image: url(${throne});
  width: 80px;
  height: 80px;
  background-size: contain;
`;

export const InfluenceCrow = styled.div`
  background-image: url(${crow});
  width: 80px;
  height: 80px;
  background-size: contain;
`;

export const InfluenceSword = styled.div`
  background-image: url(${sword});
  background-position: center;
  width: 80px;
  height: 80px;
  background-size: contain;
`;

export const InfluenceWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
