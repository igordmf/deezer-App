function addMusicsToLocalStorage(selectedTrack) {
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  if(favorites) {
    if(favorites.some((favorite) => favorite.id === selectedTrack.id)) return;
    const newFavorites = [...favorites, selectedTrack];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  } else {
    localStorage.setItem('favorites', JSON.stringify([selectedTrack]));
  }
}

export default addMusicsToLocalStorage;