import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterAlbums, filterArtists, filterTracks, getDataOnSearch } from '../../../redux/actions';
import { Container, StyledSearchBar } from './styles';

function SearchBar() {
  const [term, setTerm] = useState('');
  const [select, setSelect] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    switch(select) {
      case 'album':
        dispatch(filterAlbums(term));
        break;
      case 'artist':
        dispatch(filterArtists(term));
        break;
      case 'track':
        dispatch(filterTracks(term));
        break;
      default:
        dispatch(filterTracks(term));
        break;
    }
  }, [term, select, dispatch])

  const filterByTerm = ({ target }) => {
    setTerm(target.value);
  }

  const handleChangeOptionSelect = (e) => {
    setSelect(e.target.value);
  }

  const getDataBySearch = ({ select, term }) => {
    if(term) {
      dispatch(getDataOnSearch({ select, term }));
      setTerm('');
    }
  }

  return (
    <Container>
      <StyledSearchBar>
        <input
          onChange={ ({ target }) => filterByTerm({ target }) }
          placeholder="título musical, artista ou álbum"
          type="text"
          value= { term }
        />
      </StyledSearchBar>
      <div>
        <select onChange={ handleChangeOptionSelect }>
          <option value=''></option>
          <option value='track'>Tracks</option>
          <option value='artist'>Artists</option>
          <option value='album'>Albums</option>
        </select>
        {select ? <button onClick={ () => getDataBySearch({ select, term }) }>buscar</button> : <div>{` `}</div>}
      </div>
    </Container>
  )
}

export default SearchBar;
