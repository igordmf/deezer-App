import { BEST_MUSICS, PLAY_TRACK, FILTER_TRACKS,
  FILTER_ALBUMS, FILTER_ARTISTS, FOUND_TRACKS,
  FOUND_ARTISTS, FOUND_ALBUMS } from "../actions/actionTypes";
import stringCompareWithRegex from '../../helpers/stringCompareWithRegex';

const INITIAL_STATE = {
  albums: [],
  artists: [],
  dataToDisplay: null,
  filtredAlbums: [],
  filtredArtists: [],
  filtredTracks: [],
  nextEndpoint: '',
  playingTrack: { preview: '', album: { cover: '', title: '' } },
  tracks: [],
};

const musicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEST_MUSICS:
      return {
        ...state,
        dataToDisplay: 'tracks',
        tracks: action.payload,
        filtredTracks: action.payload,
      };
    case PLAY_TRACK:
      return {
        ...state,
        playingTrack: action.payload,
      };
    case FILTER_TRACKS:
      return {
        ...state,
        dataToDisplay: 'tracks',
        filtredTracks: [...state.tracks.filter((track) => { 
          return (
            stringCompareWithRegex(track.title, action.payload)
            ||
            stringCompareWithRegex(track.artist.name, action.payload)
            ||
            stringCompareWithRegex(track.album.title, action.payload)
          )})],
      };
    case FILTER_ALBUMS:
      return {
        ...state,
        dataToDisplay: 'albums',
        filtredAlbums: [...state.albums.filter((album) => { 
          return (
            stringCompareWithRegex(album.title, action.payload)
            ||
            stringCompareWithRegex(album.artist.name, action.payload)
          )})],
      };
    case FILTER_ARTISTS:
      return {
        ...state,
        dataToDisplay: 'artists',
        filtredArtists: [...state.artists.filter((artists) => { 
          return (
            stringCompareWithRegex(artists.name, action.payload)
          )})],
      };
    case FOUND_TRACKS:
      return {
        ...state,
        dataToDisplay: 'tracks',
        filtredTracks: [...action.payload.data],
        nextEndpoint: action.payload.next,
        tracks: [...action.payload.data],
      }
    case FOUND_ARTISTS:
      return {
        ...state,
        dataToDisplay: 'artists',
        artists: [...action.payload.data],
        filtredArtists: [...action.payload.data],
        nextEndpoint: action.payload.next,
      }
    case FOUND_ALBUMS:
      return {
        ...state,
        dataToDisplay: 'albums',
        albums: [...action.payload.data],
        filtredAlbums: [...action.payload.data],
        nextEndpoint: action.payload.next,
      }
    default:
      return state;
  }
};

export default musicsReducer;