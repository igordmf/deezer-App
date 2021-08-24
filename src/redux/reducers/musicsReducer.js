import { BEST_MUSICS } from "../actions/actionTypes";

const INITIAL_STATE ={
  tracks: [],
}

const musicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEST_MUSICS:
      return {
        ...state,
        tracks: action.payload,
      }
    default:
      return state;
  }
};

export default musicsReducer;