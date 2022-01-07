import { ACTION_TYPES } from '../actions/actionTypes';

const INITIAL_STATE = {
  favoritesMusics: [],
  favoritesAlbums: [],
  favoritesArtists: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_FAVORITES_MUSICS:
      if(state.favoritesMusics.some((music) => music.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favoritesMusics: [...state.favoritesMusics, action.payload],
      };
    case ACTION_TYPES.REMOVE_FAVORITE_MUSIC:
      return {
        ...state,
        favoritesMusics: [...state.favoritesMusics.filter((music) => music.id !== action.payload.id)],
      };
    case ACTION_TYPES.ADD_TO_FAVORITES_ALBUMS:
      if(state.favoritesAlbums.some((album) => album.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favoritesAlbums: [...state.favoritesAlbums, action.payload],
      };
    case ACTION_TYPES.REMOVE_FAVORITE_ALBUM:
      return {
        ...state,
        favoritesAlbums: [...state.favoritesAlbums.filter((album) => album.id !== action.payload.id)],
      };
    case ACTION_TYPES.ADD_TO_FAVORITES_ARTISTS:
      if(state.favoritesArtists.some((artist) => artist.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favoritesArtists: [...state.favoritesArtists, action.payload],
      };
    case ACTION_TYPES.REMOVE_FAVORITE_ARTIST:
      return {
        ...state,
        favoritesArtists: [...state.favoritesArtists.filter((artist) => artist.id !== action.payload.id)],
      };
    case ACTION_TYPES.MUSICS_TO_LOCAL_STORAGE:
      return {
        ...state,
        favoritesMusics: [...action.payload],
      };
    case ACTION_TYPES.ALBUMS_TO_LOCAL_STORAGE:
      return {
        ...state,
        favoritesAlbums: [...action.payload],
      };
      case ACTION_TYPES.ARTISTS_TO_LOCAL_STORAGE:
    return {
      ...state,
      favoritesArtists: [...action.payload],
    };
    default:
      return state;
  }
};

export default favoritesReducer;
