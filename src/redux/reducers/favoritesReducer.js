import { ADD_TO_FAVORITES, REMOVE_FAVORITE } from "../actions/actionTypes";

const INITIAL_STATE ={
  favorites: [],
}

export const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites.filter((track) => track.id !== action.payload.id)],
      }
    default:
      return state;
  }
};

export default favoritesReducer;