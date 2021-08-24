import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getBestMusics } from '../../redux/actions';
import Tracks from '../../components/Tracks/Tracks';

function Home(props) {
  const { getMusics } = props;

  useEffect(() => {
    getMusics();
  }, [getMusics])

  return (
    <div>
      <Tracks />
    </div>
  )
}

/* const mapStateToProps = (state) => ({
  tracks: state.musicsReducer.tracks,
}); */

const mapDispatchToProps = (dispatch) => ({
  getMusics: () => dispatch(getBestMusics()),
});

export default connect(null, mapDispatchToProps)(Home);
