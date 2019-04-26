import styled from 'styled-components';
import flag from '!file-loader?name=[name].[ext]!../../images/flag.png';

export const FooterGameWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const FooterGameSide = styled.div`
  width: 30%;
`;

export const FooterGameCenter = styled.div`
  width: 40%;
`;

export const RoundesWrapper = styled.ol`
  display: flex;
  counter-reset: section;
  list-style-type: none;
`;

export const Round = styled.li`
  width: 8%;
  &::before {
    counter-increment: section;
    content: counter(section);
  }
`;

export const CastlesWrapper = styled.ol`
  display: flex;
  counter-reset: section;
  list-style-type: none;
`;

export const CastleItem = styled.li`
  width: 13%;
  &::before {
    counter-increment: section;
    content: counter(section);
  }
`;

export const InfluenceList = styled.ol`
  display: flex;
  counter-reset: section;
  list-style-type: none;
`;

export const InfluenceListItem = styled.li`
  width: 16%;
  &::before {
    counter-increment: section;
    content: counter(section);
  }
`;

export const BarrelList = styled.ol`
  display: flex;
  counter-reset: section;
  list-style-type: none;
`;

export const BarrelListItem = styled.li`
  width: 16%;
  &::before {
    counter-increment: section;
    content: counter(section);
  }
`;

export const FlagsList = styled.div`
  display: flex;
`;

export const FlagLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16%;
`;

export const FlagCount = styled.span`
  line-height: 40px;
`;

export const FlagItem = styled.div`
  background-image: url(${flag});
  background-size: cover;
  width: 50px;
  text-align: center;
  height: 40px;
`;
