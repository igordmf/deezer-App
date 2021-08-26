import { ADD_TO_FAVORITES, REMOVE_FAVORITE, LOCAL_STORAGE_TO_FAVORITES } from "../actions/actionTypes";

const INITIAL_STATE = {
  favorites: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if(state.favorites.some((favorite) => favorite.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites.filter((track) => track.id !== action.payload.id)],
      };
    case LOCAL_STORAGE_TO_FAVORITES:
      return {
        ...state,
        favorites: [...action.payload],
      };
    default:
      return state;
  }
};

export default favoritesReducer;