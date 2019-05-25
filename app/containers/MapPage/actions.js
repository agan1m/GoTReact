import { SET_COORDINATES, SHOW_ACTIONMENU } from './constants';

export const moveSoldier = payload => ({
  type: 'MOVE',
  payload,
});

export const setCoordinates = payload => ({
  type: SET_COORDINATES,
  payload,
});

export const showActionMenu = show => ({
  type: SHOW_ACTIONMENU,
  show,
});
