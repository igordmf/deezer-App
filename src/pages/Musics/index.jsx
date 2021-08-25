import React from 'react'
import { connect } from 'react-redux';
import { removeFromFavorite } from '../../redux/actions';
import TrackList from '../../components/molecules/TrackList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import { Container } from './styles';

function Musics(props) {
  const { favorites, removeFavorite } = props;

  return (
    <Container>
      <TrackList
        tracks={ favorites }
        favoriteFunction={ removeFavorite }
        favoriteBtnText={ favoriteBtnText[1] }
      />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  favorites: state.favoritesReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (track) => dispatch(removeFromFavorite(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Musics);
