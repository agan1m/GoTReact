import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMapDomain = state => state.get('mapPage', initialState);

const makeSelectMapPage = () =>
  createSelector(selectMapDomain, substate => substate.toJS());

export { makeSelectMapPage };

export default selectMapDomain;
