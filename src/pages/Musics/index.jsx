import React from 'react'
import { connect } from 'react-redux';
import { removeFromFavorite } from '../../redux/actions';
import TrackList from '../../components/molecules/TrackList';
import favoriteBtnText from '../../helpers/favoriteBtnText';

function Musics(props) {
  const { favorites, removeFavorite } = props;
  console.log(favorites);

  return (
    <div>
      <TrackList
        tracks={ favorites }
        favoriteFunction={ removeFavorite }
        favoriteBtnText={ favoriteBtnText[1] }
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.favoritesReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (track) => dispatch(removeFromFavorite(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Musics);
