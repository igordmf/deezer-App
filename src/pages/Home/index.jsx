import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getBestMusics, addToFavoritesMusics } from '../../redux/actions';
import TrackList from '../../components/molecules/TrackList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import { Container } from './styles';

function Home(props) {
  const { tracks, getMusics, addTofavorite } = props;

  useEffect(() => {
    getMusics();
  }, [getMusics])

  return (
    <Container>
      <TrackList
        tracks={ tracks }
        favoriteFunction={ addTofavorite }
        favoriteBtnText={ favoriteBtnText[0] }
        />
    </Container>
  )
}

const mapStateToProps = (state) => ({
  tracks: state.musicsReducer.tracks,
});

const mapDispatchToProps = (dispatch) => ({
  getMusics: () => dispatch(getBestMusics()),
  addTofavorite: (track) => dispatch(addToFavoritesMusics(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
