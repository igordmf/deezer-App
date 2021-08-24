import { FAVORITES_MUSICS } from "../actions/actionTypes";

const INITIAL_STATE ={
  favorites: [],
}

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITES_MUSICS:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    default:
      return state;
  }
};

export default favoritesReducer;