import { ADD_TO_FAVORITES_MUSICS, REMOVE_FAVORITE_MUSIC, MUSICS_TO_LOCAL_STORAGE,
  ALBUMS_TO_LOCAL_STORAGE, ARTISTS_TO_LOCAL_STORAGE,
  ADD_TO_FAVORITES_ALBUMS, REMOVE_FAVORITE_ALBUM,
  ADD_TO_FAVORITES_ARTISTS, REMOVE_FAVORITE_ARTIST } from "../actions/actionTypes";

const INITIAL_STATE = {
  favoritesMusics: [],
  favoritesAlbums: [],
  favoritesArtists: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES_MUSICS:
      if(state.favoritesMusics.some((music) => music.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favoritesMusics: [...state.favoritesMusics, action.payload],
      };
    case REMOVE_FAVORITE_MUSIC:
      return {
        ...state,
        favoritesMusics: [...state.favoritesMusics.filter((music) => music.id !== action.payload.id)],
      };
    case ADD_TO_FAVORITES_ALBUMS:
      if(state.favoritesAlbums.some((album) => album.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favoritesAlbums: [...state.favoritesAlbums, action.payload],
      };
    case REMOVE_FAVORITE_ALBUM:
      return {
        ...state,
        favoritesAlbums: [...state.favoritesAlbums.filter((album) => album.id !== action.payload.id)],
      };
    case ADD_TO_FAVORITES_ARTISTS:
      if(state.favoritesArtists.some((artist) => artist.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favoritesArtists: [...state.favoritesArtists, action.payload],
      };
    case REMOVE_FAVORITE_ARTIST:
      return {
        ...state,
        favoritesArtists: [...state.favoritesArtists.filter((artist) => artist.id !== action.payload.id)],
      };
    case MUSICS_TO_LOCAL_STORAGE:
      return {
        ...state,
        favoritesMusics: [...action.payload],
      };
    case ALBUMS_TO_LOCAL_STORAGE:
      return {
        ...state,
        favoritesAlbums: [...action.payload],
      };
      case ARTISTS_TO_LOCAL_STORAGE:
    return {
      ...state,
      favoritesArtists: [...action.payload],
    };
    default:
      return state;
  }
};

export default favoritesReducer;