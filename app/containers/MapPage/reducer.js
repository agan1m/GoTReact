import { fromJS } from 'immutable';
import { SET_COORDINATES, SHOW_ACTIONMENU } from './constants';

export const initialState = fromJS({
  x: 0,
  y: 0,
  showActionMenu: false,
  lanistars: {
    soldiers: [{ id: 1, location: 'lanisport' }],
    knights: [],
  },
  starks: {
    soldiers: [{ id: 1, location: 'winterfell' }],
    knights: [],
  },
  barateons: {
    soldiers: [
      { id: 1, location: 'dragonStone' },
      { id: 2, location: 'dragonStone' },
    ],
    knights: [],
  },
  tirels: {
    soldiers: [{ id: 1, location: 'hightGarden' }],
    knights: [],
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'MOVE':
    case SET_COORDINATES:
      return state
        .set('x', action.payload.x)
        .set('y', action.payload.y)
        .set('showActionMenu', true);
    case SHOW_ACTIONMENU:
      return state
        .set('showActionMenu', action.show)
        .set('x', 0)
        .set('y', 0);
    default:
      return state;
  }
}

export default appReducer;
