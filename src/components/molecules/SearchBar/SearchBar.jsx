import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterAlbums, filterArtists, filterTracks, getDataOnSearch } from '../../../redux/actions';
import { StyledSearchBar } from './styles';

function SearchBar() {
  const [term, setTerm] = useState('');
  const [select, setSelect] = useState('');
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    switch(search) {
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
  }, [term, search, dispatch])

  const filterByTerm = async ({ target }) => {
    setTerm(target.value);
  }

  const handleSelect = (e) => {
    setSelect(e.target.value);
  }

  const getDataBySearch = ({ select, term }) => {
    if(term) {
      dispatch(getDataOnSearch({ select, term }));
      setTerm('');
      setSearch(true);
    }
  }

  return (
    <>
      <StyledSearchBar>
        <input
          onChange={ ({ target }) => filterByTerm({ target }) }
          placeholder="título musical, artista ou álbum"
          type="text"
          value= { term }
        />
      </StyledSearchBar>
      <select onChange={ handleSelect }>
        <option value=''></option>
        <option value='track'>Track</option>
        <option value='artist'>Artist</option>
        <option value='album'>Album</option>
      </select>
      {select && <button onClick={ () => getDataBySearch({ select, term }) }>buscar</button>}
    </>
  )
}

export default SearchBar;
