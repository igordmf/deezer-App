import { BEST_MUSICS, PLAY_TRACK, FILTER_TRACKS,
  FILTER_ALBUMS, FILTER_ARTISTS, FOUND_TRACKS,
  FOUND_ARTISTS, FOUND_ALBUMS, ALBUM_TO_PLAYLIST,
  FETCH_ALBUM_PLAYLIST } from "../actions/actionTypes";
import stringCompareWithRegex from '../../helpers/stringCompareWithRegex';

const INITIAL_STATE = {
  albums: [],
  albumOnPlaylist: null,
  artists: [],
  dataToDisplay: null,
  filtredAlbums: [],
  filtredArtists: [],
  filtredTracks: [],
  nextEndpoint: '',
  playingTrack: { preview: '', album: { cover: '', title: '' } },
  playlist: [],
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
    case FETCH_ALBUM_PLAYLIST:
      return {
        ...state,
        albumOnPlaylist: { ...action.payload },
      }
    case ALBUM_TO_PLAYLIST:
      return {
        ...state,
        playlist: [...action.payload.map((track) => (
          { ...track, album: { cover: state.albumOnPlaylist.cover, title: state.albumOnPlaylist.title } }
        ))],
      }
    default:
      return state;
  }
};

export default musicsReducer;