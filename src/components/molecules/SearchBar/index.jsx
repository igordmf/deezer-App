import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterTracks } from '../../../redux/actions';
import { StyledSearchBar } from './styles';

function SearchBar() {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterTracks(term));
  }, [term, dispatch])

  const filterByTerm = async ({ target }) => {
    setTerm(target.value);
  }

  return (
    <StyledSearchBar>
      <input
        type="text"
        placeholder="título musical, artista ou álbum"
        onChange={ ({ target }) => filterByTerm({ target }) }
      />
    </StyledSearchBar>
  )
}

export default SearchBar;
