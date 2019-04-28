import { fromJS } from 'immutable';

export const initialState = fromJS({
  x: 0,
  y: 0,
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
      return state.set('x', action.payload.x).set('y', action.payload.y);
    default:
      return state;
  }
}

export default appReducer;
