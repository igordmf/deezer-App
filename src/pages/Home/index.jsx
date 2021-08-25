import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getBestMusics, addToFavoritesMusics } from '../../redux/actions';
import TrackList from '../../components/molecules/TrackList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import addToLocalStorage from '../../helpers/localStorageFunctions/addToLocalStorage';
import { Container } from './styles';

function Home() {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.musicsReducer.tracks)

  useEffect(() => {
    dispatch(getBestMusics());
  }, [dispatch])

  return (
    <Container>
      <TrackList
        tracks={ tracks }
        favoriteFunction={ addToFavoritesMusics }
        favoriteBtnText={ favoriteBtnText[0] }
        localStorageFunction={ addToLocalStorage }
      />
    </Container>
  )
}

export default Home;
