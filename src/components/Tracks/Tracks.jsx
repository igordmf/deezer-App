import React from 'react'
import { connect } from 'react-redux';
import formatDuration from '../../helpers/formatDuration';
import { addTofavoritesMusics } from '../../redux/actions';

function Tracks(props) {
  const { tracks, addTofavorite } = props;
  console.log(tracks);

  return (
    <div>
      {tracks.map((track) => (
        <div>
          <img src={ track.album.cover } alt={`Capa do album: ${ track.album.title }`} />
          <span>{ track.title }</span>
          <span>{ track.artist.name }</span>
          <span>Duração: { formatDuration(track.duration) }</span>
          <button type="button" onClick={ () => window.open(track.link, "_blank") }>Abrir música em nova aba</button>
          <div>
            <button type="button">Play</button>
            <button type="button">Pause</button>
          </div>
          <button type="button" onClick={ () => addTofavorite(track) }>Adicionar aos favoritos</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tracks: state.musicsReducer.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  addTofavorite: () => dispatch(addTofavoritesMusics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
