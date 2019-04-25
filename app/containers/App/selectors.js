import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAppDomain = state => state.get('global', initialState);

const makeSelectAppPage = () =>
  createSelector(selectAppDomain, substate => substate.toJS());

export { makeSelectAppPage };

export default selectAppDomain;
