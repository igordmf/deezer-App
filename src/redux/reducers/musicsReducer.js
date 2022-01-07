import { ACTION_TYPES } from '../actions/actionTypes';
import stringCompareWithRegex from '../../helpers/stringCompareWithRegex';

const INITIAL_STATE = {
  albums: [],
  albumOnPlaylist: null,
  artists: [],
  artistOnPlaylist: null,
  dataToDisplay: null,
  filtredAlbums: [],
  filtredArtists: [],
  filtredTracks: [],
  loading: true,
  nextEndpoint: '',
  playingTrack: { preview: '', album: { cover: '', title: '' }, artist: '' },
  playlist: [],
  tracks: [],
};

const musicsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.BEST_MUSICS:
      return {
        ...state,
        dataToDisplay: 'tracks',
        tracks: action.payload,
        filtredTracks: action.payload,
        loading: false,
      };
    case ACTION_TYPES.PLAY_TRACK:
      return {
        ...state,
        playingTrack: action.payload,
      };
    case ACTION_TYPES.FILTER_TRACKS:
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
    case ACTION_TYPES.FILTER_ALBUMS:
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
    case ACTION_TYPES.FILTER_ARTISTS:
      return {
        ...state,
        dataToDisplay: 'artists',
        filtredArtists: [...state.artists.filter((artists) => { 
          return (
            stringCompareWithRegex(artists.name, action.payload)
          )})],
      };
    case ACTION_TYPES.FOUND_TRACKS:
      return {
        ...state,
        dataToDisplay: 'tracks',
        filtredTracks: [...action.payload.data],
        nextEndpoint: action.payload.next,
        tracks: [...action.payload.data],
        loading: false,
      }
    case ACTION_TYPES.FOUND_ARTISTS:
      return {
        ...state,
        dataToDisplay: 'artists',
        artists: [...action.payload.data],
        filtredArtists: [...action.payload.data],
        nextEndpoint: action.payload.next,
        loading: false,
      }
    case ACTION_TYPES.FOUND_ALBUMS:
      return {
        ...state,
        dataToDisplay: 'albums',
        albums: [...action.payload.data],
        filtredAlbums: [...action.payload.data],
        nextEndpoint: action.payload.next,
        loading: false,
      }
    case ACTION_TYPES.FETCH_ALBUM_PLAYLIST:
      return {
        ...state,
        albumOnPlaylist: { ...action.payload },
        artistOnPlaylist: null,
        loading: true,
      }
    case ACTION_TYPES.ALBUM_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...action.payload.map((track) => (
          { ...track, album: { cover: state.albumOnPlaylist.cover, title: state.albumOnPlaylist.title } }
        ))],
        loading: false,
      }
    case ACTION_TYPES.FETCH_ARTIST_PLAYLIST:
      return {
        ...state,
        albumOnPlaylist: null,
        artistOnPlaylist: { ...action.payload },
        loading: true,
      }
    case ACTION_TYPES.ARTIST_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...action.payload],
        loading: false,
      }
    case ACTION_TYPES.LOADING_TO_FALSE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
};

export default musicsReducer;
