function addArtistsToLocalStorage(selectedArtist) {
  const favoritesArtists = JSON.parse(localStorage.getItem('favoritesArtists'));
  if(favoritesArtists) {
    if(favoritesArtists.some((artist) => artist.id === selectedArtist.id)) return;
    const newFavoritesArtists = [...favoritesArtists, selectedArtist];
    localStorage.setItem('favoritesArtists', JSON.stringify(newFavoritesArtists));
  } else {
    localStorage.setItem('favoritesArtists', JSON.stringify([selectedArtist]));
  }
}

export default addArtistsToLocalStorage;