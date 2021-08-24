import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getBestMusics, addToFavoritesMusics } from '../../redux/actions';
import TrackList from '../../components/molecules/TrackList';
import favoriteBtnText from '../../helpers/favoriteBtnText';

function Home(props) {
  const { tracks, getMusics, addTofavorite } = props;

  useEffect(() => {
    getMusics();
  }, [getMusics])

  return (
    <div>
      <TrackList
        tracks={ tracks }
        favoriteFunction={ addTofavorite }
        favoriteBtnText={ favoriteBtnText[0] }
        />
    </div>
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
